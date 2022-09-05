import './UserRegister.css'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as React from 'react';

function UserRegister() {
    return (
        <div>
            <Typography variant="h4" fontFamily='Ubuntu' color='black' gutterBottom component="div">
                User Registration
            </Typography>
            <div className='text__container'>
                <TextField id="standard-basic" label="First Name" variant="standard" className='txt'/>
                <TextField id="standard-basic" label="Last Name" variant="standard" className='txt'/>
                <TextField id="standard-basic" label="Email" variant="standard" className='txt'/>
                <TextField id="standard-basic" label="User Name" variant="standard" className='txt'/>
                <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password"
                           variant="standard" className='txt'/>
                <TextField id="standard-basic" label="City" variant="standard" className='txt'/>
                <TextField id="standard-basic" label="Street" variant="standard" className='txt'/>
                <TextField id="standard-basic" label="Street No" variant="standard" className='txt'/>
                <TextField id="standard-basic" label="Zip Code" variant="standard" className='txt'/>
                <TextField id="standard-basic" label="Lat Value" variant="standard" className='txt'/>
                <TextField id="standard-basic" label="Long Value" variant="standard" className='txt'/>
                <TextField id="standard-basic" label="Mobile No" variant="standard" className='txt'/>
            </div>
            <div className='btn__container'>
                <Button variant="contained" color='error' className='clear'>Clear</Button>
                <Button variant="contained" color='success' className='save'>Save</Button>
            </div>

            <div>
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} size="small" aria-label="a dense table" className='table'>
                        <TableHead>
                            <TableRow>
                                <TableCell classes='col'>First Name</TableCell>
                                <TableCell classes='col'>Last Name</TableCell>
                                <TableCell classes='col'>Email</TableCell>
                                <TableCell classes='col'>City</TableCell>
                                <TableCell classes='col'>Street</TableCell>
                                <TableCell classes='col'>Street No</TableCell>
                                <TableCell classes='col'>Zip Code</TableCell>
                                <TableCell classes='col'>Lat Value</TableCell>
                                <TableCell classes='col'>Long Value</TableCell>
                                <TableCell classes='col'>Mobile No</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default UserRegister