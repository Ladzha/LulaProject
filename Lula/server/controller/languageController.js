import { getAllLanguage, getLanguageById, addLanguage, deleteLanguage } from '../models/languageModel.js';

//GET ALL LANGUAGES
export const getAllLanguagesData = async(request, response)=>{
    try {
        const languageList = await getAllLanguage();
        response.json(languageList)           
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to fetch languages.'})
        }
}

//GET LANGUAGE BY ID
export const getLanguageData= async(request, response)=>{
    const languageid = request.params.languageid;
    try {
        const language = await getLanguageById(languageid);
        if(language){
            response.json(language);
        }else{
            response.status(404).json({ msg: 'Language not found.' });
        }               
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to fetch language.'})
        }
}

//ADD LANGUAGE
export const getNewLanguageData = async(request, response)=>{
    const languageid = request.body.languageid;
    const language = request.body.language;
    try {
        const languageNew = await addLanguage({languageid, language})
        response.json(languageNew)
            
        } catch (error) {
            console.log(error)
            response.status(404).json({msg: error.message})
        }
}

//DELETE LANGUAGE
export const deleteLanguageData = async(request, response)=>{
    const languageid = request.params.languageid;
    try {
        await deleteLanguage(languageid);
        response.json({ msg: 'Language deleted successfully.'});
            
        } catch (error) {
            console.log(error)
            response.status(500).json({ msg: 'Failed to delete language.' });
        }
}