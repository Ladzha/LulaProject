import React, {createContext,useState} from 'react'
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import OneUser from './OneUser'

export const PendingElementContext = createContext('');

const PendingElement = ({username, duration, created}) => {
    const [avatar, setAvatar]=useState([{}]);
    
const handleApproval=()=>{
    console.log('Record Approved');
}

const handleRejection=()=>{
    console.log('Record Rejected');
}

  return (
    <PendingElementContext.Provider value={{avatar, setAvatar}}>
    <div className='toApprovalBox'>
    <div className='blockToApproval'>
        <p className='hint'>Upload: {created}</p>
        <OneUser id={3}/>
        <div className='infoRecordBox'>

            <img className='userIcon' src={avatar[0].link??'img.jpg'}></img>

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
    </PendingElementContext.Provider>
  )
}

export default PendingElement