import {db} from '../config/db.js';

export const getAllImg  = async ()=>{
    try {
        const imgList = await db('img')
        .select('*')
        .returning(["imgid", "imagename", "imagelink", "sectionid"])
        console.log("imgList=>",  imgList)
        return imgList;
        
    } catch (error) {
        console.log(error);
        throw new Error(error.message);    
    }
}

//GET IMG BY ID
export const getImgById = async (imgid)=>{
    try {
        const img = await db('img')
        .select('*')
        .where('imgid', imgid)
        return img;      

    } catch (error) {
        console.log(error); 
        throw new Error(error.message);    
    }
}

//ADD IMAGE
export const addImg = ({userid, recordid, imgtext, created, updated}) => {
    return db('imgs')
    .insert ({userid, recordid, imgtext, created, updated})
    .returning(["imgid", "userid", "recordid", "imgtext", "created", "updated"])
  }

//UPDATE IMAGE
export const updateImg = ({imgtext, updated}, imgid) => {
    return db('imgs')
    .update({imgtext, updated})
    .where('imgid', imgid)
    .returning(["imgid", "userid", "recordid", "imgtext", "created", "updated"])
  }
  
  //DELETE IMAGE
  export const deleteImg = (imgid) => {
    return db('imgs')
    .where('imgid', imgid)
    .del()
    .returning(["imgid", "userid", "recordid", "imgtext", "created", "updated "])
  }
