import React from 'react';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { ImgService } from '../../services/img.service.js';
import { LanguageService } from '../../services/language.service.js';
import { SectionService } from '../../services/section.service.js';

const ExercisePreview = ({ id }) => {
    
        const [img, setImg]=useState([{}]);
        const [language, setLanguage]=useState([{}]);
        const [section, setSection]=useState([{}]);
    
        useEffect(() => {
            if (!id) return;
            const fetchData = async () => {
                try {
    
                    const imgData = await ImgService.getById(id);
                    setImg(imgData);
                    console.log("img", imgData);

                    if(imgData[0].sectionid){
                        const sectionData = await SectionService.getById(imgData[0].sectionid);
                        setSection(sectionData);
                        console.log("img", sectionData);
                    }

                    const languageData = await LanguageService.getById(1);
                    setLanguage(languageData);
                    console.log("img", languageData);


      
                } catch (error) {
                    console.log(error);
                }
            };
      
            fetchData();
        }, [id]);
    
      return (
        <div className='previewBox'>
           <Link to="/exercise" ><img className='imgPreview' src={img[0].link}/></Link>
          <div className='previewInfo'>
          <p className='languageButton'>{language[0].language}</p>
          <p className='sectionButton'>{section[0].name}</p>
         
          </div>
        </div>
      )
    }
    
export default ExercisePreview