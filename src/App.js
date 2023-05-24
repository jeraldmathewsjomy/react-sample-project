import logo from './logo.svg';
import './App.css';
import { Table, TextField, Typography } from '@mui/material';
import First from './components/First';
import Navbar from './components/Navbar';
import StaticBasics from './components/StaticBasics';
import Tableo from './components/Tableo';
import { Route, Routes } from 'react-router-dom';
import ApiGet from './components/ApiGet';



function App() {
  return (
    <div className="App">
<Navbar/>
<br/>
<br/>
<br/>
<Routes>
<Route path='/' element={<StaticBasics/>}/>
<Route path='/First' element={<First/>}/>
<Route path='/Tableo' element={<Tableo/>} />
<Route path='/axios' element={<ApiGet/>} />





</Routes>
    


     
    </div>
  );
}

export default App;
