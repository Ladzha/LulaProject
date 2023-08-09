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

{/* <CommentElement username='Dora' text="FUFUFUFUF" link='https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFieSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'/> */}
<button onClick={handleComment}>Comment</button>
{commentForm && <CommentForm placeholder="Remember to be polite" username='Yossi' avatarLink={avatar}/>}

    </div>
  )
}

export default CommentsBlock