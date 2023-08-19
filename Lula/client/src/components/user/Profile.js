import React from 'react'

import {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';    
import { AudioService } from '../../services/audio.service.js';
import { CommentService } from '../../services/comment.service.js';
import { UserService } from '../../services/user.service.js';
import { AvatarService } from '../../services/avatar.service.js';
       
import AudioPlayer from '../audio/audioPlayer/AudioPlayer'
import UserBox from '../elements/UserBox.js';




const Profile = () => {

  const { userid } = useParams();

  const [audios, setAudios]=useState([]);
  const [comments, setComments]=useState([]);
  const [user, setUser]=useState([{}]);
  const [avatar, setAvatar]=useState([{}]);

  console.log("COMMENT", comments);

  useEffect(() => {
    const fetchData = async () => {
      try {

        if(userid) {
          const userData = await UserService.getById(userid)
          setUser(userData);  
          
          if(!userData) return;
  
          if(userData.avatarid){
            const avatarData = await AvatarService.getById(userData.avatarid)
            setAvatar(avatarData);

            const audioData = await AudioService.getByUserId(userid)
            setAudios(audioData);   

          }

          const commentData = await CommentService.getByUserId(userid)
          setComments(commentData);   

  

        }

        } catch (error) {
            console.log(error);
        }
    };
    fetchData();
  }, [userid]);
        
  return (
    <div className='containerColumn'>
    <p className='titleMain'> Profile by {user.username} </p>
      <div className='profileContainer'>

        <img className='userIconInComment' src={avatar[0].link}></img>
        <p className="loading">My name is: {user.firstname}</p>
        <p className="loading">Something about me: {user.about}</p>




        <div className='profileColumn'>

        {audios.length > 0 && <div className= 'box listRecord'>
        <AudioPlayer playlist={audios}/>    
        </div>}

        {comments.length > 0 && <div className= 'box listRecord'>
          {comments.map((comment, index)=>{
            return(
              <div className='commentBlock'>
              <UserBox avatar={avatar[0].link} username ={user.username} info={""}/>
              <div className='commentBox'>{comment.text}</div> 
              </div>
              
            )})}

          </div>}

      </div>
      
      </div>
    </div>
  )
}



export default Profile


        //user info: username, his avatars, text about, his records, hes comments, his 
