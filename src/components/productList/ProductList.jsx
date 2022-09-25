import React from 'react'
import Grid from '@mui/material/Grid';
import ProductContainer from '../productContainer/ProductContainer';
import './ProductList.css'

const ProductList = ({ handleModalOpen, products }) => {
    return (
        <div className='product-list-container'>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    products.map(product => (
                        product.status === "selling" && (
                            <Grid item xs={3} key={product._id}>
                                <ProductContainer product={product} handleModalOpen={handleModalOpen} />
                            </Grid>
                        )
                    ))
                }
            </Grid>
        </div>

    )
}

export default ProductList