import React, { useState } from 'react'
import './CreateProductForm.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormInput from '../formInput/FormInput'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { BACKEDN_API } from '../../constant';
import FormSelector from '../formSelector/FormSelector';

const EditProductForm = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [options, setOptions] = useState([]);
    const [price, setPrice] = useState(0);
    const [desc, setDesc] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const navigate = useNavigate();
    const { productId } = useParams("productId");

    const handleSubmit = () => {
        axios.put(`${BACKEDN_API}/product/${productId}`, {
            title: title,
            categories: [category],
            price: price,
            desc: desc,
            imgs: [imageUrl]
        }, {
            headers: {
                token: "bearer " + localStorage.getItem("token")
            }
        }).then(res => {
            console.log("updated product: " + res.data);
            navigate("/home")
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        axios.get(`${BACKEDN_API}/category`)
            .then(res => {
                console.log(res.data);
                setOptions(res.data);
                axios.get(`${BACKEDN_API}/product/${productId}`, {
                    headers: {
                        token: "bearer " + localStorage.getItem("token")
                    }
                }).then(res => {
                    const prevProduct = res.data;
                    setTitle(prevProduct.title);
                    setCategory(prevProduct.categories[0]);
                    setPrice(prevProduct.price);
                    setDesc(prevProduct.desc);
                    setImageUrl(prevProduct.imgs[0]);
                    console.log(res.data);
                })
            }).catch(err => {
                console.log(err)
            })

    }, [productId])

    return (
        <Box sx={{ flexGrow: 1 }} className='product-form-container'>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <FormInput name="Title" value={title} setValue={setTitle} />
                </Grid>
                <Grid item xs={6}>
                    <FormSelector name="Category" setOption={setCategory} options={options} defaultOption={category} />
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
                    <Button variant="contained" onClick={handleSubmit}>Save Edit</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default EditProductForm