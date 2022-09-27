import React, { useState } from 'react'
import './CreateProductForm.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormInput from '../formInput/FormInput'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { BACKEDN_API } from '../../constant';
import FormSelector from '../formSelector/FormSelector';

const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [options, setOptions] = useState([]);
    const [price, setPrice] = useState(0);
    const [desc, setDesc] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`${BACKEDN_API}/category`)
            .then(res => {
                console.log(res.data);
                setOptions(res.data);
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const handleSubmit = () => {
        console.log(category);
        axios.post("http://localhost:8000/api/product/", {
            title: title,
            desc: desc,
            categories: [category],
            imgs: [imageUrl],
            price: price
        }, {
            headers: {
                token: "bearer " + localStorage.getItem("token")
            }
        }).then(res => {
            console.log(res.data);
            navigate("/");
        })
    }

    return (
        <Box sx={{ flexGrow: 1 }} className='product-form-container'>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <FormInput name="Title" value={title} setValue={setTitle} />
                </Grid>
                <Grid item xs={6}>
                    <FormSelector setOption={setCategory} options={options} name="Category" />
                </Grid>
                <Grid item xs={6}>
                    <FormInput name="Price" value={price} setValue={setPrice} />
                </Grid>
                <Grid item xs={6}>
                    <FormInput name="Image URL" value={imageUrl} setValue={setImageUrl} />
                </Grid>

                <Grid item xs={12}>
                    <div className='product-form-text-area-container'>
                        <div className='product-form-text-area-label'>Description</div>
                        <TextField
                            className='product-form-text-area'
                            multiline
                            rows={4}
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
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
                    <Button variant="contained" onClick={handleSubmit}>Create Post</Button>
                </Grid>
            </Grid>
        </Box >
    )
}

export default ProductForm