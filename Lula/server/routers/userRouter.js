import express from 'express';
import { getAllUsersData, getUserData, getNewUserData, updateUserData, deleteUserData } from '../controller/userController.js'

export const userRouter = express.Router();
userRouter.get('/users', getAllUsersData)
userRouter.get('/users/:username', getUserData)
userRouter.post('/users/register', getNewUserData)
userRouter.put('/users/update/:uname', updateUserData)
userRouter.delete('/users/delete/:username', deleteUserData)
// userRouter.post('/users/login/:username', getLoginUserData)
