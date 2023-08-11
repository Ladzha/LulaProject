import React from 'react'
import { Link } from 'react-router-dom';
import avatar from '../../img/avatar13.jpg';


const Profile = (props) => {

  const handleUpdate= async (username)=>{
    try {
      const registerResponse = await fetch(`http://localhost:3001/api/users/${username}`, {
          method: "UPDATE",
      })
      const parseRegisterData = await registerResponse.json()
      console.log("parseRegisterData=", parseRegisterData);

    } catch (error) {
        console.log(error)   
    }

    // console.log(username, ' ', firstname, ' ', lastname, ' ', email, ' ', password)

  }

  

  const handleDelete=()=>{
    
  }

  return (
    <div className='homeContainer'>
        Profile
        <img className='userIconInComment' src={props.img}></img>
        <p>My name is: {props.username}</p>
        <p>Some information about me: {props.about}</p>
        <button onClick={handleUpdate}>Edit information</button>
        <button onClick={handleDelete}>Delete Account</button>

        <ul>
          My record:
          <li className='listRecord'>
          <Link to='/record/:usname/:recordid'>Record1</Link>
          record bez avatarki?
          dtcm kusok reiting comment
          </li>
          <li className='listRecord'>
          <Link to='/record/:usname/:recordid'>Record1</Link>
          record bez avatarki?
          dtcm kusok reiting comment
          </li>
          <li className='listRecord'>
          <Link to='/record/:usname/:recordid'>Record1</Link>
          record bez avatarki?
          dtcm kusok reiting comment
          </li>
        </ul>


        <div className='userBox'>
            <img className='userIcon' src={avatar}></img>
            <div className='PendingInfoBox'>     
                <div className='infoTextBox'>
                <p className='infoName'>{"username"}</p>
                <p className='infoText'>{"some text"}</p>
                </div>
            </div>
        </div>
        <div>
          kjlkjlkjdlkj
        </div>

    </div>
  )
}



export default Profile


        //user info: username, his avatars, text about, his records, hes comments, his 

        
