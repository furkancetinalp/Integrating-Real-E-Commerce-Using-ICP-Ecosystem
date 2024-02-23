import { Box, Button, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


function Card({ item }) {
    // const {addToBasket,items} = useBasket();
    // const findBasketItem = items.find(data => data._id === item._id);

    return (
        <Box borderWidth='1px' borderRadius='lg' overflow='hidden' p='3' >
            <Link to={`#`}>
            <Image src='https://imvm.letgo.com:443/v1/files/6065208e9b034-OLXAUTOTR/image' alt='product' loading='lazy'></Image>
            <Image src='https://imvm.letgo.com/v1/files/1742c7d5b8044-OLXAUTOTR/image' alt='product' loading='lazy'></Image>

                <Box p='2'>
                    <Box d='plex' alignItems='baseline'>
                        30/30/12
                    </Box>

                    <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight'>
                        TİTLE
                    </Box>

                    <Box>
                        100
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