import {db} from '../config/db.js';

//GET ALL SECTION
export const getAllSection  = async ()=>{
    try {
        const sectionList = await db('section')
        .select('*')
        .returning(["sectionid", "sectionname"])
        console.log("sectionList=>",  sectionList)
        return sectionList;
        
    } catch (error) {
        console.log(error);
        throw new Error(error.message);    
    }
}

//GET SECTION BY ID
export const getSectionById = async (sectionid)=>{
    try {
        const section = await db('section')
        .select('*')
        .where('sectionid', sectionid)
        return section;      

    } catch (error) {
        console.log(error); 
        throw new Error(error.message);    
    }
}

//ADD SECTION
export const addSection = ({sectionid, sectionname}) => {
    return db('sections')
    .insert ({sectionid, sectionname})
    .returning(["sectionid", "sectionname"])
  }

//UPDATE SECTION
export const updateSection = ({sectiontext, updated}, sectionid) => {
    return db('sections')
    .update({sectionname})
    .where('sectionid', sectionid)
    .returning(["sectionid", "sectionname"])
  }
  
  //DELETE SECTION
  export const deleteSection = (sectionid) => {
    return db('sections')
    .where('sectionid', sectionid)
    .del()
    .returning(["sectionid", "sectionname"])
  }
