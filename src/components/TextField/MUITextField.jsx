import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';

const MUITextField = ({ sx, value , onChange}) => {




    return (

        <TextField value={value} sx={sx} onChange={onChange}/>

    )
}

export default MUITextField
