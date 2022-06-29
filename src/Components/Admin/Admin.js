import React, {useState} from 'react';
import ProductEdit from "./ProductEdit";
import {useEffect} from "react";

const Admin = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log('app useeffect!!');
        let url = 'https://fakestoreapi.com/products/';
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                console.log(setProducts(data))
            });
    }, []);

    return (
        <>
            {}
            <ProductEdit data={products}/>
        </>
    );
};

export default Admin;