import { ecommerce_backend } from 'declarations/ecommerce_backend';
 
export const getProduct = async (id) => {
    const { data } = await ecommerce_backend.get_product(id);
    console.log(data);
    return data;
}

export const import_products = async (userId,token) => {
    const { data } = await ecommerce_backend.import_products(userId,token);
    console.log(data);

    return data;
}

export const get_all_products_from_canister = async () => {
    console.log(data);
    return data;
}