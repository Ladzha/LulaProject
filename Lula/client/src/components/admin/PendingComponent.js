import React, {createContext, useState, useContext, useEffect} from 'react'
import { AvatarService } from '../../services/avatar.service.js';
import { UserService } from '../../services/user.service.js';
import { PendingService } from '../../services/pending.service.js';
import PendingInfoBox from '../elements/PendingInfoBox.js';

const PendingComponent = ({recordid, created}) => {

    const [audio, setAudio]=useState([{}]);
    useEffect(() => {
      if (!recordid) return;
      const fetchData = async () => {
          try {
              const audioData = await PendingService.getAudioWithUserInfo(recordid);
              setAudio(audioData);
          } catch (error) {
              console.log(error);
          }
      };
      fetchData();
  }, [recordid]);

  return (

    <div className='listBox'>   
    <div className='infoBlock'>      
        <p className='hint'>Upload: {created}</p>
        <PendingInfoBox avatar={audio[0].creator_avatar_link} username ={audio[0].creator_username} info={`${0}:${0}`} audio={audio.link} recordid={recordid}/>
    </div>
    </div>

  )
}

export default PendingComponent


              // if(audio.userid){
              //   const userData = await UserService.getById(audio.userid);
              //   setUser(userData);

              //   if (userData.avatarid) {
              //       const avatarData = await AvatarService.getById(userData.avatarid);
              //       setAvatar(avatarData);
              //       console.log(userData.avatarid);
              //       console.log(avatarData);
              //       console.log(avatar[0].link);
              //   }
              // }