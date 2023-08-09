import React from 'react';
import {useState, useEffect} from 'react';
import { AvatarService } from '../../services/avatar.service.js';
import { UserService } from '../../services/user.service.js';
import { PendingService } from '../../services/pending.service.js';
import { CommentService } from '../../services/comment.service.js';

const CommentElement = ({ id }) => {

    const [comment, setComment]=useState([{}]);
    const [audio, setAudio]=useState([{}]);
    const [user, setUser]=useState([{}]);
    const [avatar, setAvatar]=useState([{}]);

    useEffect(() => {
        if (!id) return;
        const fetchData = async () => {
            try {

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
    <div className='commentBox'>CommentElement
      <img className='userIconInComment' src={avatar[0].link}/>
      <p className='usernameInComment'>{user.username}</p>
      {/* <p>{new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
}).format(new Date(comment[0].created))}</p> */}
      <div>{comment[0].text}</div>
    </div>
  )
}

export default CommentElement

