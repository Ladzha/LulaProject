import {getAllAudios, getAudioById, getAudioByUserId, addAudio, updateAudio, deleteAudio} from '../models/audioModel.js'

//GET ALL AUDIOS
export const getAllAudiosData = async(request, response)=>{
    try {
        const audioList = await getAllAudios();
        response.json(audioList)           
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to fetch audios.'})
        }
}

//GET AUDIO BY ID
export const getAudioData= async(request, response)=>{
    const recordid = request.params.recordid;
    try {
        const audio = await getAudioById(recordid);
        if(audio){
            response.json(audio);
        }else{
            response.status(404).json({ msg: 'Audio not found.' });
        }               
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to fetch audio.'})
        }
}

//GET LIST OF AUDIOS BY USERID
export const getUserAudioData= async(request, response)=>{
    const userid = request.params.userid;
    try {
        const audios = await getAudioByUserId(userid);
        if(audios){
            response.json(audios);
        }else{
            response.status(404).json({ msg: 'Record not found.' });
        }               
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to fetch record.'})
        }
}

//ADD AUDIO
export const getNewAudioData = async(request, response)=>{
    const userid = request.body.userid ;
    const name = request.body.name;
    const link = request.body.link ;
    const duration = request.body.duration;
    try {
        const audio = await addAudio({userid, name, link, duration})
        response.json(audio)
            
        } catch (error) {
            console.log(error)
            response.status(404).json({msg: error.message})
        }
}

//UPDATE AUDIO
export const updateAudioData = async(request, response)=>{
    const recordid = request.params.recordid

    const name = request.body.name;
    const rating = request.body.rating;
    const likes = request.body.likes;
    const dislikes = request.body.dislikes;

    try {
        const audio = await updateAudio({name, likes, dislikes, rating}, recordid)
        response.json(audio)
            
        } catch (error) {
            console.log(error)
            response.status(404).json({msg: error.message}) 
        }
}

//DELETE AUDIO
export const deleteAudioData = async(request, response)=>{
    const recordid = request.params.recordid;
    try {
        await deleteAudio(recordid);
        response.json({ msg: 'Record deleted successfully.'});
            
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to delete record.' });
        }
}