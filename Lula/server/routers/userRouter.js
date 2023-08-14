import express from 'express';
import { getAllUsersController, getUserController, registerController, loginController, updateUserController, deleteUserController } from '../controller/userController.js'
import { authMiddleware } from '../middleware/authMiddleware.js'

export const userRouter = express.Router();
userRouter.get('/users', getAllUsersController) 
userRouter.get('/users/:userid', getUserController)

userRouter.post('/users/register', registerController)
userRouter.post('/users/login/', loginController)

userRouter.put('/users/update/:userid', updateUserController)
userRouter.delete('/users/delete/:userid', deleteUserController)
