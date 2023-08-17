import React, {useState, useEffect} from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { PendingService } from '../../services/pending.service.js';
import { AudioService } from '../../services/audio.service.js';

const PendingIconBox = ({recordid}) => {

  const [audio, setAudio]=useState([{}]);

  const handleRejection=()=>{
    if (!recordid) return;
      const fetchData = async () => {
        try {
          const pendingData = await PendingService.deleteById(recordid);
          setAudio(pendingData);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
  };

  const handleApproval=()=>{
    if (!recordid) return;
      const fetchData = async () => {
        try {
          const pendingData = await PendingService.getById(recordid);
          if (!pendingData) return;
          const audioData = await AudioService.postAudio(pendingData.userid, pendingData.name, pendingData.link, pendingData.imgid);
          setAudio(audioData);
          handleRejection();
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
  };

  return (
    <div className='pendingIconBox'>
    <AiFillCheckCircle className='icon-green' onClick={handleApproval}/>
    <AiFillCloseCircle className='icon-red' onClick={handleRejection}/>  
    </div>
  )
} 

export default PendingIconBox