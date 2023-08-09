import React, {createContext, useState, useContext, useEffect} from 'react'
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { AvatarService } from '../../services/avatar.service.js';
import { UserService } from '../../services/user.service.js';
import { PendingService } from '../../services/pending.service.js';


const PendingComponent = ({id, duration, created}) => {

    const [audio, setAudio]=useState([{}]);
    const [user, setUser]=useState([{}]);
    const [avatar, setAvatar]=useState([{}]);
    

    useEffect(() => {
      if (!id) return;
      const fetchData = async () => {
          try {

              const audioData = await PendingService.getById(id);
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

    
    const handleApproval=()=>{
        console.log('Record Approved');
    }

    const handleRejection=()=>{
        console.log('Record Rejected');
    }

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
                <AiFillCheckCircle className='icon-red' onClick={handleApproval}/>
                <AiFillCloseCircle className='icon-grey' onClick={handleRejection}/>          
            </div>
        </div>
    </div>
    </div>

  )
}

export default PendingComponent