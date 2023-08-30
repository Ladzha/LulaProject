import React from 'react'
import { useState, useRef, useEffect, useContext } from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';
import ProgressBar from './ProgressBar'
import AudioControls from './AudioControls'
import AudioComponent from '../AudioComponent'
import { AudioRecorder} from 'react-audio-voice-recorder';

import { AppContext } from '../../../App.js';
import jwtDecode from 'jwt-decode';

/*Because we will need the audio data in multiple children 
components, we will import the playlist file in the 
AudioPlayer parent component. */

const AudioPlayer = ({playlist}) => {

  const audioRef = useRef(); //to get audio tag in html
  const progressBarRef = useRef(); //to get input range tag in html

  //to play track from playlist
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0); // index of track
  const [timeProgress, setTimeProgress]=useState(0); //to get current time of audio
  const [currentTrack, setCurrentTrack] = useState({});
  const [duration, setDuration]=useState(0); //to get duration of the audio
  const [isPlaying, setIsPlaying] = useState(false); //play or not
  // const [volume, setVolume]=useState(60)

  const [showRecord, setShowRecord] =useState(false)
  const { imgid } = useParams();

  //token and userid
  const { token } = useContext(AppContext);
  const [userid, setUserid] = useState('');


  const handleShowRecord = () => {
    setShowRecord(!showRecord);
    };



// const formatTime = (time)=>{
//   const minutes = Math.floor(time/60);
//   const seconds = Math.floor(time/60);
//   return `${minutes}:${seconds.toString().padStart(2,'0')}`;
// };

  useEffect(() => {
    if(playlist){
    if (playlist.length > 0) {
      setCurrentTrack(playlist[trackIndex]);
    }}
  }, [playlist, trackIndex]);


  useEffect(()=>{
    if(token){
      const decodedToken = jwtDecode(token); 
      setUserid(decodedToken.userid);
    }else{
      console.log("There is no token");
    }
}, [token])


  const handlePlayClick = (index) => {
    if (currentTrackIndex === index) {
      setIsPlaying(!isPlaying);

      audioRef.current.pause();
      setCurrentTrackIndex(null);

    } else {

      if (currentTrackIndex !== null) {
        audioRef.current.pause();
      }

      setCurrentTrackIndex(index);
      setIsPlaying(true);

      audioRef.current.src = playlist[index].link; // Set the audio source
      audioRef.current.play();


    }
  };

  const onLoadedMetadata = () =>{
    const seconds = audioRef.current.duration;
    setDuration(seconds)
    progressBarRef.current.max=seconds;
  }

  const addAudioElement = async (blob) => {
    const name = 'as'

    const formData = new FormData();
      formData.append("file", blob);
      formData.append("imgid", imgid);
      formData.append("userid", userid);
      formData.append("name", name);


      try {
        const res = await axios.post("http://localhost:3001/api/pending/upload-single", formData);
        // setFileData(res.data);
      } catch (error) {
        console.log(error.response.data.msg);
      }
  };



  return ( <>
    {playlist ? (
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

      currentTrackIndex={currentTrackIndex}

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
                classname={currentTrackIndex === index ? 'selected' : ''}
                created={new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                }).format(new Date(audio.created))}

                onPlayClick={() => handlePlayClick(index)}
                isPlaying={isPlaying && currentTrackIndex === index}/>

              </div>)})}

      </>):(<p className='information'>There are no audios yet</p>)}
      {token&& <>
        <p className='hint'onClick={handleShowRecord}>{showRecord?'Hide microphone':'Create record'}</p>
          {showRecord &&  
            <div className='box recorderBox'>
            <AudioRecorder 
              onRecordingComplete={(blob) => addAudioElement(blob)}
              // onRecordingComplete={handleRecordingComplete}

              // recorderControls={recorderControls}
              showVisualizer={true}
              downloadOnSavePress={false}
              downloadFileExtension="webm"
              />
            </div>} </>}
      </div> ):(<p className=''> There are no audios yet </p>)}
      </>
  ) 
}

export default AudioPlayer 