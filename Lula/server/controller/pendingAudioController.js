
import {getAllPendingAudios, getPendingAudioById, addPendingAudio, deletePendingAudio} from '../models/pendingAudioModel.js'

//GET ALL USERS
export const getAllPendingAudiosData = async(request, response)=>{
    try {
        const pendingAudioList = await getAllPendingAudios();
        response.json(pendingAudioList)           
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to fetch audios.'})
        }
}

//GET PENDINGAUDIO BY ID
export const getPendingAudioData= async(request, response)=>{
    const recordid = request.params.recordid ;
    try {
        const pendingAudio = await getPendingAudioById(recordid);
        if(pendingAudio){
            response.json(pendingAudio);
        }else{
            response.status(404).json({ msg: 'Record not found.' });
        }               
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to fetch record.'})
        }
}

//ADD AUDIO
export const getNewPendingAudioData = async(request, response)=>{
    const userid = request.body.userid ;
    const recordname = request.body.recordname;
    const recordlink = request.body.recordlink ;
    const recordduration = request.body.recordduration;
    const created = request.body.created;

    try {
        const audio = await addPendingAudio(userid, recordname, recordlink, recordduration, created)
        response.json(audio)
            
        } catch (error) {
            console.log(error)
            response.status(404).json({msg: error.message})
        }
}

//DELETE AUDIO
export const deletePendingAudioData = async(request, response)=>{
    const recordid = request.params.recordid;
    try {
        await deletePendingAudio(recordid);
        response.json({ msg: 'Record deleted successfully.'});
            
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to delete record.' });
        }
}