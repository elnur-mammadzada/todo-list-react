import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ClearIcon from '@mui/icons-material/Clear';
import { Icon } from '@mui/material';


const MUITable = ({  children }) => {



    return (
        <Table>
            <TableBody>
                {children} 
            </TableBody>
        </Table>
    )
}

export default MUITable
