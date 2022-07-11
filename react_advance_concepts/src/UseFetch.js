// import React from 'react'
import { useState, useEffect } from 'react';

export const useFetch = (url) => {          //when creating own hooks use the word use as 
                                            //'usehook', 'usefetch', 'useword', 'usefunction' etc.
 const [loading, setloading] = useState(true);     
    const [products, setproducts] = useState([]);

    const getproducts = async () => {
        const response = await fetch(url); 
        const products = await response.json();
        setproducts(products);
        setloading(false);
    };

    useEffect(() => {
        getproducts();
    }, [url]);
    return {loading, products}
}