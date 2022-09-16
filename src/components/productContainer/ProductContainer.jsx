import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import './ProductContainer.css'

export default function ProductContainer({ handleModalOpen }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                className='product-image'
                component="img"
                alt="green iguana"
                height="140"
                image="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80g"
            />
            <CardContent>
                <div className='product-header'>
                    <h4 className='product-title'>Apple Watch</h4>
                    <div className='product-price' >$100</div>
                </div>
                <div>
                    <div className='product-description'>This is an apple watch</div>
                </div>
            </CardContent>
            <CardActions className='card-actions'>
                <div className='no-action'></div>
                <Button className='more-btn' size="small" onClick={() => handleModalOpen()}>Learn More</Button>
            </CardActions>
        </Card>
    );
}
