import React, { Fragment } from 'react'
import Header from '../../components/header/Header'
import ProductForm from '../../components/productForm/ProductForm'
const CreatePost = () => {
    return (
        <Fragment>
            <Header />
            <ProductForm formTitle="CREATE POST" bottonText="CREATE POST" />
        </Fragment>
    )
}

export default CreatePost