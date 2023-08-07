import {db} from '../config/db.js';

//GET ALL RECORDS FROM DATABASE
export const getAllAudios  = async ()=>{
    try {
        const audioList = await db('audios')
        .select('*')
        .returning(["recordid", "userid", "recordname", "recordLink", "recordDuration", "created", "recordRating", "recordLikes", "recordDislikes"])
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
        const audios = await db('audios')
        .select('*')
        .where('userid', userid)
        .returning(["recordid", "userid", "recordname", "recordLink", "recordDuration", "created", "recordRating", "recordLikes", "recordDislikes"])
        return audios;      

    } catch (error) {
        console.log(error); 
        throw new Error(error.message);    
    }
}

//ADD AUDIO
export const addAudio = ({userid, recordname, recordLink, recordDuration, created, recordRating, recordLikes, recordDislikes}) => {
    return db('audios')
    .insert ({userid, recordname, recordLink, recordDuration, created, recordRating, recordLikes, recordDislikes})
    .returning(["recordid", "userid", "recordname", "recordLink", "recordDuration", "created", "recordRating", "recordLikes", "recordDislikes"])
  }

//UPDATE AUDIO
export const updateAudio = ({recordname, recordRating, recordLikes, recordDislikes}, audioid) => {
    return db('audios')
    .where('audioid', audioid)
    .update({recordname, recordRating, recordLikes, recordDislikes})
    .returning(["recordid", "userid", "recordname", "recordLink", "recordDuration", "created", "recordRating", "recordLikes", "recordDislikes"])
  }
  
  //DELETE AUDIO
  export const deleteAudio = (audioid) => {
    return db('audios')
    .where('audioid', audioid)
    .del()
    .returning(["recordid", "userid", "recordname", "recordLink", "recordDuration", "created", "recordRating", "recordLikes", "recordDislikes"])
  }
