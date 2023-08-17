import React from 'react';
import {AudioService} from '../../services/audio.service.js';
import { ImgService } from '../../services/img.service.js';


import {useState, useEffect} from 'react';
import AudioComponent from './AudioComponent.js';
import AudioPlayer from '../audio/audioPlayer/AudioPlayer'

const AllAudio =()=>{

    const [audios, setAudios]=useState([])

    useEffect(()=>{
        const fetchData = async()=>{
            // const audioData = await AudioService.getAll()
            // setAudios(audioData)  
            const data = await AudioService.getByImageId(1)
            console.log(data);
            setAudios(data);    
        }
        fetchData()
    }, [])

    return(
        <div className= 'box listRecord'>
            <AudioPlayer playlist={audios}/>       
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
                    </div>
                    )
                })
            }
        </div>
    )
}
export default AllAudio
