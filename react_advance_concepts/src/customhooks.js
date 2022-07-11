import React, {useEffect, useState}from 'react'
import {useFetch} from './UseFetch.js'


const url = 'https://course-api.netlify.app/api/javascript-store-products';

const Example = () => {
    const {loading, products} = useFetch(url);
    // const [loading, setloading] = useState(true);
    // const [products, setproducts] = useState([]) ;

    // const getproducts = async () => {
    //     const response = await fetch(url);
    //     const products = await response.json();
    //     setproducts(products);
    //     setloading(false);
    // };

    // useEffect(() => {
    //     getproducts();
    // }, []);

    console.log(products);
    return (
        <div>
            <h2>{loading ? 'loading' : 'data'}</h2>
        </div>
    );

};

export default Example;