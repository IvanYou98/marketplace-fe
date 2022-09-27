import React from 'react'
import { Select, MenuItem } from '@mui/material';
import { useState } from 'react';
import "./FormSelector.css"

const FormSelector = ({ setOption, options, name }) => {
    const [optionIdx, setOptionIdx] = useState(0);

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