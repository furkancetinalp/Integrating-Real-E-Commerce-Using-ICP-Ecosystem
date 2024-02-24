use candid::{CandidType, Decode, Deserialize, Encode};
use ic_stable_structures::memory_manager::{MemoryId, MemoryManager, VirtualMemory};
use ic_stable_structures::{BoundedStorable, DefaultMemoryImpl, StableBTreeMap, Storable};
use serde::Serialize;

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AddProductResponse {
    pub data: Data,
    // pub metadata: Metadata,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Data {
    pub id: String,
    // pub revision: i64,
    // #[serde(rename = "has_phone_param")]
    // pub has_phone_param: bool,
    #[serde(rename = "created_at")]
    pub created_at: String,
    // #[serde(rename = "created_at_first")]
    // pub created_at_first: String,
    // #[serde(rename = "republish_date")]
    // pub republish_date: Value,
    // #[serde(rename = "valid_to")]
    // pub valid_to: String,
    pub title: String,
    #[serde(rename = "location_source")]
    pub location_source: String,
    pub description: String,
    #[serde(rename = "category_id")]
    pub category_id: String,
    // pub favorites: Favorites,
    // pub status: Status,
    // pub locations: Vec<Location>,
    pub images: Vec<Image>,
    #[serde(rename = "user_id")]
    pub user_id: String,
    pub price: Price,
    // pub parameters: Vec<i32>,
    // pub views: Value,
    // pub replies: Value,
    // pub calls: Value,
    // pub monetization_info: Value,
    // #[serde(rename = "main_info")]
    // pub main_info: Value,
    // #[serde(rename = "partner_id")]
    // pub partner_id: Value,
    // #[serde(rename = "partner_code")]
    // pub partner_code: Value,
    // #[serde(rename = "inspection_info")]
    // pub inspection_info: Value,
    // #[serde(rename = "extra_parameters")]
    // pub extra_parameters: Value,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Favorites {
    pub count: i64,
    #[serde(rename = "count_label")]
    pub count_label: String,
    #[serde(rename = "count_label_next")]
    pub count_label_next: String,
    #[serde(rename = "count_label_prev")]
    pub count_label_prev: String,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Status {
    pub status: String,
    // pub link: Value,
    // pub message: Value,
    // #[serde(rename = "allow_edit")]
    // pub allow_edit: bool,
    // #[serde(rename = "allow_deactivate")]
    // pub allow_deactivate: bool,
    // pub display: String,
    // #[serde(rename = "translated_display")]
    // pub translated_display: String,
    // pub flags: Flags,
    // #[serde(rename = "ban_reason_id")]
    // pub ban_reason_id: Value,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Flags {
    pub new: bool,
    pub hot: bool,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Location {
    pub lat: f64,
    pub lon: f64,
    #[serde(rename = "region_id")]
    pub region_id: String,
    #[serde(rename = "subregion_id")]
    pub subregion_id: String,
    #[serde(rename = "city_id")]
    pub city_id: String,
    #[serde(rename = "district_id")]
    pub district_id: String,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Image {
    pub id: String,
    #[serde(rename = "external_id")]
    pub external_id: String,
    pub width: i64,
    pub height: i64,
    pub url: String,
    pub full: Full,
    pub big: Big,
    pub medium: Medium,
    pub small: Small,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Full {
    pub width: i64,
    pub height: i64,
    pub url: String,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Big {
    pub width: i64,
    pub height: i64,
    pub url: String,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Medium {
    pub width: i64,
    pub height: i64,
    pub url: String,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Small {
    pub width: i64,
    pub height: i64,
    pub url: String,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Price {
    pub key: String,
    #[serde(rename = "key_name")]
    pub key_name: String,
    pub value: Value,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Value {
    pub raw: i64,
    pub display: String,
    pub currency: Currency,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Currency {
    pub pre: String,
    pub post: String,
    #[serde(rename = "iso_4217")]
    pub iso_4217: String,
    pub locale: String,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Metadata {
    pub users: Users,
    pub locations: Vec<Location3>,
    // pub update: Value,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Users {
    #[serde(rename = "162458791")]
    pub n162458791: n162458791,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct n162458791 {
    pub id: String,
    pub name: String,
    pub lang: String,
    #[serde(rename = "name_provided")]
    // pub name_provided: bool,
    pub about: String,
    // pub anonymous: bool,
    pub images: Vec<Image2>,
    pub locations: Vec<Location2>,
    pub badges: Vec<Badge>,
    #[serde(rename = "avatar_id")]
    pub avatar_id: String,
    // #[serde(rename = "is_business")]
    // pub is_business: bool,
    // #[serde(rename = "is_banned")]
    // pub is_banned: bool,
    #[serde(rename = "created_at")]
    pub created_at: String,
    // #[serde(rename = "has_phone")]
    // pub has_phone: bool,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Image2 {
    pub id: String,
    #[serde(rename = "external_id")]
    pub external_id: String,
    pub width: i64,
    pub height: i64,
    pub url: String,
    pub background: Background,
    pub big: Big2,
    pub medium: Medium2,
    pub small: Small2,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Background {
    pub width: i64,
    pub height: i64,
    pub url: String,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Big2 {
    pub width: i64,
    pub height: i64,
    pub url: String,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Medium2 {
    pub width: i64,
    pub height: i64,
    pub url: String,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Small2 {
    pub width: i64,
    pub height: i64,
    pub url: String,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Location2 {
    pub lat: f64,
    pub lon: f64,
    #[serde(rename = "region_id")]
    pub region_id: String,
    #[serde(rename = "subregion_id")]
    pub subregion_id: String,
    #[serde(rename = "city_id")]
    pub city_id: String,
    #[serde(rename = "district_id")]
    pub district_id: String,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Badge {
    #[serde(rename = "type")]
    pub type_field: String,
    pub name: String,
    // pub status: bool,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Location3 {
    pub lat: f64,
    pub lon: f64,
    pub tree: Vec<Tree>,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Tree {
    pub id: i64,
    pub name: String,
    #[serde(rename = "type")]
    pub type_field: String,
    pub longitude: f64,
    pub latitude: f64,
    pub parent_id: Option<i64>,
    pub address_components: Vec<AddressComponent>,
}

#[derive(Default, Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AddressComponent {
    pub id: i64,
    #[serde(rename = "type")]
    pub type_field: String,
    pub name: String,
    pub latitude: f64,
    pub longitude: f64,
    pub order: i64,
}
