import React from 'react';
import {useState, useEffect, useRef, useCallback} from 'react'; 

import NextButton from '../../../img/next-icon.svg';
import PlayButton from '../../../img/play-icon.svg';
import PauseButton from '../../../img/pause-icon.svg';
import PrevButton from '../../../img/prev-icon.svg';

import { FaVolumeUp } from "react-icons/fa";

const AudioControls  = ({
  audioRef, 
  progressBarRef, 
  duration, 
  setTimeProgress,

  currentTrackIndex,
  setCurrentTrackIndex, 

  setCurrentTrack,
  playlist, 
 
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
///WHY IT IS HERE??
    const currentTime = audioRef.current ? audioRef.current.currentTime : 0;
    setTimeProgress(currentTime);
    if(!progressBarRef.current) return;
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    // console.log(currentTime); endless
    // console.log(duration);

    playAnimationRef.current=requestAnimationFrame(repeat);
 
  }, [audioRef, progressBarRef, duration, setTimeProgress]);

  // Add a useEffect to listen for changes in currentTrackIndex
  useEffect(() => {
    // Check if the current track should be played or paused
    if (currentTrackIndex === null) {
      setIsPlaying(false); // Pause if no track is selected
    } else {
      setIsPlaying(true); // Play if a track is selected
    }
  }, [currentTrackIndex]);

  useEffect(()=>{
    if(isPlaying && audioRef.current){
      try {
        const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            playPromise.then(item => {
              // audioRef.current.pause();
            })
            .catch(error => {
              // console.log(error);
              // setIsPlaying(false)
              // audioRef.current.pause();
            });
          }
      } catch (error) {
        console.log(error);
      }
      
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

  useEffect(()=>{
    if(audioRef.current.currentTime){
      if(audioRef.current.currentTime===duration){
        isPlaying =(false)
      }
    }

  }, [audioRef]);  //to change button in the and of a track. Does NOT  work?

  useEffect(()=>{
    if(audioRef.current){
      audioRef.current.volume = volume /100; 
    }
  }, [volume, audioRef]);

  const handlePlayPause =()=>{
    setIsPlaying(!isPlaying)
  }

  const handlePrevious =()=>{
    // setIsPlaying(false)
    try {
      if(currentTrackIndex === 0){
        let lastTrackIndex = playlist.length-1;
        setCurrentTrackIndex(lastTrackIndex);
        setCurrentTrack(playlist[lastTrackIndex]);
      }
      else{
        setCurrentTrackIndex(currentTrackIndex -1);
        setCurrentTrack(playlist[currentTrackIndex -1])
      } 

      // setIsPlaying(true); 

      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise.then(item => {
          // audioRef.current.pause();
        })
        .catch(error => {
          console.log(error);
          // audioRef.current.pause();
        });
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  const handleNext =()=>{
    // setIsPlaying(false)
    try{

      if(currentTrackIndex >=playlist.length -1){
        setCurrentTrackIndex(0);
        setCurrentTrack(playlist[0]);
      }
      else{
        setCurrentTrackIndex(currentTrackIndex +1);
        setCurrentTrack(playlist[currentTrackIndex +1])
      } 

      // setIsPlaying(true); //new line
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(item => {
          // audioRef.current.pause();
        })
        .catch(error => {
          console.log(error);
          // audioRef.current.pause();
        });
      }

    }
    catch(error){
      console.log(error);
    }

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