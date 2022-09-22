import React, { useState } from 'react'
import './ProductForm.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormInput from '../formInput/FormInput'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState(0);
    const [originalPrice, setOriginalPrice] = useState(0);

    return (
        <Box sx={{ flexGrow: 1 }} className='product-form-container'>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <h2>CREATE POST</h2>
                </Grid>
                <Grid item xs={6}>
                    <FormInput name="Title" value={title} setValue={setTitle} />
                </Grid>
                <Grid item xs={6}>
                    <FormInput name="Category" value={category} setValue={setCategory} />
                </Grid>
                <Grid item xs={6}>
                    <FormInput name="Price" value={price} setValue={setPrice} />
                </Grid>
                <Grid item xs={6}>
                    <FormInput name="Original Price" value={originalPrice} setValue={setOriginalPrice} />
                </Grid>

                <Grid item xs={12}>
                    <div className='product-form-text-area-container'>
                        <div className='product-form-text-area-label'>Description</div>
                        <TextField
                            className='product-form-text-area'
                            multiline
                            rows={4}
                        />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className='product-form-text-area-container'>
                        <div className='product-form-text-area-label'>Address</div>
                        <TextField
                            className='product-form-text-area'
                            multiline
                            rows={4}
                        />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained">Create Post</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ProductForm