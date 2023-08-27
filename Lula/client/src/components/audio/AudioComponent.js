import React, { useState, useEffect} from 'react'
import { AvatarService } from '../../services/avatar.service.js';
import { UserService } from '../../services/user.service.js';
import { AudioService } from '../../services/audio.service.js';
import ActiveInfoBox from '../elements/ActiveInfoBox.js'
import CommentsBlock from './CommentsBlock.jsx'

const AudioComponent = ({id, created,  classname, onPlayClick, isPlaying  }) => {

    const [audio, setAudio]=useState([{}]);
    const [user, setUser]=useState([{}]);
    const [avatar, setAvatar]=useState([{}]);
    const [commentBlock, setCommentBlock] =useState(false)
    
    const toggleComments = () => {
        setCommentBlock(!commentBlock);
      };

    useEffect(() => {
      if (!id) return;
      const fetchData = async () => {
        try {
          const audioData = await AudioService.getById(id);
          setAudio(audioData);

          if(audioData.userid){
            const userData = await UserService.getById(audioData.userid);
            setUser(userData);

          if (userData.avatarid) {
            const avatarData = await AvatarService.getById(userData.avatarid);
            setAvatar(avatarData);
            }
          }

          } catch (error) {
              console.log(error);
          }
      };
      fetchData();
  }, [id]);
 
  
  return (
      <div className='listBox'>
        <div className='infoBlock'>   
              <ActiveInfoBox avatar={avatar[0].link} 
              username ={user.username} 
              userid ={user.userid} 
              info={created} toggleComments={toggleComments} 
              classname={classname}
              isPlaying={isPlaying}
              onPlayClick={onPlayClick}/>

              {commentBlock && <CommentsBlock recordid={audio.recordid}/>}   
              
      </div>
    </div>
  )
}

export default AudioComponent