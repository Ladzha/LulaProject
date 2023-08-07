import {db} from '../config/db.js';

export const getAllLanguage  = async ()=>{
    try {
        const languageList = await db('language')
        .select('*')
        .returning(["languageid", "language"])
        console.log("languageList=>",  languageList)
        return languageList;
        
    } catch (error) {
        console.log(error);
        throw new Error(error.message);    
    }
}

//GET LANGUAGE BY ID
export const getLanguageById = async (languageid)=>{
    try {
        const lamguage = await db('lamguage')
        .select('*')
        .where('languageid', languageid)
        return lamguage;      

    } catch (error) {
        console.log(error); 
        throw new Error(error.message);    
    }
}

//ADD LANGUAGE
export const addLanguage = ({language}) => {
    return db('languages')
    .insert ({language})
    .returning(["languageid", "language"])
  }

  
  //DELETE LANGUAGE
  export const deleteLanguage = (languageid) => {
    return db('languages')
    .where('languageid', languageid)
    .del()
    .returning(["languageid", "language"])
  }

