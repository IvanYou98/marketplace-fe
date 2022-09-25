import React from 'react'
import styled from "styled-components";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { BACKEDN_API } from '../../constant';
import { useNavigate } from 'react-router-dom';


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


const SellHistoryItem = ({ product }) => {
    const removeProduct = () => {
        axios.delete(`${BACKEDN_API}/product/${product._id}`, {
            headers: {
                token: "bearer " + localStorage.getItem("token")
            }
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err)
        })
    }

    const navigate = useNavigate();

    return (
        <Container>
            <LeftSide>
                <ProductImg src={product.imgs[0]} />
            </LeftSide>
            <MidSide>
                <div>{product.title}</div>
                <div>$ {product.price}</div>
                <div>
                    {product.status === "selling" && (<div style={{ 'color': 'green' }} >Selling</div>)}
                    {product.status === "sold" && (<div style={{ 'color': 'gold' }} >Sold</div>)}
                    {product.status === "removed" && (<div style={{ 'color': 'red' }} >Removed</div>)}

                </div>
            </MidSide>
            <RightSide>
                <RemoveRedEyeIcon style={{ 'cursor': 'pointer' }} />
                <DeleteIcon style={{ 'cursor': 'pointer' }} onClick={removeProduct} />
                <EditIcon style={{ 'cursor': 'pointer' }} onClick={() => navigate(`/product/edit/${product._id}`)} />
            </RightSide>
        </Container>
    )
}

export default SellHistoryItem