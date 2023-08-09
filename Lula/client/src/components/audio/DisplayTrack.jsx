import React from 'react';
import CommentsBlock from './CommentsBlock';
import Rating from './Rating';
import avatar from '../../img/avatar13.jpg';
import { BsMusicNoteBeamed } from 'react-icons/bs';




const DisplayTrack = ({currentTrack, audioRef}) => {
    console.log(currentTrack);
    console.log(currentTrack['src']);
    console.log(audioRef);

  return (
    <div>
        DisplayTrack
        <p>{currentTrack.author}</p>
        <img className='userIconInComment' src={currentTrack.thumbnail} alt={currentTrack.author}/>
        <BsMusicNoteBeamed />

        <audio style={{backgroundColor:'blue'}} src={currentTrack.src} controls ref={audioRef}>Play</audio>
        
         <Rating/>
         <CommentsBlock/>

    </div>
  )
}

export default DisplayTrack