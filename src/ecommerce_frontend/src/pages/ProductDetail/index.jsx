import React from 'react'
// import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
// import ImageGallery from 'react-image-gallery'
import { Box, Button, Text, Image } from '@chakra-ui/react'
import { ecommerce_backend } from 'declarations/ecommerce_backend';

function ProductDetail({ detail }) {
    const { product_id } = useParams();

    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        console.log("here");
        ecommerce_backend.get_product(Number.parseInt(product_id)).then((data) => {
            setData(data[0]);
        });
    }, [product_id]);
    console.log(data);
    return (
        <div>

            <Text as='h1' fontSize='2xl' ml={15} pl={10}>{data.title}</Text>
            <Text>
                {data.createdAt}
            </Text>
            <Text ml={15} pl={10} >{data.description} </Text>
            <Box margin='10' >
                <Image src={data.image_url} alt='product' loading='lazy' />
                <Text ml={15} pl={10} >{data.createdAt} </Text>
                <Link ml={15} pl={10} hrefLang={data.image_url} >{data.image_url} </Link>
                <Text as='h2' fontSize='2xl' ml={15} pl={10}>{data.price} TRY</Text>

            </Box>
        </div>
    )
}

export default ProductDetail