import React from 'react';
import {useState, useEffect, useRef, useCallback} from 'react'; 

import NextButton from '../../../img/next-icon.svg';
import PlayButton from '../../../img/play-icon.svg';
import PauseButton from '../../../img/pause-icon.svg';
import PrevButton from '../../../img/prev-icon.svg';

import { FaVolumeUp } from "react-icons/fa";



import Template from '../../../img/template.svg';


const Controls = ({
  audioRef, 
  progressBarRef, 
  duration, 
  setTimeProgress, 
  tracks, 
  trackIndex, 
  setTrackIndex, 
  setCurrentTrack
}) => {

  const [isPlaying, setIsPlaying] = useState(false);

  const [volume, setVolume] = useState(60)

  const playAnimationRef = useRef(); //for animating progress

  const repeat = useCallback(()=>{ //useCallback to cash function between rendering
    
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current=requestAnimationFrame(repeat);
 
  
  }, [audioRef, progressBarRef, duration, setTimeProgress]);

  useEffect(()=>{
    if(isPlaying){
      audioRef.current.play();
      // playAnimationRef.current=requestAnimationFrame(repeat)
    }else{
      audioRef.current.pause();
      // cancelAnimationFrame(playAnimationRef.current)
    }

    playAnimationRef.current=requestAnimationFrame(repeat);

    return () => {
      cancelAnimationFrame(playAnimationRef.current); //from chatGPT
    };

  }, [isPlaying, audioRef, repeat])

  useEffect(()=>{
    if(audioRef){
      audioRef.current.volume = volume /100;
    }
  }, volume, audioRef)

  const togglePlayPause =()=>{
    setIsPlaying(!isPlaying)
  }

  const handlePrevious =()=>{
    if(trackIndex ===0){
      let lastTrackIndex = tracks.length-1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    }
    else{
      setTrackIndex((prev) => prev -1);
      setCurrentTrack(tracks[trackIndex - 1])
    } 
  };

  const handleNext =()=>{
    if(trackIndex >=tracks.length -1){
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    }
    else{
      setTrackIndex((prev) => prev +1);
      setCurrentTrack(tracks[trackIndex +1])
    } 
  };

  return (
    <div className='plyerElement'>  
      <div className='line'>

          {/* <div className='playBlock'>

          </div> */}
          <div className='playerButtonsBox'>

            <button onCanPlay={handlePrevious}>
              <img className='playerIcons' src={PrevButton} alt='Previous'/>
            </button>
            <button onClick={togglePlayPause}>
              <img className='playerIcons' 
              src={isPlaying? PauseButton: PlayButton}
              alt={isPlaying ? 'Pause' : 'Play'}/>
            </button> 
            <button onCanPlay={handleNext}>
              <img className='playerIcons' src={NextButton} alt='Next'/>
            </button>
               
            <div className="volume">

      <button><FaVolumeUp/></button>
      <input style={{background: `linear-gradient(to right, #f50 ${volume}%, #ccc ${volume}%)`}} type="range" min={0} max={100} value={volume} onChange={(event)=>setVolume(event.target.value)}/>

    </div>
          </div>

      </div>
    </div>
  )
}

export default Controls