import React, { useEffect } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import axios from 'axios';

const TopBar = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        console.log("current value: ", value);
        if (value === 2) {

        }
    }, [value])

    return (
        <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
            <Tab icon={<LocalMallIcon />} label="BUY HISTORY" />
            <Tab icon={<FavoriteIcon />} label="WISH LIST" />
            <Tab icon={<StorefrontIcon />} label="SELL HISTORY" />
        </Tabs>
    );
}

export default TopBar