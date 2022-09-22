import React from 'react'
import { OutlinedInput } from '@mui/material'
import './FormInput.css'

const FormInput = ({ name, value, setValue, maxRow }) => {
    return (
        <div className='form-input-container'>
            <div className='form-input-label'>{name}</div>
            <OutlinedInput maxRows={maxRow} className='form-input-field' value={value} onChange={e => setValue(e.target.value)} />
        </div>
    )
}

export default FormInput