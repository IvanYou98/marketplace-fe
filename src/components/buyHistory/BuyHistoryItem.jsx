import React, { Fragment, useEffect } from 'react'
import styled from "styled-components";
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { BACKEDN_API } from '../../constant';
import { useState } from 'react';


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
    font-size: 18px;
    font-weight: 300;
`;

const RightSide = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`


const BuyHistoryItem = ({ order }) => {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    console.log('order: ' + order)
    useEffect(() => {
        // get the product
        setIsLoading(true);
        axios.get(`${BACKEDN_API}/product/${order.productId}`)
            .then(res => {
                setProduct(res.data);
                setIsLoading(false);
            }).catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    }, [order])

    return (
        <Fragment>
            {
                isLoading ? <CircularProgress /> : (
                    <Container>
                        <LeftSide>
                            <ProductImg src={product.imgs[0]} />
                        </LeftSide>
                        <MidSide>
                            <div>{product.title}</div>
                            <div>$ {product.price}</div>
                            <div>
                                {order.status}
                            </div>
                        </MidSide>

                    </Container>
                )
            }
        </Fragment>

    )
}

export default BuyHistoryItem