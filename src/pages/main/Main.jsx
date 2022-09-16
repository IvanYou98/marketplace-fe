import React, { Fragment, useState } from 'react'
import Header from '../../components/header/Header'
import Slider from '../../components/slider/Slider'
import ProductList from '../../components/productList/ProductList'
import ProductModal from '../../components/productModal/ProductModal'

const Main = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);
    return (
        <Fragment>
            <Header />
            <Slider />
            <ProductList handleModalOpen={handleModalOpen} />
            <ProductModal open={modalOpen} handleModalClose={handleModalClose} />
        </Fragment>
    )
}

export default Main