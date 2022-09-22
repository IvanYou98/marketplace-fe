import React, { Fragment, useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import ProductForm from '../../components/productForm/ProductForm'
import axios from 'axios'
import { Navigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../../constant';

// pass in productId, a number
const EditPost = (props) => {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState(0);
    const [price, setPrice] = useState(0);
    const [originalPrice, setOriginalPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [exist, setExist] = useState(true);
    const [success, setSuccess] = useState(false);
    let { productId } = useParams();

    useEffect(() => {
        axios
            .get(`${BASE_URL}/post/${productId}`)
            .then((response) => {
                const productInfo = response.data;
                setTitle(productInfo.title);
                // setCategory(productInfo.category);
                setPrice(productInfo.price);
                // setOriginalPrice(productInfo.originalPrice);
                setDescription(productInfo.description);
                // setAddress(productInfo.address);
            })
            .catch((err) =>{
                console.log(err);
                setExist(false);
            });
    })

    const onSubmit = () => {
        axios
            .post(`${BASE_URL}/post/${productId}/edit`, {
                title: {title},
                // category: {category},
                // price: {price},
                // originalPrice: {originalPrice},
                description: {description},
                // address: {address}
            })
            .then((response) => {
                console.log(response);
                setSuccess(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return ( (exist && !success) ? 
        <Fragment>
            <Header />
            <ProductForm 
                formTitle="EDIT POST" 
                bottonText="EDIT POST" 
                title={title}
                category={category}
                price={price}
                originalPrice={originalPrice}
                description={description}
                address={address}
                onSubmit={onSubmit}/>
        </Fragment>
        :
        <Navigate to="/home" />
    )
}

export default EditPost