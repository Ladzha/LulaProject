
import {getAllPendingAudios, getPendingAudioById, addPendingAudio, deletePendingAudio} from '../models/pendingAudioModel.js'

//GET ALL AUDIO
export const getAllPendingAudiosData = async (request, response) => {
    try {
        const pendingAudioList = await getAllPendingAudios();
        response.json(pendingAudioList);
    } catch (error) {
        console.log(error);
        response.status(500).json({ msg: 'Failed to fetch pending audios.' });
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
    const name = request.body.name;
    const link = request.body.link ;
    const duration = request.body.duration;
    try {
        const audio = await addPendingAudio({userid, name, link, duration})
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