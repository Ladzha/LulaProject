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
export const addAvatar = ({userid, imagename, imagelink}) => {
    return db('avatars')
    .insert ({userid, imagename, imagelink})
    .returning(["avatarid", "userid", "imagename", "imagelink"])
  }
  
  //DELETE AVATAR
  export const deleteAvatar = (avatarid) => {
    return db('avatars')
    .where('avatarid', avatarid)
    .del()
    .returning(["avatarid", "userid", "imagename", "imagelink"])
  }
