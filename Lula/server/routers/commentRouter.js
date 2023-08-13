import express from 'express';
import { getAllCommentController, getCommentController, getUserCommentController,  addCommentController, updateCommentController, deleteCommentController } from '../controller/commentController.js';


export const commentRouter = express.Router();

commentRouter.get('/comment', getAllCommentController);
commentRouter.get('/comment/:commentid', getCommentController);

commentRouter.get('/comment/user/:userid', getUserCommentController);

commentRouter.post('/comment/post', addCommentController);
commentRouter.put('/comment/update/:commentid', updateCommentController);
commentRouter.delete('/comment/delete/:commentid', deleteCommentController);

