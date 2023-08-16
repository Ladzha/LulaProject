import React from 'react';
import {PendingService} from '../../services/pending.service.js';

import {useState, useEffect, useContext} from 'react';
import PendingComponent from './PendingComponent.js';
import AudioPlayer from '../audio/audioPlayer/AudioPlayer'
import { AppContext } from '../../App.js';
const AllPending =()=>{
    const { token } = useContext(AppContext);

    const [pendingAudios, setPendingAudios]=useState([])
    const [zaglushka, setZaglushka,]=useState(false)

    useEffect(()=>{
        const fetchData = async()=>{
            const pendingData = await PendingService.getAll(token)
            console.log("PENDING DATA", pendingData);
            setPendingAudios(pendingData)
            setZaglushka(true)        

        }
        fetchData()
    }, [zaglushka])
    // const [pendingAudios, setPendingAudios]=useState([])
    console.log("PENDING AUDIO LIST", pendingAudios);
    return(
        <div className= 'box listRecord'>
            <AudioPlayer playlist={pendingAudios}/>

            {pendingAudios ?(
                
            pendingAudios.length > 0 && pendingAudios.map((audio, index)=>{
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
                }
                
                )
            ):(<p>There are no pending audios</p>)}
        </div>
    )
}
export default AllPending
