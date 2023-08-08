import {db} from '../config/db.js';

//GET ALL RECORDS FROM DATABASE
export const getAllAudios  = async ()=>{
    try {
        const audioList = await db('audios')
        .select('*')
        .returning(["recordid", "userid", "recordname", "recordlink", "duration", "created", "rating", "likes", "dislikes"])
        console.log("audioList=>",  audioList)
        return audioList;       
    } catch (error) {
        console.log(error);
        throw new Error(error.message);    
    }
}

//GET RECORD FROM DATABASE BY ID
export const getAudioById = async (recordid)=>{
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
        .returning(["recordid", "userid", "recordname", "recordlink", "duration", "created", "rating", "likes", "dislikes"])
        console.log("audioList=>",  audioList)
        return audioList;       
    } catch (error) {
        console.log(error);
        throw new Error(error.message);    
    }
}

//ADD AUDIO
export const addAudio = ({userid, recordname, recordlink, duration}) => {
    return db('audios')
    .insert ({userid, recordname, recordlink, duration})
    .returning(["recordid", "userid", "recordname", "recordlink", "duration", "created", "rating", "likes", "dislikes"])
}

//UPDATE AUDIO
export const updateAudio = ({recordname, likes, dislikes, rating}, recordid) => {
    return db('audios')
    .where('recordid', recordid)
    .update({recordname, likes, dislikes, rating})
    .returning(["recordid", "userid", "recordname", "recordlink", "duration", "created", "rating", "likes", "dislikes"])
}
  
  //DELETE AUDIO
  export const deleteAudio = (recordid) => {
    return db('audios')
    .where('recordid', recordid)
    .del()
    .returning(["recordid", "userid", "recordname", "recordlink", "duration", "created", "rating", "likes", "dislikes"])
  }
