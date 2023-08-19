import React, {useEffect, useState, useRef, useContext} from 'react'
import PlayerContext from './context/PlayerContext'

import NextButton from '../../../../img/next-icon.svg';
import PlayButton from '../../../../img/play-icon.svg';
import PauseButton from '../../../../img/pause-icon.svg';
import PrevButton from '../../../../img/prev-icon.svg';

import { FaVolumeUp } from "react-icons/fa";

const Controls = () => {


  const {
    currentTrack,
    playlist,
    togglePlaying,
    SetCurrent,
    next,
    previous,
    handleEnd,
    playing,
  } = useContext(PlayerContext)


  const audioRef = useRef('audio_tag');
  const progressBarRef = useRef(); 


  const [volume, setVolume] = useState(60)
  const [duration, setDuration]=useState(0); //to get duration of the audio
  const [currentTime, setCurrentTime]=useState(0); //to get current time of audio

//Function to convert time format
  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes =minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds =seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
  };

  useEffect(()=>{
    if(audioRef.current){
      audioRef.current.volume = volume /100; 
    }
  }, [volume, audioRef]);


  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~s
  }


  const handleVolume =()=>{

  }

  const handleProgress =()=>{
    if(!audioRef.current) return;
    audioRef.current.currentTime=progressBarRef.current.value;
  }

  const toggleAudio =()=>{
    audioRef.current.paused ? audioRef.current.play():audioRef.current.pause()

  }

  return (
    <div className='controls'>
      <div className='playerButtonsBox'>

      <audio
      onTimeUpdate={(event) => setCurrentTime(event.target.currentTime)}
      onCanPlay={(event) => setDuration(event.target.duration)}
      onEnded={handleEnd}
      ref={audioRef}
      type="audio/mpeg"
      preload="true"
      src={playlist[currentTrack].fileUrl}/>

          <div className="volume">
             <FaVolumeUp className='icon-grey'/>
             <input  
             type="range" 
             min={0} 
             max={100} 
             value={volume}
             
            //  value={Math.round(volume * 100)} 
             onChange={(event)=>handleVolume(event.target.value)}/>
          </div>


          <img  onClick={previous} 
          className='playerIcons' 
          src={PrevButton} alt='Previous'/>

          <img 
          className='playerIcons' 
          src={playing? PauseButton: PlayButton}
          alt={playing ? 'Pause' : 'Play'}
          onClick={()=>{
            togglePlaying()
            toggleAudio()
          }}/>


          <img onClick={next}
          className='playerIcons' 
          src={NextButton} alt='Next'/>

          </div> 

          <div className='progress'>

          <span className='time current'>{formatTime(currentTime)}</span>
          <span className='time current'>{formatTime(playlist[currentTrack])}</span>

          <input type="range" ref={progressBarRef} onChange={handleProgress}/>
          <span className='time'>{formatTime(duration)}</span>
          </div>




    </div>
  )
}

export default Controls