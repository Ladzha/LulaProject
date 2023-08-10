import { getAllImg, getImgById, getImgBySectionId, addImg, updateImg, deleteImg, getAudioAndCommentsByImgId } from '../models/imgModel.js';
//GET ALL IMAGES
export const getAllImgData = async(request, response)=>{
    try {
        const imgList = await getAllImg();
        response.json(imgList)           
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to fetch images.'})
        }
}

//GET IMG BY ID
export const getImgData= async(request, response)=>{
    const imgid = request.params.imgid;
    try {
        const image = await getImgById(imgid);
        if(image){
            response.json(image);
        }else{
            response.status(404).json({ msg: 'Image not found.' });
        }               
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to fetch image.'})
        }
}

//GET LIST OF IMG BY USERID
export const getSectionImgData= async(request, response)=>{
    const sectionid = request.params.sectionid;
    try {
        const img = await getImgBySectionId(sectionid);
        if(img){
            response.json(img);
        }else{
            response.status(404).json({ msg: 'Img not found.' });
        }               
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to fetch img.'})
        }
}

//ADD IMAGE
export const getNewImgData = async(request, response)=>{
    const name = request.body.name;
    const link = request.body.link;
    const sectionid = request.body.sectionid;
    try {
        const img = await addImg({name, link, sectionid})
        response.json(img)
            
        } catch (error) {
            console.log(error)
            response.status(404).json({msg: error.message})
        }
}

//UPDATE IMAGE
export const updateImgData = async(request, response)=>{
    const imgid = request.params.recordid

    const name = request.body.name;
    const link = request.body.link;
    const sectionid = request.body.sectionid;

    try {
        const img = await updateImg({imgid, name, link, sectionid})
        response.json(img)
            
        } catch (error) {
            console.log(error)
            response.status(404).json({msg: error.message}) 
        }
}

//DELETE IMAGE
export const deleteImgData = async(request, response)=>{
    const imgid = request.params.imgid;
    try {
        await deleteImg(imgid);
        response.json({ msg: 'Img deleted successfully.'});
            
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to delete img.' });
        }
}

export const getData = async(request, response)=>{
    console.log(request.body);
    const data = await getAudioAndCommentsByImgId(request.body.imgid)
    response.json(data.rows)

}