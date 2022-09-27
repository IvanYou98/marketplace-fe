import { InputBase, InputAdornment, Select } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuItem from '@mui/material/MenuItem';
import React, { useEffect } from 'react';
import './SearchBar.css'
import { useState } from 'react';
import axios from 'axios';
import { BACKEDN_API } from '../../constant';

const SearchBar = () => {
    const [options, setOptions] = useState([]);
    const [optionIdx, setOptionIdx] = useState(0);
    const [keyword, setKeyword] = useState("");

    const handleOptionChange = (event) => {
        setOptionIdx(event.target.value);
    };

    const handleSearch = () => {
        console.log("keyword: " + keyword);
        console.log("option: " + options[optionIdx]);
        axios.get(`${BACKEDN_API}/product${optionIdx === 0 ? "" : "?category=" + options[optionIdx]}`).then(res =>
            console.log(res.data)
        )
    }

    useEffect(() => {
        axios.get(`${BACKEDN_API}/category`)
            .then(res => {
                console.log(res.data);
                setOptions(["All", ...res.data]);
            }).catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <div className='search-bar-container'>
            <div >
                <Select
                    variant='standard'
                    className='search-category'
                    value={optionIdx}
                    label="Category"
                    onChange={handleOptionChange}
                    disableUnderline
                    defaultValue={0}
                >
                    {
                        options.map((option, idx) => (
                            <MenuItem key={idx} value={idx}>{option}</MenuItem>
                        ))
                    }
                </Select>
            </div>
            <InputBase
                className='search-input'
                placeholder='search key word'
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                endAdornment={
                    <InputAdornment position='start'>
                        <SearchOutlinedIcon style={{ "cursor": "pointer" }} onClick={handleSearch} />
                    </InputAdornment>
                }
            />
        </div>

    )
}

export default SearchBar