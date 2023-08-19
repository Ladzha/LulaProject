import './App.css';
import React, {useContext, useState} from 'react';


import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import avatar from './img/avatar13.jpg'
import Exercise from './pages/Exercise.jsx'
import Section from './pages/Section'
import Language from './pages/Language'


import Login from './components/user/Login';
import Register from './components/user/Register';
import Account from './components/user/Account';
import Profile from './components/user/Profile';


// import AudioPlayer from './components/audio/AudioPlayer'
import Record from './components/audio/Record';
import Home from './pages/Home';
import AdminZone from './pages/AdminZone';
import Contact from './components/admin/Contact';
// import {AuthContext} from './components/AuthProvider'
import Auth from './pages/Auth';
import { AppContext } from './App';



function AppRouter() {

  const {token} = useContext(AppContext)

  return (
    <div className="App">
      <Auth>
      <Navbar token ={token}/>
      <div className="mainContainer">

      <Routes>
      <Route path='/' element={<Home/>}/> /*shows all sections*/
      <Route path='/profile/:userid' element={<Profile/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/record' element={<Record/>}/>
      {/* <Route path='/audio' element={<AudioPlayer/>}/> */}
      <Route path='/account' element={<Account username="Sara" about="I am soo cool" img={avatar}/>}/>
         
      <Route path='/admin' element={1?<AdminZone/>:<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      

      <Route path='/section/:sectionid' element={<Section/>}/> /*shows details about one section and all exercises*/
      <Route path='/exercise/:imgid' element={<Exercise/>}/> /*shows one exercise*/
      <Route path='/language/:languageid' element={<Language/>}/> /*shows all exercise in one language*/
      {/* <Route path='/exercise' element={<Exercise/>}/> */}
      </Routes>
      
      </div>
      <Footer/>
      
      </Auth>
    </div>
  );
}

export default AppRouter;
