import React from 'react'
import { ecommerce_backend } from 'declarations/ecommerce_backend';
import { useState } from 'react';

function Signin() {
    const [result,setResult] = useState(null);
    ecommerce_backend.greet("furkan").then((item) => {
        console.log("signing'den gelen veri bu!!!",item);
        setResult(item)
    });
    let new_one = result;
    return (
        <div>{result}
        <div>
            {new_one}
        </div>
        </div>
    )
}

export default Signin