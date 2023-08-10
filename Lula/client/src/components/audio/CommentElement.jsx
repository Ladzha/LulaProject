import React from 'react';
import {useState, useEffect} from 'react';
import { AvatarService } from '../../services/avatar.service.js';
import { UserService } from '../../services/user.service.js';
import { PendingService } from '../../services/pending.service.js';
import { CommentService } from '../../services/comment.service.js';
import UserBox from '../elements/UserBox.js'


const CommentElement = ({ id }) => {

    const [comment, setComment]=useState([{}]);
    const [audio, setAudio]=useState([{}]);
    const [user, setUser]=useState([{}]);
    const [avatar, setAvatar]=useState([{}]);


    useEffect(() => {
        if (!id) return;
        const fetchData = async () => {
            try {

              const data = await fetch('http://localhost:3001/api/img/getaudio', {
                method : "POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify({
                  imgid:2
                })

              })
const response = await data.json()
console.log("RESPONSE", response);

                const commentData = await CommentService.getById(id);
                setComment(commentData);
                console.log('comment', commentData[0].userid);

                // const audioData = await PendingService.getById(id);
                // setAudio(audioData);
  
                if(commentData[0].userid){
                  const userData = await UserService.getById(commentData[0].userid);
                  setUser(userData);
                  console.log("user", user[0]);
  
                    if (userData.avatarid) {
                        const avatarData = await AvatarService.getById(userData.avatarid);
                        setAvatar(avatarData);
                        console.log('avatar', avatar[0]);
                    }
                }
  
            } catch (error) {
                console.log(error);
            }
        };
  
        fetchData();
    }, [id]);

  return (
    <div className='commentBlock'>

     <UserBox avatar={avatar[0].link} username ={user.username} info={comment[0].created}/>

      <div className='commentBox'>{comment[0].text}</div>

    </div>
  )
}

export default CommentElement

