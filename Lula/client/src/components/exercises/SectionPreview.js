import React, {useEffect, useState} from 'react';
import { SectionService } from '../../services/section.service.js';
import { LanguageService } from '../../services/language.service.js';
import { Link } from 'react-router-dom';



const SectionPreview = ({sectionid}) => { // put id from parent component in loop 

  const [language, setLanguage]=useState([{}]);
  const [section, setSection]=useState([{}]);


  useEffect(() => {
    if (!sectionid) return;

    const fetchData = async () => {
        try {

            const sectionData = await SectionService.getById(sectionid); //Get data of one section by id
            setSection(sectionData);      
            console.log("TEST", section[0].name);
            
            
          if(sectionData){
            const languageData = await LanguageService.getById(1); //Get data of one img by id        
            setLanguage(languageData);
          }
          else{
            section[0].languageid=1
            const languageData = await LanguageService.getById(1); //Get data of one img by id        
            setLanguage(languageData);
          }

        } catch (error) {
            console.log(error);
        }
    };

    fetchData();
}, [sectionid]);
  return (

      <div className='previewBox'>
          <Link to={`/section/${sectionid}`}><img className='imgPreview'src={section[0].preview}/></Link>
          <div className='previewInfo'>
          <Link to={`exercise/language/${section[0].languageid}`}><p className='sectionButton'>{language[0].language}</p></Link>
          <Link to={`/section/${sectionid}`}><p className='sectionButton'>{section[0].name}</p></Link>
        
        </div>
      </div>
  )
}

export default SectionPreview