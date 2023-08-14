import './App.css';
import React, {useContext, useState} from 'react';


import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import avatar from './img/avatar13.jpg'
import Exercise from './pages/Exercise.jsx'


import Login from './components/user/Login';
import Register from './components/user/Register';
import Account from './components/user/Account';
import Profile from './components/user/Profile';


// import AudioPlayer from './components/audio/AudioPlayer'
import Record from './components/audio/Record';
import Home from './pages/Home';
import AdminZone from './pages/AdminZone';
import Contact from './components/admin/Contact';
import {AuthContext} from './components/AuthProvider'
import Auth from './pages/Auth';



function AppRouter() {

    const authContext = useContext(AuthContext)

    console.log("AUTHHHHH", authContext);

    let isAdmin = true;

  return (
    <div className="App">
      <Navbar/>
      <div className="mainContainer">

      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile/:username' element={<Profile username='Dzha' about='Cool' img={avatar}/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/record' element={<Record/>}/>
      {/* <Route path='/audio' element={<AudioPlayer/>}/> */}
      <Route path='/account' element={<Account username="Sara" about="I am soo cool" img={avatar}/>}/>
      
      
      <Route path='/admin' element={authContext.isAdmin?<AdminZone/>:<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/exercise' element={<Exercise/>}/>
      </Routes>

      </div>
      <Footer/>
    </div>
  );
}

export default AppRouter;
