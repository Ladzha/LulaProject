import express from 'express';
import { getAllCommentData, getCommentData, getNewCommentData, updateCommentData, deleteCommentData } from '../controller/commentController.js';


export const commentRouter = express.Router();

commentRouter.get('/comments', getAllCommentData);
commentRouter.get('/comments/:commentid', getCommentData);

commentRouter.post('/comments/post', getNewCommentData);
commentRouter.put('/comments/update/:commentid', updateCommentData);
commentRouter.delete('/comments/delete/:commentid', deleteCommentData);

