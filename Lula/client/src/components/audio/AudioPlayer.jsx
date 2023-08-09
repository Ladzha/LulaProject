import React from 'react'
import DisplayTrack from './DisplayTrack'
import ProgressBar from './ProgressBar'
import Controls from './Controls'
import { useState, useRef } from 'react'
import{tracks} from './tracks.js'


const AudioPlayer  = () => {

  //track playing now
  const [currentTrack, setCurrentTrack]=useState(tracks[0]);
  const audioRef = useRef();


  return (
    <div>AudioPlayer      
      <DisplayTrack currentTrack={currentTrack} audioRef={audioRef}/>
      <ProgressBar/>
      <Controls audioRef={audioRef}/>
    </div>
    
  )
}

export default AudioPlayer 