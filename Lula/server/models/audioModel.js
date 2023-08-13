import {db} from '../config/db.js';

//GET ALL RECORDS FROM DATABASE
export const getAllAudios  = async ()=>{
    try {
        const audioList = await db('audios')
        .select('*')
        .returning(["recordid", "userid", "name", "link", "created", "rating", "likes", "dislikes"])
        console.log("audioList=>",  audioList)
        return audioList;       
    } catch (error) {
        console.log(error);
        throw new Error(error.message);    
    }
}

//GET RECORD FROM DATABASE BY ID
export const getAudio = async (recordid)=>{
    try {
        const audio = await db('audios')
        .select('*')
        .where('recordid', recordid)
        .first()
        return audio;      

    } catch (error) {
        console.log(error);
        throw new Error(error.message);    
    }
}

//GET ALL USERS RECORDS FROM DATABASE BY USERID
export const getAudioByUserId = async (userid)=>{
    try {
        const audioList = await db('audios')
        .select('*')
        .where('userid', userid)
        .returning(["recordid", "userid", "name", "link", "created", "rating", "likes", "dislikes"])
        console.log("audioList=>",  audioList)
        return audioList;       
    } catch (error) {
        console.log(error);
        throw new Error(error.message);    
    }
}

//ADD AUDIO
export const addAudio = ({userid, name, link, duration}) => {
    return db('audios')
    .insert ({userid, name, link, duration})
    .returning(["recordid", "userid", "name", "link", "created", "rating", "likes", "dislikes"])
}

//UPDATE AUDIO
export const updateAudio = ({name, likes, dislikes, rating}, recordid) => {
    return db('audios')
    .where('recordid', recordid)
    .update({name, likes, dislikes, rating})
    .returning(["recordid", "userid", "name", "link", "created", "rating", "likes", "dislikes"])
}
  
  //DELETE AUDIO
  export const deleteAudio = (recordid) => {
    return db('audios')
    .where('recordid', recordid)
    .del()
    .returning(["recordid", "userid", "name", "link", "created", "rating", "likes", "dislikes"])
  }
