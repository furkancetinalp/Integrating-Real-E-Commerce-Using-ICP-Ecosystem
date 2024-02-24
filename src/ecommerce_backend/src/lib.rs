use candid::{CandidType, Decode, Deserialize, Encode};
use ic_cdk::api::management_canister::http_request::{
    http_request, CanisterHttpRequestArgument, HttpHeader, HttpMethod,
};
use ic_cdk::{
    api::{self, call},
    export::candid,
    storage,
};
mod import_product_http_response;
use import_product_http_response::ImportProductResponse;
use ic_stable_structures::memory_manager::{MemoryId, MemoryManager, VirtualMemory};
use ic_stable_structures::{BoundedStorable, DefaultMemoryImpl, StableBTreeMap, Storable};
use login_model::LoginModel;
use serde::Serialize;
use std::result;
use std::{borrow::Cow, cell::RefCell};
use token_model::TokenModel;
mod add_product_request;
mod login_model;
mod token_model;
use add_product_request::{AddProductRequest, Currency, Data, Image, Location, Parameter, Price};
mod add_product_response;
use add_product_response::AddProductResponse;
mod product;
use product::Product;
mod get_categories_http_response;
use get_categories_http_response::GetCategoriesHttpResponse;
mod categories;
use categories::Categories;

//memory definition
type Memory = VirtualMemory<DefaultMemoryImpl>;
const MAX_VALUE_SIZE: u32 = 1024;

impl Storable for Product {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}
// Implementing BoundedStorable for Product
impl BoundedStorable for Product {
    const MAX_SIZE: u32 = MAX_VALUE_SIZE;
    const IS_FIXED_SIZE: bool = false;
}

impl Storable for Categories {
    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}
// Implementing BoundedStorable for Categories
impl BoundedStorable for Categories {
    const MAX_SIZE: u32 = MAX_VALUE_SIZE;
    const IS_FIXED_SIZE: bool = false;
}

// Creating memory manager with a new MemoryId
thread_local! {
    static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> =
    RefCell::new(MemoryManager::init(DefaultMemoryImpl::default()));

    static PRODUCT_MAP: RefCell<StableBTreeMap<u64, Product,Memory>> = RefCell::new(
        StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(0))),
        )
    );
    static CATEGORY_MAP: RefCell<StableBTreeMap<u64, Categories,Memory>> = RefCell::new(
        StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(1))),
        )
    );
}

// ************************* CATEGORY

#[ic_cdk_macros::update]
async fn import_categories() -> Option<String> {
    let result = get_categories_from_marketplace().await;
    match result {
        Ok(item) => {
            for data in item {
                let key: u64 = data.id.parse().unwrap();
                let if_category_exists = get_category_by_id(key);
                
                match if_category_exists {
                    Some(_) => {
                        continue;
                    }
                    None =>{
                        let add = CATEGORY_MAP.with(|p| p.borrow_mut().insert(key, data));
                    }
                }
                
            }
            return Some("success".to_string());
        }
        Err(eror) => {
            return None;
        }
    }
}

#[ic_cdk_macros::query]
fn get_all_categories_from_canister() -> Option<Vec<Categories>> {
    // let s = PRODUCT_MAP.with(|p| p.borrow().get(&key));
    let mut result: Vec<Categories> = vec![];
    let s2: Vec<_> = CATEGORY_MAP.with(|p| p.borrow().iter().map(|x| x).collect());
    for item in s2.iter() {
        let x = item.1.clone();
        result.insert(result.len(), x);
    }
    if result.len() > 0 {
        return Some(result);
    }
    None
}

fn get_category_by_id(id: u64) -> Option<Categories> {
    // let x = CATEGORY_MAP.with(|p| p.borrow().iter().filter(|x| x.1.name==).get(&id));

    CATEGORY_MAP.with(|p| p.borrow().get(&id))
}

#[ic_cdk_macros::query]
fn get_category_by_name(name: String) -> Option<Categories> {
    let x  = CATEGORY_MAP.with(|p| p.borrow().iter().find(|x| x.1.key==name || x.1.name==name)).clone();
    match x {
        Some(data) => {
            return Some(data.1);
        }
        None => {
            return None;
        }
    };

}
// ************************* PRODUCT

fn add_product_to_canister(item: Product) -> Option<Product> {
    let key: u64 = item.id.parse().unwrap();
    let data = Product {
        id: item.id,
        title: item.title,
        description: item.description,
        image_url: item.image_url,
        price: item.price,
        created_at: item.created_at,
        category_id: item.category_id,
    };
    PRODUCT_MAP.with(|p| p.borrow_mut().insert(key, data))
}

#[ic_cdk_macros::query]
fn get_all_products_from_canister() -> Option<Vec<Product>> {
    // let s = PRODUCT_MAP.with(|p| p.borrow().get(&key));
    let mut result: Vec<Product> = vec![];
    let s2: Vec<_> = PRODUCT_MAP.with(|p| p.borrow().iter().map(|x| x).collect());
    for item in s2.iter() {
        let x = item.1.clone();
        result.insert(result.len(), x);
    }
    if result.len() > 0 {
        return Some(result);
    }
    None
}

#[ic_cdk_macros::query]
fn get_product(key: u64) -> Option<Product> {
    let s = PRODUCT_MAP.with(|p| p.borrow().get(&key));
    return s;
}

//getting weather data by city name
#[ic_cdk::update]
async fn login_letgo(email: String, password: String) -> Result<TokenModel, String> {
    let url = "https://www.letgo.com/api/auth/authenticate/login".to_string();

    let json_string2 = serde_json::json!({"grantType":"email","email": email,
    "password": password})
    .to_string();

    let json_string = serde_json::json!({"grantType":"email","email": email,
    "password": password})
    .to_string();
    let json_utf8: Vec<u8> = json_string.into_bytes();
    let request_body: Option<Vec<u8>> = Some(json_utf8);
    // let request_headers = vec![];

    let request_headers = vec![HttpHeader {
        name: "Content-Type".to_string(),
        value: "application/json".to_string(),
    }];

    let request = CanisterHttpRequestArgument {
        url,
        method: HttpMethod::POST,
        body: request_body,
        max_response_bytes: None,
        transform: None,
        headers: request_headers,
    };

    //if Ok => deserializing response
    //else => returning a string message
    match http_request(request).await {
        Ok((response,)) => {
            if response.status == 200 {
                let login_model: LoginModel =
                    serde_json::from_slice(&response.body).expect("Failed to parse JSON response.");

                let token_result = TokenModel {
                    id:login_model.user.id,
                    token: login_model.access_token,
                };
                return Ok(token_result);
            } else {
                Err(format!(
                    "HTTP request failed with status code: {}",
                    response.status
                ))
            }
        }
        Err((code, message)) => Err(format!(
            "The http_request resulted in an error. Code: {:?}, Message: {}",
            code, message
        )),
    }
}

#[ic_cdk::update]
async fn sendProductLetgo(
    title: String,
    category_id: u64,
    price: f64,
    image_id: String,
    description: String,
    token: String,
) -> Result<Product, String> {
    let url = "https://www.letgo.com/api/v2/items".to_string();

    //image
    let mut image_list = vec![];
    let image = Image {
        id: image_id.to_string(),
    };
    image_list.insert(0, image);

    //location
    let mut location_list = vec![];
    let location = Location {
        lat: 38.7333333,
        lon: 35.4833333,
    };
    location_list.insert(0, location);

    //parameters
    let mut parameter_list = vec![];
    let parameter = add_product_request::Price {
        raw: price,
        currency: Currency {
            iso_4217: "TRY".to_string(),
        },
    };
    let para = Parameter { price: parameter };
    parameter_list.insert(0, para);

    let json_data = AddProductRequest {
        data: Data {
            description,
            images: image_list,
            locations: location_list,
            parameters: parameter_list,
            category_id: category_id,
            title,
        },
    };

    let json_string = serde_json::json!(json_data).to_string();
    let json_utf8: Vec<u8> = json_string.into_bytes();
    let request_body: Option<Vec<u8>> = Some(json_utf8);

    let request_headers = vec![
        HttpHeader {
            name: "Content-Type".to_string(),
            value: "application/json".to_string(),
        },
        HttpHeader {
            name: "Authorization".to_string(),
            value: "Bearer ".to_string() + &token,
        },
    ];

    let request = CanisterHttpRequestArgument {
        url,
        method: HttpMethod::POST,
        body: request_body,
        max_response_bytes: None,
        transform: None,
        headers: request_headers,
    };

    //if Ok => deserializing response
    //else => returning a string message
    match http_request(request).await {
        Ok((response,)) => {
            if response.status == 201 {
                let response_model: AddProductResponse =
                    serde_json::from_slice(&response.body).expect("Failed to parse JSON response.");

                // let token_result = TokenModel {
                //     token: login_model.access_token,
                // };
                let result = Product {
                    id: response_model.data.id,
                    title: response_model.data.title,
                    description: response_model.data.description,
                    price,
                    image_url: (&response_model.data.images[0].url).to_string(),
                    created_at: (&response_model.data.created_at).to_string(),
                    category_id: (&response_model.data.category_id).to_string(),
                };

                let add_to_canister = add_product_to_canister(result.clone());
                match add_to_canister {
                    Some(data) => {
                        return Ok(data);
                    }
                    None => {
                        return Err(format!(
                            "Gönderildi ama canistera kaydedilemedi, {}",
                            &result.image_url
                        ));
                    }
                };
            } else {
                Err(format!(
                    "HTTP request failed with status code: {}",
                    response.status
                ))
            }
        }
        Err((code, message)) => Err(format!(
            "The http_request resulted in an error. Code: {:?}, Message: {}",
            code, message
        )),
    }
}

//importing all categories from letgo
async fn get_categories_from_marketplace() -> Result<Vec<Categories>, String> {
    let url = "https://www.letgo.com/api/categories".to_string();

    let request_headers = vec![HttpHeader {
        name: "Content-Type".to_string(),
        value: "application/json".to_string(),
    }];

    let request = CanisterHttpRequestArgument {
        url,
        method: HttpMethod::GET,
        body: None,
        max_response_bytes: None,
        transform: None,
        headers: request_headers,
    };

    //if Ok => deserializing response
    //else => returning a string message
    match http_request(request).await {
        Ok((response,)) => {
            if response.status == 200 {
                let result_data: GetCategoriesHttpResponse =
                    serde_json::from_slice(&response.body).expect("Failed to parse JSON response.");

                let mut category_model = vec![];
                for item in &result_data.data {
                    for sub_category in &item.sub_categories {
                        let category = Categories {
                            id: sub_category.id.clone(),
                            key: sub_category.key.clone(),
                            name: sub_category.name.clone(),
                        };

                        category_model.push(category);
                    }
                }

                return Ok(category_model);
            } else {
                Err(format!(
                    "HTTP request failed with status code: {}",
                    response.status
                ))
            }
        }
        Err((code, message)) => Err(format!(
            "The http_request resulted in an error. Code: {:?}, Message: {}",
            code, message
        )),
    }
}

#[ic_cdk::update]
async fn import_products(user_id: String, token: String) -> Result<String, String> {
    let url = format!("https://www.letgo.com/api/v2/users/{user_id}/items");

    let request_headers = vec![
        HttpHeader {
            name: "Content-Type".to_string(),
            value: "application/json".to_string(),
        },
        HttpHeader {
            name: "Authorization".to_string(),
            value: "Bearer ".to_string() + &token,
        },
    ];

    let request = CanisterHttpRequestArgument {
        url,
        method: HttpMethod::GET,
        body: None,
        max_response_bytes: None,
        transform: None,
        headers: request_headers,
    };

    //if Ok => deserializing response
    //else => returning a string message
    match http_request(request).await {
        Ok((response,)) => {
            if response.status == 200 {
                let response_model: ImportProductResponse =
                    serde_json::from_slice(&response.body).expect("Failed to parse JSON response.");
                for data in response_model.data {
                    let item = data.clone();
                    let product = Product {
                        id: item.id,
                        title: item.title,
                        description: item.description,
                        image_url: item.images.first().unwrap().url.clone(),
                        price: item.price.value.raw,
                        created_at: item.created_at,
                        category_id: item.category_id,
                    };
                    add_product_to_canister(product);
                }
                return Ok("Product import is successful".to_string());
            } else {
                Err(format!(
                    "HTTP request failed with status code: {}",
                    response.status
                ))
            }
        }
        Err((code, message)) => Err(format!(
            "The http_request resulted in an error. Code: {:?}, Message: {}",
            code, message
        )),
    }
}
