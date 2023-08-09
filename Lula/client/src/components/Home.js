import React from 'react'
import { ImgService } from '../services/img.service.js';
import {useState, useEffect} from 'react';
import ExercisePreview from './exercises/ExercisePreview.js';

const Home = () => {

      const [previews, setPreviews]=useState([])
      // const [img, setImg]=useState([])
  
      useEffect(()=>{
          const fetchData = async()=>{
              const data = await ImgService.getAll()
              console.log(data);
              setPreviews(data)        
          }
          fetchData()
      }, [])
  
      return(
          <div className='container'>
              {previews.length > 0 && previews.map((preview, index)=>{
                  return( 
                       <div key={index}>
                          <ExercisePreview id={preview.imgid}/>
                      </div>
                      )
                  })
              }
          </div>
      )
  }
export default Home