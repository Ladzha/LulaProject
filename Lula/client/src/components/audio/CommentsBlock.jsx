import React from 'react';
import {useState} from 'react';
import avatar from '../../img/avatar13.jpg';
import CommentForm from './CommentForm';
import CommentElement from './CommentElement';


const CommentsBlock = () => {

    const [commentForm, setCommentForm] = useState(false)
    const [comments, setComments]=useState([]);

    const [currentUser, setCurrentUser] = useState({})

    currentUser.username = 'Dona';
    currentUser.avatar = avatar;
    currentUser.avatar = avatar;

    const handleComment = ()=>{
        setCommentForm(!commentForm)
    }


  return (
    <div className='listComment'>
    <div>
    {comments.length>0 && comments.map(comment=> { 
              return(
                <CommentElement id={comment.commentid}/>
    )})}
            
    </div>

    

    <CommentElement id={2}/>
    <CommentElement id={13}/>

<button className='submitButton addButton' onClick={handleComment}>{commentForm? 'Hide form' : 'Leave a comment'}</button>

{commentForm && <CommentForm username='Yossi' avatar={avatar} about={'abot'}/>}

    </div>
  )
}

export default CommentsBlock