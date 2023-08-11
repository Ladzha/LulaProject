import React from 'react'
import UserBox from '../elements/UserBox.js'

const CommentForm = (props) => {
  const handleCommentSubmit = (event)=>{
    event.preventDefault()
    const userComment = event.target.commentInput.value
    console.log(userComment);
  }
  return (

      <div className='newCommentBlock'>

      <UserBox avatar={props.avatar} username ={props.username} info={props.about}/>

      <form className='newComment' onSubmit={(event)=>handleCommentSubmit(event)}>
        <textarea className='newCommentText' type='text' maxLength={200} rows={5} cols={40}name='commentInput' placeholder="Remember to be polite"/>
        <button className='submitButton addButton' type="submit">Submit</button>
      </form> 
      <p className='hint'>Clean comment</p>

      </div>
  )
}

export default CommentForm