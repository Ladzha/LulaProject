import React from 'react'
import { Link } from 'react-router-dom';

const UserBox = (props) => {
  return (
    <div className='userBox'> 

        <Link to={`/profile/${props.userid}`} ><img className='userIcon' src={props.avatar}></img></Link>
        <div className='infoTextBox'>
        <p className='infoName'>{props.username}</p>
        <p className='infoText'>{props.info}</p>
        </div>

    </div>

  )
}

export default UserBox 