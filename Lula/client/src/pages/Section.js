import React from 'react'
import { ImgService } from '../services/img.service.js';
import { SectionService } from '../services/section.service.js';

import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ExercisePreview from '../components/exercises/ExercisePreview.jsx';

const Section = () => {

    const { sectionid } = useParams();
    const [section, setSection] =useState(null)

    const [previews, setPreviews]=useState([])

    try {
      useEffect(()=>{
        const fetchData = async()=>{
            const sectionData = await SectionService.getById(sectionid) //Get section by id
            setSection(sectionData);  
            
            const imgData = await ImgService.getAllBySectionId(sectionid) //Get all imgs in this section
            setPreviews(imgData)   
        }
        fetchData()
    }, [sectionid])

      if (!section) {
        return <div className='loading'>Loading...</div>;
      }
        
    } catch (error) {
        console.log(error);
    }
      return(
        <div className='containerColumn'>
          <p className='titleMain'> Let's talk about "{section[0].name}"</p>
          <p className='instruction'>Choose a picture that sparks your interest. Dive into a world of authentic language use. </p>
              <div className='homeContainer'>
            {previews.length > 0 && previews.map((preview, index)=>{
              return( 
                <div key={index}>
                  <ExercisePreview id={preview.imgid}/>
                </div>)})}
          </div>
        </div>
      )
  }
export default Section