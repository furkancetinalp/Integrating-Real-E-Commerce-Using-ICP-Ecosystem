import React from 'react'
import { Alert,AlertTitle,AlertDescription,AlertIcon } from '@chakra-ui/react'
function NoContent204() {
    return (
        <div>
            <Alert status='error'>
                <AlertIcon />
                <AlertTitle>STATUS CODE 204!</AlertTitle>
                <AlertDescription>No Content !!!!</AlertDescription>
            </Alert>
        </div>
    )
}

export default NoContent204