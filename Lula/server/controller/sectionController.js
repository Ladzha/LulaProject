import { getAllSection, getSectionById, addSection, updateSection, deleteSection } from '../models/sectionModel.js';

//GET ALL SECTIONS
export const getAllSectionData = async(request, response)=>{
    try {
        const sectionList = await getAllSection();
        response.json(sectionList)           
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to fetch sections.'})
        }
}

//GET SECTION BY ID
export const getSectionData= async(request, response)=>{
    const sectionid = request.params.sectionid;
    try {
        const section = await getSectionById(sectionid);
        if(section){
            response.json(section);
        }else{
            response.status(404).json({ msg: 'Section not found.' });
        }               
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to fetch section.'})
        }
}

//ADD SECTION
export const getNewSectionData = async(request, response)=>{
    const sectionname = request.body.sectionname;

    try {
        const section = await addSection({sectionname})
        response.json(section)
            
        } catch (error) {
            console.log(error)
            response.status(404).json({msg: error.message})
        }
}

//UPDATE SECTION
export const updateSectionData = async(request, response)=>{
    const sectionid = request.params.sectionid;

    const sectionname = request.body.sectionname;

    try {
        const section = await updateSection({sectionname}, sectionid)
        response.json(section)
            
        } catch (error) {
            console.log(error)
            response.status(404).json({msg: error.message}) 
        }
}

//DELETE SECTION
export const deleteSectionData = async(request, response)=>{
    const sectionid = request.params.sectionid;
    try {
        await deleteSection(sectionid);
        response.json({ msg: 'Section deleted successfully.'});
            
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to delete section.' });
        }
}