import React from 'react'
import Card from '../../components/Card'
import { Box, Button, Flex, Grid } from '@chakra-ui/react'
import { useQuery, useInfiniteQuery } from 'react-query'
import axios from 'axios'
import { ecommerce_backend } from 'declarations/ecommerce_backend';
import Error404 from '../Error404';
import NoContent204 from '../NoContent204'
import { import_products, get_all_products_from_canister } from '../../api';
// import { fetchProductList } from '../../api'
function Products() {
    const [productDetail, setproductDetail] = React.useState([]);

    let userid=localStorage.getItem("userid");
    let token = localStorage.getItem("token");
    const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
        (async () => {
            const getproducts = async () => {
                const imp = await ecommerce_backend.import_products(userid,token)
                const productList = await ecommerce_backend.get_all_products_from_canister().then(res => res.json())
                    .then(data => setProducts(data[0]))
                    .catch(err => console.error("Custom err: ", err))
            }
        })
    },[products]);

    async function handleSubmit(event) {
        event.preventDefault();
        const imp = await ecommerce_backend.import_products(userid,token)
        await ecommerce_backend.get_all_products_from_canister().then((data) => {
            setProducts(data[0]);
        });

        
        return false;
    }

    return (
        <div>
            <form action="#" onSubmit={handleSubmit}>
                <button type="submit">Show Products!</button>
            </form>
            <Grid templateColumns="repeat(3,1fr)" gap={4}>
                {products != undefined ? products.map((item, key) => {
                    return (
                        <Card key={key} item={item} />
                    )
                }) : <NoContent204 />}
            </Grid>
        </div>
    )
}

export default Products