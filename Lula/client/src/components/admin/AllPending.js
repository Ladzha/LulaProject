import React from 'react';
import {PendingService} from '../../services/pending.service.js';

import {useState, useEffect} from 'react';
import PendingComponent from './PendingComponent.js';

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
            {pendingAudios.length > 0 && pendingAudios.map((audio, index)=>{
                return( 
                     <div key={index}>
                        <PendingComponent 
                        recordid={audio.recordid} 
                        created={new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit',
                        }).format(new Date(audio.created))}/>
                    </div>
                    )
                })
            }
        </div>
    )
}
export default AllPending
