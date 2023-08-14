import React from 'react'
import { ImgService } from '../services/img.service.js';
import {useState, useEffect} from 'react';
import ExercisePreview from '../components/exercises/ExercisePreview.jsx';


const Home = () => {

      const [previews, setPreviews]=useState([])
  
      useEffect(()=>{
          const fetchData = async()=>{
              const data = await ImgService.getAll()
              console.log(data);
              setPreviews(data)        
          }
          fetchData()
      }, [])
  
      return(
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
      )
  }
export default Home