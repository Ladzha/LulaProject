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

//GET ALL USERS IMG FROM DATABASE BY USERID
export const getImgBySectionId = async (sectionid)=>{
    try {
        const imgList = await db('img')
        .select('*')
        .where('sectionid', sectionid)
        .returning(["imgid", "imagename", "imagelink", "sectionid"])
        console.log("imgList=>",  imgList)
        return imgList;       
    } catch (error) {
        console.log(error);
        throw new Error(error.message);    
    }
}

//ADD IMAGE
export const addImg = ({imagename, imagelink, sectionid}) => {
    return db('img')
    .insert ({imagename, imagelink, sectionid})
    .returning(["imgid", "imagename", "imagelink", "sectionid"])
  }

//UPDATE IMAGE
export const updateImg = ({imagename, sectionid}, imgid) => {
    return db('img')
    .update({imagename, sectionid})
    .where('imgid', imgid)
    .returning(["imgid", "imagename", "imagelink", "sectionid"])
  }
  
  //DELETE IMAGE
  export const deleteImg = (imgid) => {
    return db('img')
    .where('imgid', imgid)
    .del()
    .returning(["imgid", "imagename", "imagelink", "sectionid"])
  }