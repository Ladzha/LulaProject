import React from 'react'
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const RecordToApproval = (props) => {

const handleApproval=()=>{
    console.log('Record Approved');
}

const handleRejection=()=>{
    console.log('Record Rejected');
}

  return (
    <div className='toApprovalBox'>
    <div className='blockToApproval'>
        <p className='hint'>Upload: 24/01/2023 12:12:47</p>
        
        <div className='infoRecordBox'>
            <img className='userIcon' src={props.img}></img>

            <div className='infoBox'>     
                <div className='infoTextBox'>
                <p className='infoName'>Doriana</p>
                <p className='infoDuration'>3:34</p>
                </div>
                <AiFillCheckCircle className='icon-red' onClick={handleApproval}/>
                <AiFillCloseCircle className='icon-grey' onClick={handleRejection}/>          
            </div>

        </div>

    
    </div>
    
    </div>
  )
}

export default RecordToApproval