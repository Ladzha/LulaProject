import React, {createContext, useState, useContext, useEffect} from 'react'
// import { AvatarService } from '../../services/avatar.service.js';
// import { UserService } from '../../services/user.service.js';
import { PendingService } from '../../services/pending.service.js';
import PendingInfoBox from '../elements/PendingInfoBox.js';

const PendingComponent = ({recordid, created, classname, onPlayClick, isPlaying }) => {

    const [audio, setAudio]=useState([{}]);
    // const [duration, setDuration] = useState(0);

    useEffect(() => {
      if (!recordid) return;
      const fetchData = async () => {
          try {
              const audioData = await PendingService.getAudioWithUserInfo(recordid);
              setAudio(audioData);
              console.log("TEST NA LINK", audioData);

            // Retrieve duration from audio element's metadata
            // const audioElement = new Audio(audioData.link);
            // audioElement.addEventListener('loadedmetadata', () => {
            // setDuration(audioElement.duration);
            // }); //Doesn't work

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
        <PendingInfoBox 
        avatar={audio[0].creator_avatar_link} 
        username ={audio[0].creator_username} 
        userid={audio[0].userid} ////
        info={`Exercise № ${audio[0].imgid}`} 
        audio={audio.pending_link} //izmenila
        recordid={recordid}
        classname={classname}
        isPlaying={isPlaying}
        onPlayClick={onPlayClick}/>
    </div>
    </div>

  )
}

export default PendingComponent