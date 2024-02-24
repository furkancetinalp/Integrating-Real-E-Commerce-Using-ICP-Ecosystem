import React from 'react'
import { Alert,AlertTitle,AlertDescription,AlertIcon } from '@chakra-ui/react'
function Success200() {
    return (
        <div>
            <Alert status='error'>
                <AlertIcon  alignItems='self-end' display='grid'/>
                <AlertTitle>SUCCESS!</AlertTitle>
                <AlertDescription>SUCCESS</AlertDescription>
            </Alert>
        </div>
    )
}

export default Success200