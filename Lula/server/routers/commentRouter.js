import express from 'express';
import { getAllCommentController, getCommentController, getUserCommentController, getCommentByAudioIdController,  addCommentController, updateCommentController, deleteCommentController } from '../controller/commentController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { roleMiddleware } from '../middleware/roleMiddleware.js';

export const commentRouter = express.Router();

commentRouter.get('/comment', getAllCommentController);
commentRouter.get('/comment/:commentid', getCommentController);

commentRouter.get('/comment/user/:userid', getUserCommentController);

commentRouter.get('/comment/audio/:recordid', getCommentByAudioIdController);

commentRouter.post('/comment/post', authMiddleware, addCommentController); //only for logged in users
commentRouter.put('/comment/update/:commentid', authMiddleware, updateCommentController); //only for logged in users
commentRouter.delete('/comment/delete/:commentid', authMiddleware, deleteCommentController); //only for logged in users and admin

