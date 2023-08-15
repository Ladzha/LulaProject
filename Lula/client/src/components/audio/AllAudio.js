import React from 'react';
import {AudioService} from '../../services/audio.service.js';

import {useState, useEffect} from 'react';
import AudioComponent from './AudioComponent.js';

const AllAudio =()=>{

    const [audios, setAudios]=useState([])

    useEffect(()=>{
        const fetchData = async()=>{
            const audioData = await AudioService.getAll()
            setAudios(audioData)        
        }
        fetchData()
    }, [])

    return(
        <div className= 'box listRecord'>
            {audios.length > 0 && audios.map((audio, index)=>{
                return( 
                     <div key={index}>
                        <AudioComponent 
                        recordid={audio.recordid} 
                        created={new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit',
                        }).format(new Date(audio.created))}/>
                        <p>ldkjgsldkgjdokgj</p>
                    </div>
                    )
                })
            }
        </div>
    )
}
export default AllAudio
