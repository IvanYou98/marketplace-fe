import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect, useState } from 'react'
import { BACKEDN_API } from "../../constant.js"
import BuyHistoryItem from './BuyHistoryItem.jsx';

const BuyHistory = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        axios.get(BACKEDN_API + "/order", {
            headers: {
                token: "bearer " + localStorage.getItem("token")
            }
        }).then(res => {
            console.log("orders: " + res.data);
            setOrders(res.data);
            setIsLoading(false);
        }).catch(err => {
            console.log(err)
            setIsLoading(false);
        })
    }, [])
    return (
        <div>
            {isLoading ? <CircularProgress /> :
                (orders.map(order => <BuyHistoryItem key={order._id} order={order} />))
            }
        </div>

    )
}

export default BuyHistory