import {db} from '../config/db.js';

//GET ALL USERS FROM DATABASE
export const getAllUsers  = async ()=>{
    try {
        const usersList = await db('users')
        .select(["userid", "username", "firstname", "lastname", "email", "created"])
        .returning(["userid", "username", "firstname", "lastname", "email", "created"])
        console.log("user=>",  usersList)
        return usersList;      
    } catch (error) {
        console.log(error);
        throw new Error(error.message);    
    }
}

//GET USER FROM DATABASE BY USERNAME
export const getUserByUsername = async (username)=>{
    try {
        const user = await db('users')
        .select(["userid", "username", "firstname", "lastname", "email", "password"])
        .where('username', username)
        .first()
        return user;      

    } catch (error) {
        console.log(error);
        throw new Error(error.message);    
    }
}

//ADD NEW USER 
export const addNewUser = async (username, firstname, lastname, email, hash)=>{
    try {
        const newUser = await db('users')
        .where('username', username)
        .insert({username, firstname, lastname, email, password: hash, created: new Date()})
        .returning(["userid", "username", "firstname", "lastname", "email", "password", "created"]);
        // console.log("New user", newUser);
        return newUser;      
    } catch (error) {
        console.log(error);
        throw new Error(error.message);    
    }
}

//UPDATE NEW USER 
export const updateUser = async (uname,username, firstname, lastname, email, hashPassword)=>{
    try {
        const updatedUser = await db('users')
        .where('username', uname)
        .update({username, firstname, lastname, password:hashPassword},["*"]);
        return updatedUser;     

    } catch (error) {
        console.log(error);
        throw new Error(error.message);    
    }
}

//DELETE USER 
export const deleteUser = async (username)=>{ 
    try {
        const deleteUser = await db('users')
        .where('username', username)
        .del();
        return deleteUser;      
    } catch (error) {
        console.log(error);
        throw new Error(error.message);    
    }
}
