import React from 'react';
import { NavLink } from 'react-router-dom';
import { AudioService } from '../../services/audio.service.js';
import { ImgService } from '../../services/img.service.js';

import {useState, useEffect, useContext} from 'react';
import AudioComponent from '../audio/AudioComponent.jsx';
import LikeButton from '../elements/LikeButton.js'


const ExerciseComponent = () => {


      const [audios, setAudios]=useState([])
      const [img, setImg]=useState([{}]);
  
      useEffect(() => {
        //   if (!id) return;
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

    //   useEffect(()=>{
    //       const fetchData = async()=>{
    //           const data = await AudioService.getAll()
    //           console.log(data);
    //           setAudios(data)     
                 
    //       }
    //       fetchData()
    //   }, [])
  
      return(
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
            <img className='imgExercise' src={img[0].link}/>
            <div className='sectionExercise'>
            <NavLink to="/audio">Audio</NavLink>...
            <NavLink to="/record">Record</NavLink>
            </div>

            <LikeButton/>

          </div>
      )
  }

export default ExerciseComponent