import React from 'react';
import {useState} from 'react';
import avatar from '../../img/avatar13.jpg';
import CommentForm from './CommentForm';
import CommentElement from './CommentElement';


const CommentsBlock = () => {

    const [commentForm, setCommentForm] = useState(false)

    const handleComment = ()=>{
        setCommentForm(!commentForm)
    }


  return (
    <div className='commentBox'>CommentsBlock
<CommentElement id={2}/>
<CommentElement id={13}/>

<button onClick={handleComment}>Comment</button>
{commentForm && <CommentForm placeholder="Remember to be polite" username='Yossi' avatarLink={avatar}/>}

    </div>
  )
}

export default CommentsBlock