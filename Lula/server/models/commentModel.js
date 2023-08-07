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
export const addComment = ({userid, recordid, commenttext}) => {
    return db('comments')
    .insert ({userid, recordid, commenttext, created: new Date()})
    .returning(["commentid", "userid", "recordid", "commenttext", "created", "updated"])
  }

//UPDATE COMMENT
export const updateComment = ({commenttext, updated}, commentid) => {
    return db('comments')
    .where('commentid', commentid)
    .update({commenttext, updated: new Date()})
    .returning(["commentid", "userid", "recordid", "commenttext", "created", "updated"])
  }
  
  //DELETE COMMENT
  export const deleteComment = (commentid) => {
    return db('comments')
    .where('commentid', commentid)
    .del()
    .returning(["commentid", "userid", "recordid", "commenttext", "created", "updated "])
  }
