import React from 'react'
import { useState, useRef, useEffect } from 'react'

import ProgressBar from './ProgressBar'
import AudioControls from './AudioControls'
import AudioComponent from '../AudioComponent'

import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

/*Because we will need the audio data in multiple children 
components, we will import the playlist file in the 
AudioPlayer parent component. */

const AudioPlayer = ({playlist}) => {

  const audioRef = useRef(); //to get audio tag in html
  const progressBarRef = useRef(); //to get input range tag in html

  const [trackIndex, setTrackIndex] = useState(0); // index of track
  const [timeProgress, setTimeProgress]=useState(0); //to get current time of audio
  const [currentTrack, setCurrentTrack] = useState({});
  const [duration, setDuration]=useState(0); //to get duration of the audio
  const [isPlaying, setIsPlaying] = useState(false); //play or not
  // const [volume, setVolume]=useState(60)

  const [showRecord, setShowRecord] =useState(false)

  const handleShowRecord = () => {
    setShowRecord(!showRecord);
    };



const formatTime = (time)=>{
  const minutes = Math.floor(time/60);
  const seconds = Math.floor(time/60);
  return `${minutes}:${seconds.toString().padStart(2,'0')}`;
};

  useEffect(() => {
    if (playlist.length > 0) {
      setCurrentTrack(playlist[trackIndex]);
    }
  }, [playlist, trackIndex]);


//to play track from playlist
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const handlePlayClick = (index) => {
    if (currentTrackIndex === index) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrackIndex(index);
      setIsPlaying(true);
    }
  };

  const onLoadedMetadata = () =>{
    console.log("DURATION", audioRef.current.duration);
    const seconds = audioRef.current.duration;
    setDuration(seconds)
    progressBarRef.current.max=seconds;
  }


  //recording 
  const recorderControls = useAudioRecorder()
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const newAudio = document.createElement("audio");
    newAudio.src = url;
    newAudio.controls = true;
    document.body.appendChild(newAudio);
    console.log(newAudio.src);
  };

  return (    
    <div className='innerd'>
      {playlist.length > 0 ? (<>

      <audio 
      src={currentTrack.link}  
      ref={audioRef}
      onCanPlay={onLoadedMetadata}/>   


      {/* Render audio controls */}
      <AudioControls  
      audioRef={audioRef}
      progressBarRef={progressBarRef}
      duration ={duration}
      setTimeProgress={setTimeProgress}
      
      playlist={playlist}
      trackIndex={trackIndex}
      setTrackIndex = {setTrackIndex}
      setCurrentTrack={setCurrentTrack}

      isPlaying={isPlaying}
      setIsPlaying ={setIsPlaying}

      />


      <ProgressBar 
      progressBarRef={progressBarRef} 
      audioRef={audioRef} 
      duration ={duration} 
      timeProgress={timeProgress} />


      {playlist.length > 0 && playlist.map((audio, index)=>{
            return( 
              <div key={index}>
                <AudioComponent 
                id={audio.recordid}  
                duration={`${0}:${0}`}
                // classname = {trackIndex === index ? 'selected' : ''} 
                classname={currentTrackIndex === index ? 'selected' : ''}
                created={new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                }).format(new Date(audio.created))}

                onPlayClick={() => handlePlayClick(index)}
                isPlaying={isPlaying && currentTrackIndex === index}

                // onPlayClick={handlePlayClick}
                
                />
              </div>)})}


      </>):(<p className=''>There are no audios yet</p>)}
      <p className='hint'onClick={handleShowRecord}>Create record?</p>
      {showRecord &&  
          <div className='box recorderBox'>
          <AudioRecorder 
            onRecordingComplete={(blob) => addAudioElement(blob)}
            recorderControls={recorderControls}
            showVisualizer={true}/>
          </div>

      } 

    </div> 
  )
}

export default AudioPlayer 