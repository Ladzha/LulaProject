import React from 'react'
import { ImgService } from '../services/img.service.js';
import { LanguageService } from '../services/language.service.js';

import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ExercisePreview from '../components/exercises/ExercisePreview.jsx';

const Language = () => {

  const { languageid } = useParams();
  const [language, setLanguage]=useState(null)

  const [previews, setPreviews]=useState([])

  try {
        useEffect(()=>{
            const fetchData = async()=>{
                const languageData = await LanguageService.getById(languageid) //Get section by id
                setLanguage(languageData);  
                console.log(languageid);
                console.log("LANGUADE DATA", languageData);
                
                const imgData = await ImgService.getAllByLanguageId(languageid) //Get all imgs in this section
                setPreviews(imgData)   
            }
            fetchData()
    }, [languageid])

     

      if (!language) {
        return <div className='loading'>Loading...</div>;
      }
        
    } catch (error) {
        console.log(error);
    }

      return(
        <div className='containerColumn'>
            <p className='titleMain'> Let's learn {language[0].language}</p>
                <div className='homeContainer'>
              {previews.length > 0 && previews.map((preview, index)=>{
                  return( 
                       <div key={index}>
                          <ExercisePreview id={preview.imgid}/>
                      </div>
                      )
                  })
              }
          </div>
        </div>

      )
  }
export default Language