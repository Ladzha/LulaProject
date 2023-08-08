import React from 'react';
import {PendingService} from '../../services/pending.service.js';
import PendingElement from './PendingElement';
import {useState, useEffect, useContext} from 'react';

const AllPending =()=>{

    const[audios, setAudios]=useState([])

    useEffect(()=>{
        const fetchData = async()=>{
            const data = await PendingService.getAll()
            setAudios(data)        
        }
        fetchData()
    }, [])


    return(
        <div className='container'>
            {audios.length > 0 && audios.map(audio=>{
                return( 
                     <div key={audio.id}>
                        <PendingElement username = 'Doriana' duration={`${audio.duration.minutes}:${audio.duration.seconds}`} created={new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit',
                        }).format(new Date(audio.created))}/>
                        <p>{audio.recordid}</p>
                        <p>{audio.userid}</p>
                        <p>{audio.recordname}</p>
                        <p>{audio.duration.minutes}:{audio.duration.seconds}</p>

                        <audio src={audio.recordlink} controls/>
                    </div>
                    )
                })
            }
        </div>
    )
}
export default AllPending