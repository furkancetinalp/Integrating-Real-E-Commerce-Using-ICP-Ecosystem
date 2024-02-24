import React from 'react'
import { Alert,AlertTitle,AlertDescription,AlertIcon } from '@chakra-ui/react'
function Error401() {
    return (
        <div>
            <Alert status='error'>
                <AlertIcon />
                <AlertTitle>ERROR 401!</AlertTitle>
                <AlertDescription>Unauthorized!!!!</AlertDescription>
            </Alert>
        </div>
    )
}

export default Error401