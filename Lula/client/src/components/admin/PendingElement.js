import React from 'react'
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const PendingElement = ({username, duration, created}) => {

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
            {/* <img className='userIcon' src={props.avatar}></img> */}

            <div className='infoBox'>     
                <div className='infoTextBox'>
                <p className='infoName'>{username}</p>
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

export default PendingElement