import React, { useState } from 'react';
import UserBox from './UserBox.js'
import PendingIconBox from './PendingIconBox.js';


const PendingInfoBox = (props) => {


  return (
    <div className={`pendingInfoBox ${props.isPlaying ?'selected' : ''}`} onClick={props.onPlayClick}>
        <UserBox avatar={props.avatar} username ={props.username} userid={props.userid} info={props.info}/>
        <PendingIconBox recordid={props.recordid}/>
    </div>
  )
}

export default PendingInfoBox 