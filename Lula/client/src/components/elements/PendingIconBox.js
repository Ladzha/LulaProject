import React, {useState, useEffect} from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { PendingService } from '../../services/pending.service.js';
import { AudioService } from '../../services/audio.service.js';

const PendingIconBox = ({recordid}) => {

  const [audio, setAudio]=useState([{}]);

  const handleRejection= async()=>{
    if (!recordid) return;
      try {
        const pendingData = await PendingService.deleteById(recordid);
        setAudio(pendingData);
        console.log("REJECTED");
      } catch (error) {
        console.log(error);
      }
    };

  const handleApproval= async()=>{
    if (!recordid) return;
      try {
        const pendingData = await PendingService.getById(recordid);
        console.log("recordid", recordid);

        if(pendingData){
          const audioData = await AudioService.postAudio(
            pendingData[0].userid, 
            pendingData[0].link, 
            pendingData[0].imgid);
  
          setAudio(audioData);
          handleRejection();

        }

        else{
          console.log("Pending data is undefined or null");
          return;
        }



      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {}, [audio]);

  return (
    <div className='pendingIconBox'>
    <AiFillCheckCircle className='icon-green' onClick={handleApproval}/>
    <AiFillCloseCircle className='icon-red' onClick={handleRejection}/>  
    </div>
  )
} 

export default PendingIconBox