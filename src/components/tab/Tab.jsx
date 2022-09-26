import React, { Fragment, useEffect } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import WishList from '../wishList/WishList';
import SellHistory from '../sellHistory/SellHistory';
import "./Tab.css"
import { useSelector } from 'react-redux';
import BuyHistory from '../buyHistory/BuyHistory';

const TopBar = () => {
    const [value, setValue] = React.useState(1);
    const products = useSelector(state => state.wishList.products);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Fragment>
            <Tabs className='tabs-container' value={value} onChange={handleChange} aria-label="icon tabs example">
                <Tab icon={<LocalMallIcon />} label="BUY HISTORY" />
                <Tab icon={<FavoriteIcon />} label="WISH LIST" />
                <Tab icon={<StorefrontIcon />} label="SELL HISTORY" />
            </Tabs>
            {value === 0 && (<BuyHistory />)}
            {value === 1 && (<WishList products={products} />)}
            {value === 2 && (<SellHistory />)}
        </Fragment>
    );
}

export default TopBar