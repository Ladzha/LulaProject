import React from 'react';
import { AiFillHeart } from "react-icons/ai";
import {AiOutlineEllipsis} from "react-icons/ai"


const LikeButton = () => {

const handleLike=()=>{
    console.log("I click like");
}

const handleMore=()=>{
    console.log("I click more information");
}


  return (
    <div className='infoIconBox'>

    <AiOutlineEllipsis className="icon-red"/>
    
    <div className='likeCircle' onClick={handleMore}>
        <AiFillHeart className="icon-red" onClick={handleLike}/>
    </div>
        
    </div>

  )
}

export default LikeButton