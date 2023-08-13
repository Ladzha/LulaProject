import React from 'react';
import CommentsBlock from '../CommentsBlock';
import Rating from '../Rating';

import Template from '../../../img/template.svg';




const DisplayTrack = ({currentTrack, audioRef, setDuration, progressBarRef}) => {

    const onLoadedMetadata = () =>{
      const seconds = audioRef.current.duration;
      setDuration(seconds)
      progressBarRef.current.max=seconds;
    }

  return (
    <div>
        DisplayTrack
        <div className='playBlock'>
          <img 
          src={currentTrack.thumbnail || Template} 
          className='activeRecordAvatar'
          alt='User avatar'/>  
        </div> 

        <p>{currentTrack.title}</p>
        <p>{currentTrack.author}</p>
        <audio src={currentTrack.src} 
        controls 
        ref={audioRef} 
        onLoadedMetadata={onLoadedMetadata}/>
        
         {/* <Rating/> */}

    </div>
  )
}

export default DisplayTrack