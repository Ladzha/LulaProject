import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import avatar from './img/avatar13.jpg'
import ExerciseComponent from './components/exercises/ExerciseComponent'


import Login from './components/user/Login';
import Register from './components/user/Register';
import Account from './components/user/Account';
import Profile from './components/user/Profile';


import AudioPlayer from './components/audio/AudioPlayer'
import Record from './components/audio/Record';
import Home from './components/Home';
import AdminZone from './components/admin/AdminZone';
import Support from './components/admin/Support';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="mainContainer">
      
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile/:name' element={<Profile username='Dzha' about='Cool' img={avatar}/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/record' element={<Record/>}/>
      <Route path='/audio' element={<AudioPlayer/>}/>
      <Route path='/account' element={<Account username="Sara" about="I am soo cool" img={avatar}/>}/>
      <Route path='/admin' element={<AdminZone username="Harry" about="I am Harry and I am soo cool" img={avatar}/>}/>
      <Route path='/support' element={<Support/>}/>
      <Route path='/exercise' element={<ExerciseComponent/>}/>
      </Routes>

      </div>
    </div>
  );
}

export default App;
