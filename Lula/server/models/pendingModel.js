import {db} from '../config/db.js';

export const getAllPending = async () => {
    try {
        const pendingAudioList = await db('pending')
            .select('*')
            .returning(["recordid", "userid", "name", "link", "created"]);
        console.log("pendingAudioList =>", pendingAudioList);
        return pendingAudioList;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

//GET RECORD FROM DATABASE BY ID
export const getPending = async (recordid)=>{
    try {
        const audio = await db('pending')
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
export const addPending = ({userid, name, link, duration}) => {
    return db('pending')
    .insert ({userid, name, link, duration})
    .returning(["recordid", "userid", "name", "link", "created"])
  }

  //DELETE PENDING AUDIO
  export const deletePending = (recordid) => {
    return db('pending')
    .where('recordid', recordid)
    .del()
    .returning(["recordid", "userid", "name", "link", "created"])
  }
