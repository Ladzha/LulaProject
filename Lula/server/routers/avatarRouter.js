import express from 'express';
import { getAllAvatarsData, getAvatarData, getNewAvatarData, deleteAvatarData } from '../controller/avatarController.js';

export const avatarRouter = express.Router();

avatarRouter.get('/avatar', getAllAvatarsData);
avatarRouter.get('/avatar/:avatarid', getAvatarData);
avatarRouter.post('/avatar/post', getNewAvatarData);
avatarRouter.delete('/avatar/delete/:avatarid', deleteAvatarData);
