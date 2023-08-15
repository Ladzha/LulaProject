import {db} from '../config/db.js';

export const getAllImg  = async ()=>{
    try {
        const imgList = await db('img')
        .select('*')
        .returning(["imgid", "name", "link", "sectionid", "languageid"])
        console.log("imgList=>",  imgList)
        return imgList;
        
    } catch (error) {
        console.log(error);
        throw new Error(error.message);    
    }
}

//GET IMG BY ID
export const getImg = async (imgid)=>{
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



//GET ALL IMG BY SECTIONID
export const getImgBySectionId = async (sectionid)=>{
    try {
        const imgList = await db('img')
        .select('*')
        .where('sectionid', sectionid)
        .returning(["imgid", "name", "link", "sectionid", "languageid"])
        console.log("imgList=>",  imgList)
        return imgList;       
    } catch (error) {
        console.log(error);
        throw new Error(error.message);    
    }
}

//GET ALL IMG BY LANGUAGEID
export const getImgByLanguageId = async (languageid)=>{
  try {
      const imgList = await db('img')
      .select('*')
      .where('languageid', languageid)
      .returning(["imgid", "name", "link", "sectionid", "languageid"])
      console.log("imgList=>",  imgList)
      return imgList;       
  } catch (error) {
      console.log(error);
      throw new Error(error.message);    
  }
}

//ADD IMAGE
export const addImg = ({name, link, sectionid}) => {
    return db('img')
    .insert ({name, link, sectionid})
    .returning(["imgid", "name", "link", "sectionid", "languageid"])
  }

//UPDATE IMAGE
export const updateImg = ({name, sectionid}, imgid) => {
    return db('img')
    .update({name, sectionid})
    .where('imgid', imgid)
    .returning(["imgid", "name", "link", "sectionid", "languageid"])
  }
  
  //DELETE IMAGE
  export const deleteImg = (imgid) => {
    return db('img')
    .where('imgid', imgid)
    .del()
    .returning(["imgid", "name", "link", "sectionid", "languageid"])
  }


  export const getAudioAndCommentsByImgId=(id)=>{

    return db.raw(`SELECT
        audios.*,
        users.*,
        avatars.*
      
      FROM
        audios 
      JOIN
        users ON audios.userid = users.userid
      LEFT JOIN
        avatars ON users.avatarid = avatars.avatarid
      WHERE
        audios.imgid = ${id};`)

  }

