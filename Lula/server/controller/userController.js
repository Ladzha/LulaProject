import {getAllUsers, getUserByUsername, addNewUser, updateUser, deleteUser} from '../models/userModel.js'
import bcrypt from 'bcrypt';


//GET ALL USERS
export const getAllUsersData = async(request, response)=>{
    try {
        const usersList = await getAllUsers();
        response.json(usersList)           
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to fetch users.'})
        }
}

//FIND USER
export const getUserData= async(request, response)=>{
    const username = request.params.username;
    try {
        const user = await getUserByUsername(username);
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
export const getNewUserData = async(request, response)=>{
    const username = request.body.username;
    const firstname = request.body.firstname;
    const lastname = request.body.lastname;
    const email = request.body.email;
    const password = request.body.password +''; //to make it string
    //hide password
    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(password, salt)

    try {
        const rows = await addNewUser(username, firstname, lastname, email, hashPassword)
        response.json(rows)
            
        } catch (error) {
            console.log(error)
            response.status(404).json({msg: error.message})
        }
}

//UPDATE USER
export const updateUserData = async(request, response)=>{
    const uname = request.params.uname
    const username = request.body.username;
    const firstname = request.body.firstname;
    const lastname = request.body.lastname;
    const email = request.body.email;
    const password = request.body.password +''; //to make it string
    //hide password
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    try {
        const user = await updateUser(uname, username, firstname, lastname, email, hashPassword)
        response.json(user)
            
        } catch (error) {
            console.log(error)
            response.status(404).json({msg: error.message}) 
        }
}

//DELETE USER
export const deleteUserData = async(request, response)=>{
    const username = request.params.username;
    try {
        await deleteUser(username);
        response.json({ msg: 'User deleted successfully.'});
            
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to delete user.' });
        }
}