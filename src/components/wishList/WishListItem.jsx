import React, { Fragment, useEffect, useState } from 'react'
import styled from "styled-components";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import PaymentIcon from '@mui/icons-material/Payment';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { setWishList } from '../../redux/wishListRedux';
import { useDispatch } from 'react-redux';

const Container = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    margin: 10px;
    padding: 10px;
    border-bottom-style: solid;
    border-bottom-color: lightgray;
    border-bottom-width: 3px;
    border-right-style: solid;
    border-right-color: lightgray;
    border-right-width: 3px;
`;

const LeftSide = styled.div`
    width: 30%;
`;

const ProductImg = styled.img`
    height: 100%;
    object-fit: contain;
    object-position: bottom;
`

const MidSide = styled.div`
    width: 40%;
    height:100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    font-size: 20px;
    font-weight: 300;
`;

const RightSide = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`


const WishListItem = ({ productId }) => {
    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsLoading(true);
        axios.get(`http://localhost:8000/api/product/${productId}`, {
            headers: {
                token: "bearer " + localStorage.getItem("token")
            }
        }).then(res => {
            setProduct(res.data);
            setIsLoading(false);
        }).catch(err => {
            console.log(err);
            setIsLoading(false);
        })
    }, [productId])

    const handleRemove = () => {
        axios.delete(`http://localhost:8000/api/wishlist/${productId}`, {
            headers: {
                token: "bearer " + localStorage.getItem("token")
            }
        }).then(res => {
            dispatch(setWishList(res.data));
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <Fragment>
            {
                isLoading ? <CircularProgress /> :
                    (<Container>
                        <LeftSide>
                            <ProductImg src={product.imgs[0]} />
                        </LeftSide>
                        <MidSide>
                            <div>{product.title}</div>
                            <div>$ {product.price}</div>
                        </MidSide>
                        <RightSide>
                            <RemoveRedEyeIcon />
                            <DeleteIcon onClick={handleRemove} />
                            <PaymentIcon />
                        </RightSide>
                    </Container>)
            }
        </Fragment >
    )
}

export default WishListItem