import express from 'express';
import { getAllCommentData, getCommentData, getUserCommentData,  getNewCommentData, updateCommentData, deleteCommentData } from '../controller/commentController.js';


export const commentRouter = express.Router();

commentRouter.get('/comment', getAllCommentData);
commentRouter.get('/comment/:commentid', getCommentData);

commentRouter.get('/comment/user/:userid', getUserCommentData);

commentRouter.post('/comment/post', getNewCommentData);
commentRouter.put('/comment/update/:commentid', updateCommentData);
commentRouter.delete('/comment/delete/:commentid', deleteCommentData);

