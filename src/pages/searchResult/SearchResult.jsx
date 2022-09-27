import axios from 'axios';
import React, { Fragment, useEffect } from 'react'
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import ProductList from '../../components/productList/ProductList';
import { BACKEDN_API } from '../../constant';

const SearchResult = () => {
    const location = useLocation();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const parser = new URLSearchParams(location.search);
        const category = parser.get("category");
        axios.get(`${BACKEDN_API}/product?category=${category}`).then(res => {
            setProducts(res.data);
        })
    }, [location])

    return (
        <Fragment>
            <Header /> {
                products.length === 0 ?
                    <h2>Nothing Found...</h2> :
                    <ProductList products={products} />
            }
        </Fragment>
    )
}

export default SearchResult