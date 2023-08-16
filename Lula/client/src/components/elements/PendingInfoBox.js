import React, { useState } from 'react';
import UserBox from './UserBox.js'
import PendingIconBox from './PendingIconBox.js';


const PendingInfoBox = (props) => {

  const audio =props.audio;


  return (
    <div className='pendingInfoBox'>
  
        <UserBox avatar={props.avatar} username ={props.username} info={props.info}/>
        <PendingIconBox recordid={props.recordid}/>
    </div>
  )
}

export default PendingInfoBox 