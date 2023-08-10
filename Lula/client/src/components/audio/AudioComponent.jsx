import React, { useState, useEffect} from 'react'
import { AvatarService } from '../../services/avatar.service.js';
import { UserService } from '../../services/user.service.js';
import { AudioService } from '../../services/audio.service.js';
import InfoBox from '../elements/InfoBox.js'


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

    <div className='listBox'>
    
        <div className='infoBlock'>        
        <p className='hint'>Upload: {created}</p>    
            <InfoBox avatar={avatar[0].link} username ={user.username} info={duration}/>
        </div>

    </div>

    </div>

  )
}

export default AudioComponent