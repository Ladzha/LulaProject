import {db} from '../config/db.js';

export const getAllAvatars  = async ()=>{
    try {
        const avatarList = await db('avatars')
        .select('*')
        .returning(["avatarid", "userid", "imagename", "imagelink"])
        console.log("avatarList=>",  avatarList)
        return avatarList;
        
    } catch (error) {
        console.log(error);
        throw new Error(error.message);    
    }
}

//GET AVATAR BY ID
export const getAvatarById = async (avatarid)=>{
    try {
        const avatar = await db('avatars')
        .select('*')
        .where('avatarid', avatarid)
        return avatar;      

    } catch (error) {
        console.log(error); 
        throw new Error(error.message);    
    }
}

//ADD AVATAR
export const addAvatar = ({userid, recordid, avatartext, created, updated}) => {
    return db('avatars')
    .insert ({userid, recordid, avatartext, created, updated})
    .returning(["avatarid", "userid", "recordid", "avatartext", "created", "updated"])
  }

//UPDATE AVATAR
export const updateAvatar = ({avatartext, updated}, avatarid) => {
    return db('avatars')
    .update({avatartext, updated})
    .where('avatarid', avatarid)
    .returning(["avatarid", "userid", "recordid", "avatartext", "created", "updated"])
  }
  
  //DELETE AVATAR
  export const deleteAvatar = (avatarid) => {
    return db('avatars')
    .where('avatarid', avatarid)
    .del()
    .returning(["avatarid", "userid", "recordid", "avatartext", "created", "updated "])
  }
