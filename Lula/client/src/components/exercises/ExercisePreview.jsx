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

                    const languageData = await LanguageService.getById(imgData[0].languageid);
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
          <Link to={`/exercise/${img[0].imgid}`} ><img className='imgPreview' src={img[0].link}/></Link>
          <div className='previewInfo'>
          <Link to={'/'} ><p className='languageButton'>Back</p></Link>
          <Link to={`/exercise/${img[0].imgid}`} ><p className='sectionButton'>Learn</p></Link>
      
          </div>
        </div>
      )
    }
    
export default ExercisePreview