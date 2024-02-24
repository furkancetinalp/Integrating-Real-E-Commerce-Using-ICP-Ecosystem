import { Box, Button, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


function Card({ item }) {
    // const {addToBasket,items} = useBasket();
    // const findBasketItem = items.find(data => data._id === item._id);
    console.log("burada",item);
    return (
        <Box borderWidth='1px' borderRadius='lg' overflow='hidden' p='3' >
            <Link to={`#`}>
            <Image src={`${item.image_url}`} alt='product' loading='lazy'></Image>
            {/* <Image src='https://imvm.letgo.com/v1/files/1742c7d5b8044-OLXAUTOTR/image' alt='product' loading='lazy'></Image> */}

                <Box p='2'>
                    <Box d='plex' alignItems='baseline'>
                        {item.created_at}
                    </Box>

                    <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight'>
                        {item.title}
                    </Box>

                    <Box>
                        {item.price}
                    </Box>
                </Box>

            </Link>
            <Button
                colorScheme={true ? 'pink' : 'green'}
                // onClick={() => addToBasket(item, findBasketItem)}

            >
                {/* {findBasketItem ? 'Remove from basket' : 'Add to basket'} */}
                Click
            </Button>
        </Box>

    )
}

export default Card