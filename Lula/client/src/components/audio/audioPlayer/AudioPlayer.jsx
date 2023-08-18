import React from 'react'
import { useState, useRef, useEffect } from 'react'

import DisplayTrack from './DisplayTrack'
import ProgressBar from './ProgressBar'
import Controls from './AudioControls'

/*Because we will need the audio data in multiple children 
components, we will import the playlist file in the 
AudioPlayer parent component. */

const AudioPlayer = ({playlist}) => {

  const audioRef = useRef(); //to get audio tag in html
  const progressBarRef = useRef(); //to get input range tag in html

  const [trackIndex, setTrackIndex] = useState(1); // index of track
  const [timeProgress, setTimeProgress]=useState(0); //to get current time of audio
  const [currentTrack, setCurrentTrack]=useState(playlist[trackIndex]); //Track is plying now
  const [duration, setDuration]=useState(0); //to get duration of the audio
  const [isPlaying, setIsPlaying] = useState(false); //play or not



  const onLoadedMetadata = () =>{
    console.log("DURATION", audioRef.current.duration);
    const seconds = audioRef.current.duration;
    setDuration(seconds)
    progressBarRef.current.max=seconds;
  }


  return (    
    <div className='innerd'>

      {playlist ?(playlist.length > 0 && playlist.map((audio, index)=>{
        return( 
          <div key={index}> 
          fjklfkjd;ldkjfsdl
          <p>{audio.link}</p>
          <><audio src={audio.link} controls></audio></>
          </div>)})):(null)}


      <div>
      <div className='playBlock'>

        
        <img 
        // src={currentTrack.avatar || Template} 
        className='activeRecordAvatar'
        alt='User avatar'/>  
      </div> 

      {/* <p>{currentTrack.name}</p> */}

      <audio 
      // src={playlist[0].link}
      // src={currentTrack.link}  
      ref={audioRef}
      onCanPlay={onLoadedMetadata}/>  

    </div>



      {/* <DisplayTrack 
      currentTrack={currentTrack} 
      audioRef={audioRef}
      progressBarRef={progressBarRef}
      setDuration={setDuration}/>  */}

      <AudioControls  
      audioRef={audioRef}
      progressBarRef={progressBarRef}
      duration ={duration}
      setTimeProgress={setTimeProgress}
      
      playlist={playlist}
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