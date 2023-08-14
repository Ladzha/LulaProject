import React, {useRef} from 'react'
import UserBox from '../elements/UserBox.js'
import { CommentService } from '../../services/comment.service.js';

const CommentForm = (props) => {

  const formRef = useRef();


  const handleCommentSubmit = async (event)=>{
    event.preventDefault()
    const userComment = event.target.commentInput.value;

    try {
      const commentData = await CommentService.postComment(1, 1, userComment);
      console.log('Comment posted:', commentData);

      event.target.commentInput.value = ''; // Clear the textarea

    } catch (error) {
      console.log(error);
    }
    console.log(userComment);
  }

  const handleCleanComment  = ()=>{
    formRef.current.commentInput.value = ''; // Clear the textarea
  }
  return (

      <div className='newCommentBlock'>

      <UserBox avatar={props.avatar} username ={props.username} info={props.about}/>

      <form 
      className='newComment' 
      onSubmit={(event)=>handleCommentSubmit(event)}
      ref={formRef}>

        <textarea 
        className='newCommentText' type='text' 
        maxLength={200} rows={5} cols={40}
        name='commentInput' placeholder="Remember to be polite"/>

        <button className='submitButton addButton' type="submit">Submit</button>
      </form> 
      <p className='hint' onClick={handleCleanComment }>Clean comment</p>

      </div>
  )
}

export default CommentForm