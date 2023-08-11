import React from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const PendingIconBox = () => {

    const handleApproval=()=>{
        console.log('Record Approved');
    }

    const handleRejection=()=>{
        console.log('Record Rejected');
    }
   
  return (
    <div className='pendingIconBox'>
    <AiFillCheckCircle className='icon-red' onClick={handleApproval}/>
    <AiFillCloseCircle className='icon-green' onClick={handleRejection}/>  
    </div>
  )
} 

export default PendingIconBox