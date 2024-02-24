import React from 'react'
import { Alert,AlertTitle,AlertDescription,AlertIcon } from '@chakra-ui/react'
function Error204() {
    return (
        <div>
            <Alert status='error'>
                <AlertIcon />
                <AlertTitle>ERROR 204!</AlertTitle>
                <AlertDescription>No Content !!!!</AlertDescription>
            </Alert>
        </div>
    )
}

export default Error204