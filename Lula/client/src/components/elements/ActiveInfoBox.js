import React, { useState } from 'react';
import UserBox from './UserBox.js'
import ActiveIconBox from './ActiveIconBox.js';

const ActoveInfoBox = (props) => {

  return (
    <div className={`activeInfoBox ${props.isPlaying ?'selected' : ''}`} >
        <UserBox avatar={props.avatar} username ={props.username} info={props.info}/>
        <ActiveIconBox toggleComments={props.toggleComments}/>
    </div>
  )
}

export default ActoveInfoBox 