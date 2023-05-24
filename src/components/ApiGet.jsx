import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';


const ApiGet = () => {
    var[users,setUsers] = useState([]);  
    useEffect(()=> {

        axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
        console.log(response.data)
    setUsers(response.data)
    })
    .catch(err=>console.log(err))
    },[])  
    
  return (
    <div>

        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((value,index)=> {
                        return(
                            <TableRow>
                                <TableCell>{value.name}</TableCell>
                                 <TableCell>{value.username}</TableCell>
                                 <TableCell>{value.email}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default ApiGet