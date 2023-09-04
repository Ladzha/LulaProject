import React from 'react'

const ProgressBar = ({ progressBarRef, audioRef, timeProgress, duration }) => {

  const handleProgressChange =()=>{
    if(!audioRef.current) return;
    audioRef.current.currentTime=progressBarRef.current.value; 
  }

//Function to convert time format
  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes =minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds =seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    // return '00:00';
  };


  return (
    <div className='progress'>
      <span className='time current'>{formatTime(timeProgress)}</span>
      <input type="range" ref={progressBarRef} onChange={handleProgressChange}/>
      <span className='time'>{duration =='Infinity:NaN'? formatTime(duration): 'No'}</span>
    </div>
  );
};

export default ProgressBar