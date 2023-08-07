import React from 'react'

const Comment = (props) => {
  const handleCommentSubmit = (event)=>{
    event.preventDefault()
    const userComment = event.target.commentInput.value
    console.log(userComment);
  }
  return (
    <div className='commentBox'>
      <div className='commentHeader'> 
      <img className='userIconInComment' src={props.avatarLink}/>
      <p className='usernameInComment'>{props.username}</p>
      </div>

      <form onSubmit={(event)=>handleCommentSubmit(event)}>
        <textarea className='input inputComment' type='text' maxLength={200} rows={5} cols={40}name='commentInput' placeholder={props.placeholder}/>
        <button className='submitButton' type="submit">Submit</button>
      </form>
      
    </div>
  )
}

export default Comment