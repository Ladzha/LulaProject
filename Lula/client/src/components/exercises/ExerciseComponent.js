import React from 'react';
import { AudioService } from '../../services/audio.service.js';
import {useState, useEffect, useContext} from 'react';
import AudioComponent from '../audio/AudioComponent.jsx'

const ExerciseComponent = () => {


      const [audios, setAudios]=useState([])
  
      const [user, setUser]=useState([])
      const [avatar, setAvatar]=useState([])
  
      useEffect(()=>{
          const fetchData = async()=>{
              const data = await AudioService.getAll()
              console.log(data);
              setAudios(data)        
          }
          fetchData()
      }, [])
  
      return(
          <div className='container'>
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
      )
  }

export default ExerciseComponent