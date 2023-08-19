import React from 'react'
import { Link } from 'react-router-dom';
import avatar from '../../img/avatar13.jpg';
import {useState, useEffect, useContext} from 'react';
import AudioComponent from '../audio/AudioComponent.js';    
import { AudioService } from '../../services/audio.service.js';
       
import AudioPlayer from '../audio/audioPlayer/AudioPlayer'
import AllAudio from '../audio/AllAudio.js';

import TextPlayer from '../audio/audioPlayer/player/TextPlayer'

const Profile = (props) => {
  const [audios, setAudios]=useState([])
  const [img, setImg]=useState([{}]);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AudioService.getByUserId(1)
        setAudios(data);   

        } catch (error) {
            console.log(error);
        }
    };
    fetchData();
  }, []);
        
  return (
    <div className='containerColumn'>
    <p className='titleMain'> Profile </p>
      <div className='profileContainer'>
        <img className='userIconInComment' src={props.img}></img>
        <p>My name is: {props.username}</p>
        <p>Some information about me: {props.about}</p>
        <TextPlayer/>
      </div>
      <div className='profileContainer'>
      </div>
    </div>
  )
}



export default Profile


        //user info: username, his avatars, text about, his records, hes comments, his 
