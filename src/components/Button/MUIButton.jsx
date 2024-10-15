import React, { useState } from 'react';
import Button from '@mui/material/Button';

const MUIButton = ({ text, variant, color, onClick, }) => {



    return (

        <Button onClick={onClick} variant={variant} color={color}  > {text}</Button>

    )
}

export default MUIButton
