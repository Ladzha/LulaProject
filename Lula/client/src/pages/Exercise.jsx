import React from 'react';
import { Link } from 'react-router-dom';
import { ImgService } from '../services/img.service.js';
import { AudioService } from '../services/audio.service.js';

import {useParams} from 'react-router-dom';

import {useState, useEffect} from 'react';
import AudioPlayer from '../components/audio/audioPlayer/AudioPlayer'


const Exercise = () => {

  const { imgid } = useParams();
  const [img, setImg]=useState([{}]);
  const [audios, setAudios]=useState([]);
  const [showRecord, setShowRecord] =useState(false)
    
  const handleShowRecord = () => {
    setShowRecord(!showRecord);
    };


  useEffect(() => {
    if (!imgid) return;

    const fetchData = async () => {
      try {

        const imgData = await ImgService.getById(imgid); //IMG BY ID
        setImg(imgData);

        if(!imgData) return;

        const audiosData = await AudioService.getByImageId(imgid) //GET LIST OF AUDIO BY IMG ID
        console.log(audiosData);
        setAudios(audiosData); 

          } catch (error) {
              console.log(error);
          }
      };

      fetchData();
  }, [imgid]);

  return(
    <div className='containerColumn'>
    <p className='titleMain'> Listen to what they say about it </p>
    <div>
        <img className='imgExercise' src={img[0].link}/>
        <div className='sectionExercise'>
      </div>
      <div className='exerciseContainer'>
<div className= 'box listRecord'>
          <AudioPlayer playlist={audios}/>       
          </div>

        {/* {audios.length > 0 ? (<>
          {audios && <div className= 'box listRecord'>
          <AudioPlayer playlist={audios}/>       
          </div>}
        </>):<div className='box listRecord'>
       <p className='hint' onClick={handleShowRecord}>There are no audio recordings here yet, do you want to be the first</p> </div>} */}
        </div>
      </div>
    </div>
  )
}

export default Exercise