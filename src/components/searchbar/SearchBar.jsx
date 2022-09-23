import { InputBase, InputAdornment, Select, InputLabel } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import './SearchBar.css'
import {useNavigate} from "react-router-dom";

const SearchBar = () => {
    const [category, setCategory] = React.useState('Category');
    let navigate = useNavigate();
    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const openSearchPage = () => {
        navigate("/search")
    }

    return (
        <div className='search-bar-container'>
            <div >
                <Select
                    variant='standard'
                    className='search-category'
                    value={category}
                    label="Category"
                    onChange={handleChange}
                    disableUnderline
                    defaultValue={0}
                >
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={10}>Clothes</MenuItem>
                    <MenuItem value={20}>Shoes</MenuItem>
                    <MenuItem value={30}>Laptop</MenuItem>
                </Select>
            </div>
            <InputBase
                className='search-input'
                startAdornment={
                    <InputAdornment position='start'>
                        <SearchOutlinedIcon onClick={openSearchPage}/>
                    </InputAdornment>
                }
            />
        </div>

    )
}

export default SearchBar