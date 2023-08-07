import {getAllComments, getCommentById, addComment, updateComment, deleteComment} from '../models/commentModel.js'

//GET ALL COMMENTS
export const getAllCommentData = async(request, response)=>{
    try {
        const commentList = await getAllComments();
        response.json(commentList)           
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to fetch comments.'})
        }
}

//GET COMMENT BY ID
export const getCommentData= async(request, response)=>{
    const commentid = request.params.commentid;
    try {
        const comment = await getCommentById(commentid);
        if(comment){
            response.json(comment);
        }else{
            response.status(404).json({ msg: 'Comment not found.' });
        }               
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to fetch comment.'})
        }
}

//ADD COMMENT
export const getNewCommentData = async(request, response)=>{
    const userid = request.body.userid;
    const recordid = request.body.recordid;
    const commenttext = request.body.commenttext;
    const created = request.body.created;
    const updated = request.body.updated;

    try {
        const rows = await addComment(userid, recordid, commenttext, created, updated)
        response.json(rows)
            
        } catch (error) {
            console.log(error)
            response.status(404).json({msg: error.message})
        }
}

//UPDATE COMMENT
export const updateCommentData = async(request, response)=>{
    const commentid = request.params.commentid;

    const commenttext = request.body.commenttext;
    const updated = request.body.updated;

    try {
        const user = await updateComment(commentid, commenttext, updated)
        response.json(user)
            
        } catch (error) {
            console.log(error)
            response.status(404).json({msg: error.message}) 
        }
}

//DELETE COMMENT
export const deleteCommentData = async(request, response)=>{
    const commentid = request.params.commentid;
    try {
        await deleteComment(commentid);
        response.json({ msg: 'Comment deleted successfully.'});
            
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to delete comment.' });
        }
}