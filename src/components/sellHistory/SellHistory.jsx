import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect, useState } from 'react'
import { BACKEDN_API } from "../../constant.js"
import SellHistoryItem from './SellHistoryItem.jsx';

const SellHistory = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        axios.get(BACKEDN_API + "/user/sell", {
            headers: {
                token: "bearer " + localStorage.getItem("token")
            }
        }).then(res => {
            setAllProducts(res.data);
            setIsLoading(false);
        }).catch(err => {
            console.log(err)
            setIsLoading(false);
        })
    }, [])
    return (
        <div>
            {isLoading ? <CircularProgress /> :
                (allProducts.map(product => <SellHistoryItem key={product._id} product={product} />))
            }
        </div>

    )
}

export default SellHistory