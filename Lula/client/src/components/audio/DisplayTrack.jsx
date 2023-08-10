import React from 'react';
import CommentsBlock from './CommentsBlock';
import Rating from './Rating';


const DisplayTrack = ({currentTrack, audioRef}) => {
    console.log(currentTrack);
    console.log(currentTrack['src']);
    console.log(audioRef);

  return (
    <div>
        DisplayTrack
        <p>{currentTrack.author}</p>

        <audio style={{backgroundColor:'blue'}} src={currentTrack.src} controls ref={audioRef}>Play</audio>
        
         <Rating/>

         <CommentsBlock/>

    </div>
  )
}

export default DisplayTrack