import React from 'react';
import {PendingService} from '../../services/pending.service.js';
import {AvatarService} from '../../services/avatar.service.js';
import { UserService } from '../../services/user.service.js';

import PendingElement from './PendingElement';
import {useState, useEffect, useContext} from 'react';
import PendingComponent from './PendingComponent.js';

const AllPending =()=>{

    const [audios, setAudios]=useState([])

    const [user, setUser]=useState([])
    const [avatar, setAvatar]=useState([])

    useEffect(()=>{
        const fetchData = async()=>{
            const data = await PendingService.getAll()
            console.log(data);
            setAudios(data)        
        }
        fetchData()
    }, [])

    return(
        <div className= 'box listRecord'>
            {audios.length > 0 && audios.map(audio=>{
                return( 
                     <div key={audio.id}>
                        {/* <PendingElement username = 'Doriana' duration={`${audio.duration.minutes}:${audio.duration.seconds}`} created={new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit',
                        }).format(new Date(audio.created))}/>

                        <p>{audio.recordid}</p>
                        <p>{audio.userid}</p>
                        <p>{audio.name}</p>
                        <p>{audio.duration.minutes}:{audio.duration.seconds}</p>
                        <audio src={audio.link} controls/> */}

                        <PendingComponent id={audio.recordid} username = 'Doriana' duration={`${0}:${0}`} created={new Intl.DateTimeFormat('en-US', {
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