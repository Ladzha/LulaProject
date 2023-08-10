import React from 'react'
import UserBox from './UserBox.js'
import InfoIconBox from './InfoIconBox.js';
import LikeButton from './LikeButton.js';

const InfoBox = (props) => {
  return (
    <div className='infoBox'>
         
        <UserBox avatar={props.avatar} username ={props.username} info={props.info}/>
        <InfoIconBox/>
    </div>
  )
}

export default InfoBox 