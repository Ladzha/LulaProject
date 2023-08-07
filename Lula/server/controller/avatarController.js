import { getAllAvatars, getAvatarById, addAvatar, deleteAvatar} from '../models/avatarModel.js';

//GET ALL AVATARS
export const getAllAvatarsData = async(request, response)=>{
    try {
        const avatarList = await getAllAvatars();
        response.json(avatarList)           
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to fetch avatars.'})
        }
}

//GET AVATAR BY ID
export const getAvatarData= async(request, response)=>{
    const avatarid = request.params.avatarid;
    try {
        const avatar = await getAvatarById(avatarid);
        if(avatar){
            response.json(avatar);
        }else{
            response.status(404).json({ msg: 'Avatar not found.' });
        }               
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to fetch avatar.'})
        }
}

//ADD AVATAR
export const getNewAvatarData = async(request, response)=>{
    const userid = request.body.userid;
    const imagename = request.body.imagename;
    const imagelink = request.body.imagelink;
    try {
        const avatar = await addAvatar(userid, imagename, imagelink)
        response.json(avatar)
            
        } catch (error) {
            console.log(error)
            response.status(404).json({msg: error.message})
        }
}

//DELETE AVATAR
export const deleteAvatarData = async(request, response)=>{
    const avatarid = request.params.avatarid;
    try {
        await deleteAvatar(avatarid);
        response.json({ msg: 'Avatar deleted successfully.'});
            
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to delete avatar.' });
        }
}