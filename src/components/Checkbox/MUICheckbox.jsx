import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';

const MUICheckbox = ({ onChange, inputProps, checked }) => {






    return (
        <Checkbox
            checked={checked}
            onChange={onChange}
            inputProps={inputProps}
        />
    );

}

export default MUICheckbox
