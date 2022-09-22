import React, { useState } from 'react'
import './ProductForm.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormInput from '../formInput/FormInput'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

const ProductForm = ({titleProps="", categoryProps="", priceProps=0, originalPriceProps=0, descriptionProps="", addressProps="", ...props}) => {
    const [title, setTitle] = useState(props.title);
    const [category, setCategory] = useState(props.category);
    const [price, setPrice] = useState(props.price);
    const [originalPrice, setOriginalPrice] = useState(props.originalPrice);
    const [description, setDescription] = useState(props.description);
    const [address, setAddress] = useState(props.address);



    return (
        <Box sx={{ flexGrow: 1 }} className='product-form-container'>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <h2>{props.formTitle}</h2>
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
                            value={description}
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
                            value={address}
                        />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" onClick={props.onSubmit}>{props.bottonText}</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ProductForm