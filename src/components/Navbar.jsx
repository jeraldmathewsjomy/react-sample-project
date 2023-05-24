import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
       <AppBar style={{background:'cyan'}}>
        <Toolbar>
            <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}color={'maroon'}> DETAILS </Typography>
            <Button variant='contained'color='primary'><Link to={'/'}>LogIn</Link></Button>
            <Button variant='contained'color='primary'><Link to={'/First'}>Home</Link></Button>
            <Button variant='contained'color='primary'><Link to={'/Tableo'}>Table</Link></Button>
            <Button variant='contained'color='primary'><Link to={'/axios'}>Users</Link></Button>
        </Toolbar>
        
    </AppBar>
    </div>
  )
}

export default Navbar