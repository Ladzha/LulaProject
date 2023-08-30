import React from 'react';
import {PendingService} from '../../services/pending.service.js';

import {useState, useEffect} from 'react';
import AudioPlayerPending from './AudioPlayerPending'

const AllPending =()=>{
  const [pendingAudios, setPendingAudios]=useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      const pendingData = await PendingService.getAll()
      setPendingAudios(pendingData)
    }
    fetchData()
  }, []) 

  return(
    <div className= 'box listRecord'>

      <AudioPlayerPending playlist={pendingAudios}/>
      
      </div>)
}
export default AllPending
