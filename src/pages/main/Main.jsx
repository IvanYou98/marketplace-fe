import React, { Fragment, useState } from 'react'
import Header from '../../components/header/Header'
import Slider from '../../components/slider/Slider'
import ProductList from '../../components/productList/ProductList'
import ProductModal from '../../components/productModal/ProductModal'
import { useEffect } from 'react'
import axios from 'axios'

const Main = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/product").then(res => {
            setProducts(res.data);
        })
    }, [])
    return (
        <Fragment>
            <Header />
            <Slider />
            <ProductList handleModalOpen={handleModalOpen} products={products} />
            <ProductModal open={modalOpen} handleModalClose={handleModalClose} />
        </Fragment>
    )
}

export default Main