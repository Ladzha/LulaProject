import express from 'express';
import { getAllUsersData, getUserData, getNewUserData, updateUserData, deleteUserData } from '../controller/userController.js'

export const userRouter = express.Router();
userRouter.get('/users', getAllUsersData)
userRouter.get('/users/:userid', getUserData)
userRouter.post('/users/register', getNewUserData)
userRouter.put('/users/update/:userid', updateUserData)
userRouter.delete('/users/delete/:userid', deleteUserData)
// userRouter.post('/users/login/:username', getLoginUserData)
