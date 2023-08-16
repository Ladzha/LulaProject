import React from 'react';
import CommentsBlock from '../CommentsBlock';
import Rating from '../Rating';

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
          src={currentTrack.thumbnail || Template} 
          className='activeRecordAvatar'
          alt='User avatar'/>  
        </div> 

        <p>{currentTrack.title}</p>

        <audio 
        src={currentTrack.link}  
        ref={audioRef}
        onCanPlay={onLoadedMetadata}/>
        
         {/* <Rating/> */}

    </div>
  )
}

export default DisplayTrack