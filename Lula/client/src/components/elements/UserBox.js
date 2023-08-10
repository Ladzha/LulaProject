import React from 'react'

const UserBox = (props) => {
  return (
    <div className='userBox'> 

        <img className='userIcon' src={props.avatar}></img>

        <div className='infoTextBox'>
        <p className='infoName'>{props.username}</p>
        <p className='infoText'>{props.info}</p>
        </div>

    </div>

  )
}

export default UserBox 