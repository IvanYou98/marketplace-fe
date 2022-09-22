import React from 'react'
import Grid from '@mui/material/Grid';
import ProductContainer from '../productContainer/ProductContainer';
import './ProductList.css'

const ProductList = ({ handleModalOpen }) => {
    const rows = [];
    for (let i = 0; i < 8; i++) {
        rows.push({});
    }
    return (
        <div className='product-list-container'>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    rows.map(row => (
                        <Grid item xs={3}>
                            <ProductContainer handleModalOpen={handleModalOpen} />
                        </Grid>
                    ))
                }
            </Grid>
        </div>

    )
}

export default ProductList