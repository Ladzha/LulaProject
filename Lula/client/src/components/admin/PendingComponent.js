import React, {createContext, useState, useContext, useEffect} from 'react'
import { AvatarService } from '../../services/avatar.service.js';
import { UserService } from '../../services/user.service.js';
import { PendingService } from '../../services/pending.service.js';
import PendingInfoBox from '../elements/PendingInfoBox.js';

const PendingComponent = ({recordid, created}) => {

    const [audio, setAudio]=useState([{}]);
    // const [user, setUser]=useState([{}]);
    // const [avatar, setAvatar]=useState([{}]);
    
console.log("TEST RECORD ID", recordid);
    useEffect(() => {
      if (!recordid) return;
      const fetchData = async () => {
          try {

              const audioData = await PendingService.getAudioWithUserInfo(recordid);
              setAudio(audioData);
              console.log("AUDIO", audio[0].name);
              console.log('AUDIO DATA', audioData);

          } catch (error) {
              console.log(error);
          }
      };

      fetchData();
  }, [recordid]);

    
    const handleApproval=()=>{
        console.log('Record Approved');
    }

    const handleRejection=()=>{
        console.log('Record Rejected');
    }

  return (

    <div className='listBox'>
    
    <div className='infoBlock'>
        
        <p className='hint'>Upload: {created}</p>

        <PendingInfoBox avatar={audio[0].creator_avatar_link} username ={audio[0].creator_username} info={`${0}:${0}`} audio={audio.link}/>

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