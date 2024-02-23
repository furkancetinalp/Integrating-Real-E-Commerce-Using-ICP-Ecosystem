import React from 'react'
import Card from '../../components/Card'
import { Box, Button, Flex, Grid } from '@chakra-ui/react'
import { useQuery, useInfiniteQuery } from 'react-query'
import axios from 'axios'
// import { fetchProductList } from '../../api'
function Products() {
    // const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage,isFetching, status} = useInfiniteQuery(
    //     "products",
    //     fetchProductList,
    //     {
    //         getNextPageParam:(lastGroup,allGroups) =>{
    //             const ifMorePagesExist=lastGroup?.length===12;
    //             if(!ifMorePagesExist){
    //                 return;
    //             }
    //             return allGroups.length+1;
    //         },
    //     });
    //     if (status == "loading") return "Loading...";
    //     if (status == "error") return "An error occured" + error.message;

    return (
        <div>
            card
            {/* <Grid templateColumns="repeat(3,1fr)" gap={4}>
                {
                    data.pages.map((group,i) =>(
                        <React.Fragment key={i}>
                            {
                                group.map((item) =>(
                                    <Box key={item._id}>
                                        <Card item={item}/>
                                    </Box>
                                ) )
                            }
                        </React.Fragment>
                    ))
                }
            </Grid>
            <Flex mt='10' justifyContent='center'>
                <Button
                onClick={() => fetchNextPage()}
                isDisabled={!hasNextPage||isFetchingNextPage}
                isLoading={isFetching}
                >
                    {
                        isFetchingNextPage ? "Loading more ..." : hasNextPage ? "Load More" : "Nothing more to load"
                    }
                </Button>
                    <div>{isFetching && !isFetchingNextPage ? "Fetching...":null}</div>
            </Flex> */}
        </div>
    )
}

export default Products