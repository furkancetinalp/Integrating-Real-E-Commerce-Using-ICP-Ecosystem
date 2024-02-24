import React from 'react'
import { Alert,AlertTitle,AlertDescription,AlertIcon } from '@chakra-ui/react'
function Error404() {
    return (
        <div>
            <Alert status='error'>
                <AlertIcon />
                <AlertTitle>ERROR 404!</AlertTitle>
                <AlertDescription>Page Not Found !!!!</AlertDescription>
            </Alert>
        </div>
    )
}

export default Error404