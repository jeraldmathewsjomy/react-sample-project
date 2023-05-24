import React from 'react'
import {Button, TextField, Typography } from '@mui/material';

const First= () => {
    return (


    <div>

    <br/>
    <br/>
    <br/>
    <br/>
    <Typography variant='h4'color={'red'}> Enter Details</Typography>
    <br/>
    <TextField variant='outlined' label='Name'/>
    <TextField variant='outlined' label='Address'/>
    <br/>
    <br/>
    <TextField variant='outlined' label='Class'/>
    <TextField variant='outlined' label='Roll Number'/>
    <br/>
    <br/>

    <Button variant='contained'>Submit</Button>

</div>
  )
}

export default First


