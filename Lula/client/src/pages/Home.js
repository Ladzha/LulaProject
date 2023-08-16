import React from 'react'
import { SectionService } from '../services/section.service.js';

import {useState, useEffect} from 'react';
import SectionPreview from '../components/exercises/SectionPreview.js'
import Test from '../img/Test.js'

const Home = () => {

      const [sectionPreviews, setSectionPreviews]=useState([])

    //Get all sections
      useEffect(()=>{
        const fetchData = async()=>{
            const data = await SectionService.getAll()
            setSectionPreviews(data)        
        }
        fetchData()
    }, [])

        if (!sectionPreviews) {
        return <div className='loading'>Loading...</div>;
      }
  
      return(
        <div className='containerColumn'>

            <p className='titleHomeMain'> Listen Up and Learn with Lula </p>
            <p className='moto'>Your Language Learning Journey Begins Here."</p>

                <div className='homeContainer'>
                {sectionPreviews.length > 0 && sectionPreviews.map((preview, index)=>{
                    return( 
                            <div key={index}>
                             
                            <SectionPreview sectionid={preview.sectionid}/>
                        </div>
                        )
                    })
                }

            </div>
        </div>
        

      )
  }
export default Home