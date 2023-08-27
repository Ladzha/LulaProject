import React from 'react';
import {PendingService} from '../../services/pending.service.js';

import {useState, useEffect, useContext} from 'react';
// import PendingComponent from './PendingComponent.js';
import AudioPlayerPending from './AudioPlayerPending'
import { AppContext } from '../../App.js';

const AllPending =()=>{
  // const { token } = useContext(AppContext);
  const [pendingAudios, setPendingAudios]=useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      const pendingData = await PendingService.getAll()//token
      setPendingAudios(pendingData)
    }
    fetchData()
  }, []) ///???? pendingAudios

  return(
    <div className= 'box listRecord'>

      <AudioPlayerPending playlist={pendingAudios}/>
      
      </div>)
}
export default AllPending
