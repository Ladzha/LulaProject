import {db} from '../config/db.js';

//GET ALL COMMENTS FROM DATABSE
export const getAllComments  = async ()=>{
    try {
        const commentList = await db('comments')
        .select('*')
        .returning(["commentid", "userid", "recordid", "commenttext", "created", "updated"])
        console.log("commentList=>",  commentList)
        return commentList;
        
    } catch (error) {
        console.log(error);
        throw new Error(error.message);    
    }
}

//GET COMMENT FROM DATABASE BY ID
export const getCommentById = async (commentid)=>{
    try {
        const comment = await db('comments')
        .select('*')
        .where('commentid', commentid)
        return comment;      
    } catch (error) {
        console.log(error);
        throw new Error(error.message);    
    }
}

//ADD COMMENT
export const addComment = ({commentid, userid, recordid, commenttext, created, updated}) => {
    return db('comments')
    .insert ({commentid, recordid, commenttext, created, updated})
    .returning(["commentid", "userid", "recordid", "commenttext", "created", "updated"])
  }

//UPDATE COMMENT
export const updateComment = ({commenttext, updated}, commentid) => {
    return db('comments')
    .update({commenttext, updated})
    .where('commentid', commentid)
    .returning(["commentid", "userid", "recordid", "commenttext", "created", "updated"])
  }
  
  //DELETE COMMENT
  export const deleteComment = (commentid) => {
    return db('comments')
    .where('commentid', commentid)
    .del()
    .returning(["commentid", "userid", "recordid", "commenttext", "created", "updated "])
  }
