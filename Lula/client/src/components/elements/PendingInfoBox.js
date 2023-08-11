import React, { useState } from 'react';
import UserBox from './UserBox.js'
import PendingIconBox from './PendingIconBox.js';

const PendingInfoBox = (props) => {

  return (
    <div className='pendingInfoBox'>
  
        <UserBox avatar={props.avatar} username ={props.username} info={props.info}/>
        <PendingIconBox/>
    </div>
  )
}

export default PendingInfoBox 