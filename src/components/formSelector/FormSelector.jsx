import React from 'react'
import { Select, MenuItem } from '@mui/material';
import { useState } from 'react';
import "./FormSelector.css"
import { useEffect } from 'react';

const FormSelector = ({ setOption, options, name, defaultOption }) => {
    const findIndexOf = (arr, item) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === item) return i;
        }
        return -1;
    }

    const [optionIdx, setOptionIdx] = useState(0);
    useEffect(() => {
        defaultOption && setOptionIdx(findIndexOf(options, defaultOption))
    }, [defaultOption, options])

    return (
        <div className='form-selector-container'>
            <div className='form-selector-label' >{name}</div>

            <Select
                className='form-selector-field'
                variant='standard'
                value={optionIdx}
                onChange={e => {
                    setOptionIdx(e.target.value);
                    setOption(options[e.target.value]);
                }}
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
    )
}

export default FormSelector