import React, { useState, useEffect} from 'react'
import { AvatarService } from '../../services/avatar.service.js';
import { UserService } from '../../services/user.service.js';
import { AudioService } from '../../services/audio.service.js';


const AudioComponent = ({id, duration, created}) => {

    const [audio, setAudio]=useState([{}]);
    const [user, setUser]=useState([{}]);
    const [avatar, setAvatar]=useState([{}]);
    

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
                    console.log(userData.avatarid);
                    console.log(avatarData);
                    console.log(avatar[0].link);
                }
              }

          } catch (error) {
              console.log(error);
          }
      };

      fetchData();
  }, [id]);

    
  return (

    <div className='toApprovalBox'>
    <div className='blockToApproval'>
        <p className='hint'>Upload: {created}</p>
        <div className='infoRecordBox'>

            <img className='userIcon' src={avatar[0].link??'img.jpg'}></img>
            <div className='infoBox'>     
                <div className='infoTextBox'>
                <p className='infoName'>{user.username}</p>
                <p className='infoDuration'>{duration}</p>
                </div>    
            </div>
        </div>
    </div>
    </div>

  )
}

export default AudioComponent