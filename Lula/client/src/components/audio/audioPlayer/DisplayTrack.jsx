import React from 'react';
import Template from '../../../img/template.svg';

const DisplayTrack = ({
  currentTrack, 
  audioRef,
  progressBarRef,
  setDuration}) => {

    const onLoadedMetadata = () =>{
      console.log("DURATION", audioRef.current.duration);
      const seconds = audioRef.current.duration;
      setDuration(seconds)
      progressBarRef.current.max=seconds; 
    }

  return (
    <div>
      <div className='playBlock'>

        
        <img 
        // src={currentTrack.avatar || Template} 
        className='activeRecordAvatar'
        alt='User avatar'/>  
      </div> 

      {/* <p>{currentTrack.name}</p> */}

      <audio 
      src={currentTrack.link}  
      ref={audioRef}
      onCanPlay={onLoadedMetadata}/>  

    </div>
  )
}

export default DisplayTrack