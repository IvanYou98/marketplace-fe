import * as React from 'react';
import Button from '@mui/material/Button';
import './ProductContainer.css'
import { useNavigate } from 'react-router-dom';

export default function ProductContainer({ product }) {

    const navigate = useNavigate();

    return (
        <div className='product-card-container'>
            <img className='product-card-image' src={product.imgs[0]} alt="product" />
            <div className="product-card-header">
                <div className='product-card-title'>{product.title}</div>
                <div className='product-card-price' >${product.price}</div>
            </div>
            <div className="product-card-description">
                {product.desc}
            </div>
            <div className='product-card-footer'>
                <Button onClick={() => navigate(`/product/${product._id}`)} >Learn More</Button>
            </div>

        </div >
    );
}
