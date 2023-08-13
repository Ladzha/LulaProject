import {db} from '../config/db.js';

//GET ALL USERS FROM DATABASE
export const getAllUsers  = async ()=>{
    try {
        const usersList = await db('users')
        .select(["userid", "username", "firstname", "lastname", "email", "password", "created", "avatarid", "about", "role"])
        .returning(["userid", "username", "firstname", "lastname", "email", "password", "created", "avatarid", "about", "role"])
        console.log("user=>",  usersList)
        return usersList;      
    } catch (error) {
        console.log(error);
        throw new Error(error.message);    
    }
}

//GET USER FROM DATABASE BY USERNAME
export const getUser = async (userid)=>{
    try {
        const user = await db('users')
        .select(["userid", "username", "firstname", "lastname", "email", "password", "created", "avatarid", "about", "role"])
        .where('userid', userid)
        .first()
        return user;      

    } catch (error) {
        console.log(error);
        throw new Error(error.message);    
    }
}

//ADD NEW USER 
export const addUser = async ( username, firstname, lastname, email, hash)=>{
    try {
        const newUser = await db('users')
        // .where('userid', userid)
        .insert({username, firstname, lastname, email, password: hash, created: new Date()})
        .returning(["userid", "username", "firstname", "lastname", "email", "password", "created", "avatarid", "about", "role"]);
        // console.log("New user", newUser);
        return newUser;      
    } catch (error) {
        console.log(error);
        throw new Error(error.message);    
    }
}

//UPDATE NEW USER 
export const updateUser = async (userid, username, firstname, lastname, email, hashPassword)=>{
    try {
        const updatedUser = await db('users')
        .where('userid', userid)
        .update({username, firstname, lastname, password:hashPassword},["*"]);
        return updatedUser;     

    } catch (error) {
        console.log(error);
        throw new Error(error.message);    
    }
}

//DELETE USER 
export const deleteUser = async (userid)=>{ 
    try {
        const deleteUser = await db('users')
        .where('userid', userid)
        .del();
        return deleteUser;      
    } catch (error) {
        console.log(error);
        throw new Error(error.message);    
    }
}
