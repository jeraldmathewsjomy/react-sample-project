import { Button, Typography } from '@mui/material'
import React, {useState} from 'react'



const StaticBasics = () => {

    var [pname,setPname] = useState("By Clicking Accept you agree to Terms and conditions ");


    
    const changeName = ()=> {
    setPname("You Have Accepted Terms and Conditions..") 

    
}
const changeNot = ()=> {
    setPname("Poi chaavada Vazhe....") 
    

    
}

const changeHome = ()=> {
    setQname("Home Page") 

    
}
const changeContacts = ()=> {
    setQname("Contact Page") 

    
}
const changeGallery = ()=> {
    setQname("Gallery Page") 

    
}

var [qname,setQname] = useState("Click Anyone ");


  return (
    <div>
        <br/>
        <Typography variant='h7'> {pname} </Typography>
        <br/>
        <br/>
        <Button variant='contained'onClick={changeName}> Accept </Button>&nbsp;&nbsp;
        <Button variant='contained'onClick={changeNot} color='secondary'> Not Accept </Button>&nbsp;&nbsp;

        <br/>
        <br/>
        <br/>

        <Typography variant='h5'> SELECT OPTION </Typography>
        <Button variant='contained'onClick={changeHome}color='primary'> HOME </Button>&nbsp;&nbsp;
        <Button variant='contained'onClick={changeContacts}color='secondary'> CONTACTS </Button>&nbsp;&nbsp;
        <Button variant='contained'onClick={changeGallery}color='success'> GALLERY </Button>&nbsp;&nbsp;
        <br/>
        <br/>
        <Typography variant='h7'> {qname} </Typography>

    </div>
  )
}

export default StaticBasics