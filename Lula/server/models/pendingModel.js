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


//GET ALL AUDIO WITH USER INFO
export const getPendingWithUserInfo = async (recordid) => {
    try {
      const pendingList = await db('pending')
        .select([
          'pending.*',
          'users.username as creator_username',
          'avatars.link as creator_avatar_link'
        ])
        .where('recordid', recordid)
        .leftJoin('users', 'pending.userid', 'users.userid')
        .leftJoin('avatars', 'users.avatarid', 'avatars.avatarid')
        .returning([
          'pending.recordid',
          'pending.userid',
          'pending.name',
          'pending.link',
          'pending.created',
          'pending.rating',
          'pending.likes',
          'pending.dislikes',
          'creator_username',
          'creator_avatar_link'
        ]);
      return pendingList;
    } catch (error) {
      console.log(error);
    }
  };
  