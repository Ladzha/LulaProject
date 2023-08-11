import React from 'react'
import { Link } from 'react-router-dom';
import avatar from '../../img/avatar13.jpg';
import {useState, useEffect, useContext} from 'react';
import AudioComponent from '../audio/AudioComponent.jsx';    
import { AudioService } from '../../services/audio.service.js';
import { ImgService } from '../../services/img.service.js';
        


const Profile = (props) => {
  const [audios, setAudios]=useState([])
  const [img, setImg]=useState([{}]);          
      useEffect(() => {
        const fetchData = async () => {
                      try {
        
                        const data = await AudioService.getAll()
                        console.log(data);
                        setAudios(data);   
          
                        const imgData = await ImgService.getById(2);
                        setImg(imgData);
                        console.log("img", imgData);
        
                      } catch (error) {
                          console.log(error);
                      }
                  };
            
                  fetchData();
              }, []);
        

  // const handleUpdate= async (username)=>{
  //   try {
  //     const registerResponse = await fetch(`http://localhost:3001/api/users/${username}`, {
  //         method: "UPDATE",
  //     })
  //     const parseRegisterData = await registerResponse.json()
  //     console.log("parseRegisterData=", parseRegisterData);

  //   } catch (error) {
  //       console.log(error)   
  //   }

  // }

  

  const handleDelete=()=>{
    
  }

  return (
    <div className='homeContainer'>
      <div className='profileContainer'>
        <img className='userIconInComment' src={props.img}></img>
        <p>My name is: {props.username}</p>
        <p>Some information about me: {props.about}</p>
        {/* <button onClick={handleUpdate}>Edit information</button>
        <button onClick={handleDelete}>Delete Account</button> */}
      </div>

      <div className='profileContainer'>


      </div>
      <div className='homeContainer'>
        <div className= 'box listRecord'>
        
        {audios.length > 0 && audios.map((audio, index)=>{
          return( 
                  <div key={index}>
                      <AudioComponent id={audio.recordid}  duration={`${audio.duration.minutes}:${audio.duration.seconds}`} created={new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                                      day: '2-digit',
                                      hour: '2-digit',
                                      minute: '2-digit',
                                  }).format(new Date(audio.created))}/>
          
                              </div>
                              )
                         })
                      }   
                    </div>
                  </div>
         <div>
        </div>

    </div>
  )
}



export default Profile


        //user info: username, his avatars, text about, his records, hes comments, his 
