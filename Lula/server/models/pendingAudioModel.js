import {db} from '../config/db.js';

export const getAllPendingAudios = async () => {
    try {
        const pendingAudioList = await db('pendingaudios')
            .select('*')
            .returning(["recordid", "userid", "name", "link", "duration", "created"]);
        console.log("pendingAudioList =>", pendingAudioList);
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


//ADD PENDING AUDIO
export const addPendingAudio = ({userid, name, link, duration}) => {
    return db('pendingaudios')
    .insert ({userid, name, link, duration})
    .returning(["recordid", "userid", "name", "link", "duration", "created"])
  }

  //DELETE PENDING AUDIO
  export const deletePendingAudio = (recordid) => {
    return db('pendingaudios')
    .where('recordid', recordid)
    .del()
    .returning(["recordid", "userid", "name", "link", "duration", "created"])
  }
