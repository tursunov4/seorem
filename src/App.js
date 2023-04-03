import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import  './assets/main.css'
import MainPage from './components/MainPage/MainPage';
function App() {
  return (
    <div>
      <Routes>
       <Route path='/' element={<Register/>}/>
       <Route path='/login' element={<Login/>}/> 
        <Route path='/mainpage' element={<MainPage/>}>
        </Route>
     
         
      </Routes>
    </div>
  )
}

export default App