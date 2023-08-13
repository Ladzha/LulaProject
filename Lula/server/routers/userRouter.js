import express from 'express';
import { getAllUsersController, getUserController, addUserController, updateUserController, deleteUserController } from '../controller/userController.js'

export const userRouter = express.Router();
userRouter.get('/users', getAllUsersController)
userRouter.get('/users/:userid', getUserController)
userRouter.post('/users/register', addUserController)
userRouter.put('/users/update/:userid', updateUserController)
userRouter.delete('/users/delete/:userid', deleteUserController)
// userRouter.post('/users/login/:username', getLoginUserData)
