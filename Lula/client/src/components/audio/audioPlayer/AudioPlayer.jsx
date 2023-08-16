import React from 'react'
import { useState, useRef, useEffect } from 'react'
import{tracks} from './tracks.js'

import DisplayTrack from './DisplayTrack'
import ProgressBar from './ProgressBar'
import Controls from './Controls'


/*Because we will need the audio data in multiple children components, we will import the playlist file in the AudioPlayer parent component. */

const AudioPlayer = (props) => {

  const audioRef = useRef(); //to get audio tag in html
  const progressBarRef = useRef(); //to get input range tag in html

  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack]=useState(tracks[trackIndex]); //Track is plying now
  const [timeProgress, setTimeProgress]=useState(0); //to get current time of audio
  const [duration, setDuration]=useState(0); //to get duration of the audio


  return (    
    <div className='innerd'>
      <DisplayTrack 
      currentTrack={currentTrack} 
      audioRef={audioRef}
      progressBarRef={progressBarRef}
      setDuration={setDuration}/> 
      
      <Controls 
      audioRef={audioRef}
      progressBarRef={progressBarRef}
      duration ={duration}
      setTimeProgress={setTimeProgress}
      
      tracks={props.playlist}
      trackIndex={trackIndex}
      setTrackIndex = {setTrackIndex}
      setCurrentTrack={setCurrentTrack}
      />

      <ProgressBar 
      progressBarRef={progressBarRef} 
      audioRef={audioRef} 
      duration ={duration} 
      timeProgress={timeProgress} />
    </div>
    
  )
}

export default AudioPlayer 