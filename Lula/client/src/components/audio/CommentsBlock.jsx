import React from 'react';
import {useState, useEffect} from 'react';
import avatar from '../../img/avatar13.jpg';
import CommentForm from './CommentForm';
import CommentElement from './CommentElement';
import { CommentService } from '../../services/comment.service.js';


const CommentsBlock = ({recordid}) => {

    const [commentForm, setCommentForm] = useState(false)
    const [comments, setComments]=useState([]);


    useEffect(() => {
      const fetchData = async () => {
        try {
          const commentsData = await CommentService.getByAudioId(recordid)
          setComments(commentsData);    
          } catch (error) {
              console.log(error);
          }
      };
            fetchData();
    }, []);

    const handleComment = ()=>{
        setCommentForm(!commentForm)
    }

  return (
    <div className='listComment'> 
    
    {comments.length>0 && comments.map((comment, index)=> { 
      return(
        <div key={index}>
        <CommentElement 
        id={comment.commentid} userid={comment.userid} text={comment.text} 
        created={new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
      }).format(new Date(comment.created))}/>
        </div>)})}      

    <button className='submitButton addButton' onClick={handleComment}>
    {commentForm? 'Hide form' : 'Leave a comment'}</button>
    {commentForm && <CommentForm recordid={recordid} userid={1} setCommentForm={setCommentForm}/>}

    </div>
  )
}

export default CommentsBlock