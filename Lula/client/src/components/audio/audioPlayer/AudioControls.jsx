import React from 'react';
import {useState, useEffect, useRef, useCallback} from 'react'; 

import NextButton from '../../../img/next-icon.svg';
import PlayButton from '../../../img/play-icon.svg';
import PauseButton from '../../../img/pause-icon.svg';
import PrevButton from '../../../img/prev-icon.svg';

import { FaVolumeUp } from "react-icons/fa";



import Template from '../../../img/template.svg'; 


const AudioControls  = ({
  audioRef, 
  progressBarRef, 
  duration, 
  setTimeProgress,  
  setTrackIndex, 
  setCurrentTrack,
  playlist, 
  trackIndex,
  isPlaying,
  setIsPlaying,
}) => { 

  // const [isPlaying, setIsPlaying] = useState(false);

  const [volume, setVolume] = useState(60) //For Volume slider

  const playAnimationRef = useRef(); //for animating progress

  
  const repeat = useCallback(()=>{ //useCallback to cash function between rendering
    


    const handlePlayPause  = () => {
      setIsPlaying(!isPlaying);
    };



    const currentTime = audioRef.current ? audioRef.current.currentTime : 0;
    setTimeProgress(currentTime);
    if(!progressBarRef.current) return;
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current=requestAnimationFrame(repeat);
 
  }, [audioRef, progressBarRef, duration, setTimeProgress]);


  useEffect(()=>{
    if(isPlaying && audioRef.current){
      audioRef.current.play();
      playAnimationRef.current=requestAnimationFrame(repeat)
    }else{
      audioRef.current?.pause();
      cancelAnimationFrame(playAnimationRef.current)
    }

    audioRef.current.addEventListener('ended', () => {
      setIsPlaying(false); // Change the button to PlayButton when track finishes
      cancelAnimationFrame(playAnimationRef.current);
    });

    playAnimationRef.current=requestAnimationFrame(repeat);



    return () => {
      if(!audioRef.current) return;
      audioRef.current.removeEventListener('ended', () => {
        setIsPlaying(false);
        cancelAnimationFrame(playAnimationRef.current);
      });

      cancelAnimationFrame(playAnimationRef.current); //from chatGPT
    };

  }, [isPlaying, audioRef, repeat])

  // useEffect(()=>{
  //   if(audioRef.current.currentTime){
  //     if(audioRef.current.currentTime===duration){
  //       isPlaying =(false)
  //     }
  //   }

  // }, [audioRef]);  //to change button in the and of a track. Does NOT  work?

  useEffect(()=>{
    if(audioRef.current){
      audioRef.current.volume = volume /100; 
    }
  }, [volume, audioRef]);

  const handlePlayPause =()=>{
    setIsPlaying(!isPlaying)
  }

  const handlePrevious =()=>{
  
    if(trackIndex === 0){ //if it is the first track in the playlist to loop to the last one
      let lastTrackIndex = playlist.length-1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(playlist[lastTrackIndex]);
    }
    else{     
      setTrackIndex(trackIndex-1);
      setCurrentTrack(playlist[trackIndex - 1])
    } 
    setIsPlaying(true); //new line

    audioRef.current.play();
  };

  const handleNext =()=>{
    console.log("NEXT", trackIndex);
    if(trackIndex >=playlist.length -1){
      setTrackIndex(0);
      setCurrentTrack(playlist[0]);
    }
    else{
      setTrackIndex(trackIndex +1);
      setCurrentTrack(playlist[trackIndex +1])
    } 
    
    setIsPlaying(true); //new line
    audioRef.current.play();
  };

  return (
    <div className='plyerElement'>  
      <div className='line'>
      
          <div className='playBlock'>

          <div className='playerButtonsBox'>

              <img  onClick={handlePrevious} 
              className='playerIcons' 
              src={PrevButton} alt='Previous'/>
  
              <img onClick={handlePlayPause}
              className='playerIcons' 
              src={isPlaying? PauseButton: PlayButton}
              alt={isPlaying ? 'Pause' : 'Play'}/>

              <img onClick={handleNext}
              className='playerIcons' 
              src={NextButton} alt='Next'/>

          </div> 

          <div className="volume">
             <FaVolumeUp className='icon-grey'/>
             <input style={{background: `linear-gradient(to right, #FF363C ${volume}%, #FFE500 ${volume}%)`}} 
             type="range"
             min={0} 
             max={100} 
             value={volume} 
             onChange={(event)=>setVolume(event.target.value)}/>

          </div>

          </div>
      </div>
    </div>
  )
}

export default AudioControls 