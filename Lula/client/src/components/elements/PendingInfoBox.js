import React, { useState } from 'react';
import UserBox from './UserBox.js'
import PendingIconBox from './PendingIconBox.js';


const PendingInfoBox = (props) => {

  const [active, setActive] = useState(false);
  
  const handleActive = () => {
    setActive(true)
  }


  const audioLink =props.audio;

  return (
    <div className='pendingInfoBox' onClick={handleActive}>
        <UserBox avatar={props.avatar} username ={props.username} info={props.info}/>
        <PendingIconBox recordid={props.recordid}/>
    </div>
  )
}

export default PendingInfoBox 