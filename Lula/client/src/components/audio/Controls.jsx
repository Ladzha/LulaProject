import React from 'react';
import {useState, useEffect} from 'react'; 
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';


import Template from '../../img/template.svg';
import PlayerButtons from '../elements/PlayerButtons'

const Controls = ({audioRef}) => {
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(()=>{
    if(isPlaying){
      audioRef.current.play();
    }else{
      audioRef.current.pause();
    }
  },[isPlaying, audioRef])

  const togglePlayPause =()=>{
    setIsPlaying(!isPlaying)
  }

  return (
    <div className='plyerElement'>
      <div className='line'>
      <button>
          <IoPlaySkipBackSharp />
        </button>
        <button>
          <IoPlayBackSharp />
        </button>

        <button onClick={togglePlayPause}>
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>
        <button>
          <IoPlayForwardSharp />
        </button>
        <button>
          <IoPlaySkipForwardSharp />
        </button>



      </div>

      <div className='playBlock'>
      <img src={Template} className='activeRecordAvatar'/>
      <PlayerButtons/>
      </div>


    </div>
  )
}

export default Controls