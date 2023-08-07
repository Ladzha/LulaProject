import {db} from '../config/db.js';

export const getAllPendingAudios  = async ()=>{
    try {
        const pendingAudioList = await db('pendingaudios')
        .select('*')
        .returning(["recordid", "userid", "recordname", "recordLink", "recordDuration", "created"])
        console.log("pendingAudioList=>",  pendingAudioList)
        return pendingAudioList;
        
    } catch (error) {
        console.log(error);
        throw new Error(error.message); 
    }
}

//GET RECORD FROM DATABASE BY ID
export const getPendingAudioById = async (recordid)=>{
    try {
        const audio = await db('pendingaudios')
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
export const getAllPendingAudioByUserId = async (userid)=>{
    try {
        const audios = await db('pendingaudios')
        .select('*')
        .where('userid', userid)
        return audios;      

    } catch (error) {
        console.log(error); 
        throw new Error(error.message);    
    }
}

//ADD PENDING AUDIO
export const addPendingAudio = ({userid, recordname, recordlink, recordduration, created}) => {
    return db('audios')
    .insert ({userid, recordname, recordlink, recordduration, created})
    .returning(["recordid", "userid", "recordname", "recordlink", "recordduration", "created"])
  }

  //DELETE PENDING AUDIO
  export const deletePendingAudio = (audioid) => {
    return db('audios')
    .where('audioid', audioid)
    .del()
    .returning(["recordid", "userid", "recordname", "recordlink", "recordduration", "created"])
  }
