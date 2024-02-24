import React from 'react'
import Card from '../../components/Card'
import { Box, Button, Flex, Grid } from '@chakra-ui/react'
import { useQuery, useInfiniteQuery } from 'react-query'
import axios from 'axios'
import { ecommerce_backend } from 'declarations/ecommerce_backend';
import Error404 from '../Error404';
import Error204 from '../Error204';
// import { fetchProductList } from '../../api'
function Products() {

    const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
        (async () => {
            const getproducts = async () => {
                const imp = await ecommerce_backend.import_products("162458791", "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6ImViT21QTmlrIn0.eyJncmFudFR5cGUiOiJlbWFpbCIsImNsaWVudFR5cGUiOiJ3ZWIiLCJ0b2tlblR5cGUiOiJhY2Nlc3NUb2tlbiIsImlzTmV3VXNlciI6ZmFsc2UsImlhdCI6MTcwODc0MzM1MSwiZXhwIjoxNzA4NzQ0MjUxLCJhdWQiOiJvbHh0ciIsImlzcyI6Im9seCIsInN1YiI6IjE2MjQ1ODc5MSIsImp0aSI6ImZhNDhmZDZkNDA2MzQ5Zjc4NjMwZTVlMjM5MzljNTUxOTkxNzYyYmQifQ.fdiGEoqwxLuixEoFsZfxGhlaEWJKu_y9FBs9W2WB7oWSBkA9UcLOAvrtfI7rT5MO9xghBtFC2gk1VuwkWASZPjuTnwC4RicvY-_3qdG4wCkavn909PNXDiWlPgdGsLOUSOehknCKQ2MaOcDA8Orf1tw787eFnfmXSXcwVzEK0hJ9smMwoUs7-NbReq3Mlri-2fFskWicYZl-zxSRloYy6SiWLt0SrcRD2KdEgTP7JTWZ1tJ6-43uWBvxSQBERhVvNSFCU9UAsy6az8F5lyAMJL0EYPteccK1rX4mm2yPNVrZzs603dXEwI9uJzQrAz0rPGh1sRcKtNPhPketMB5teA")
                const productList = await ecommerce_backend.get_all_products_from_canister().then(res => res.json())
                .then(data => setProducts(data[0]))
                .catch(err => console.error("Custom err: ",err))
                console.log("effecte");
            }
        })
    },[products]);

    async function handleSubmit(event) {
        event.preventDefault();
        const imp = await ecommerce_backend.import_products("162458791", "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6ImViT21QTmlrIn0.eyJncmFudFR5cGUiOiJlbWFpbCIsImNsaWVudFR5cGUiOiJ3ZWIiLCJ0b2tlblR5cGUiOiJhY2Nlc3NUb2tlbiIsImlzTmV3VXNlciI6ZmFsc2UsImlhdCI6MTcwODc0MzM1MSwiZXhwIjoxNzA4NzQ0MjUxLCJhdWQiOiJvbHh0ciIsImlzcyI6Im9seCIsInN1YiI6IjE2MjQ1ODc5MSIsImp0aSI6ImZhNDhmZDZkNDA2MzQ5Zjc4NjMwZTVlMjM5MzljNTUxOTkxNzYyYmQifQ.fdiGEoqwxLuixEoFsZfxGhlaEWJKu_y9FBs9W2WB7oWSBkA9UcLOAvrtfI7rT5MO9xghBtFC2gk1VuwkWASZPjuTnwC4RicvY-_3qdG4wCkavn909PNXDiWlPgdGsLOUSOehknCKQ2MaOcDA8Orf1tw787eFnfmXSXcwVzEK0hJ9smMwoUs7-NbReq3Mlri-2fFskWicYZl-zxSRloYy6SiWLt0SrcRD2KdEgTP7JTWZ1tJ6-43uWBvxSQBERhVvNSFCU9UAsy6az8F5lyAMJL0EYPteccK1rX4mm2yPNVrZzs603dXEwI9uJzQrAz0rPGh1sRcKtNPhPketMB5teA")
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
                {products !=undefined ?products.map((item, key) => {
                    return(
                        <Card key={key} item={item} />
                    )
                }): <Error204/>}
            </Grid>
        </div>
    )
}

export default Products