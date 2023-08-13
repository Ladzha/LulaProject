import {getAllUsers, addUser, updateUser, deleteUser, getUser} from '../models/userModel.js'
import bcrypt from 'bcrypt';
import jwt  from 'jsonwebtoken';


//GET ALL USERS
export const getAllUsersController = async(request, response)=>{
    try {
        const usersList = await getAllUsers();
        response.json(usersList)           
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to fetch users.'})
        }
}

//FIND USER
export const getUserController= async(request, response)=>{
    const userid = request.params.userid;
    try {
        const user = await getUser(userid);
        if(user){
            response.json(user);
        }else{
            res.status(404).json({ msg: 'User not found.' });
        }               
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to fetch user.'})
        }
}

//ADD USER
export const addUserController = async(request, response)=>{
    const username = request.body.username;
    const firstname = request.body.firstname;
    const lastname = request.body.lastname;
    const email = request.body.email;
    const password = request.body.password +''; //to make it string
    // const role = request.body.role; //get user role
    
    // const condidate = await getAllUsers({where: {username, email}})
    // if(condidate){
    //     return next(ApiError.badRequest('Username already exist'))
    // }    

    //hide password
    const salt = bcrypt.genSaltSync(5)
    const hashPassword = bcrypt.hashSync(password, salt)

    try {
        const rows = await addUser(username, firstname, lastname, email, hashPassword)
        response.json(rows)
        console.log(rows.username);
        //Create token
        // const jwt = jwt.sign({userid:userid, email:email})
            
        } catch (error) {
            console.log(error)
            response.status(404).json({msg: error.message})
        }
}

//UPDATE USER
export const updateUserController = async(request, response)=>{
    const userid = request.params.userid
    const username = request.body.username;
    const firstname = request.body.firstname;
    const lastname = request.body.lastname;
    const email = request.body.email;
    const password = request.body.password +''; //to make it string
    //hide password
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    try {
        const user = await updateUser(userid, username, firstname, lastname, email, hashPassword)
        response.json(user)
            
        } catch (error) {
            console.log(error)
            response.status(404).json({msg: error.message}) 
        }
}

//DELETE USER
export const deleteUserController = async(request, response)=>{
    const userid = request.params.userid;
    try {
        await deleteUser(username);
        response.json({ msg: 'User deleted successfully.'});
            
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to delete user.' });
        }
} 