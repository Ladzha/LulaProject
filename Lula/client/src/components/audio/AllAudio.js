import React from 'react';
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom';

import {AudioService} from '../../services/audio.service.js';
import { ImgService } from '../../services/img.service.js';
import { UserService } from '../../services/user.service.js';
import {useState, useEffect, useContext} from 'react';
import AudioComponent from './AudioComponent.js';
import AudioPlayer from '../audio/audioPlayer/AudioPlayer'

const AllAudio =({imgid})=>{

  const [imgInfo, setImgInfo]=useState({
    img: {},
    audios: [],
    users: [],
    avatars: [],
    comments: [],
    commentsUsers: [],
    commentsAvatars: [],
  });

  useEffect(() => {

    if (!imgid) return;

    const fetchImgInfo = async () => {
      try {

        const imgInfoData = await ImgService.getByIdInfo(imgid); //IMG BY ID
        setImgInfo(imgInfoData);

        } catch (error) {
              console.log(error);
        }
      };

      fetchImgInfo();
  }, [imgid]);

  return(
    <div className='containerColumn'>

    <p className='titleMain'> Listen to what they say about it </p>

      <div className='exerciseContainer'>
        {imgInfo.audios && <div className= 'box listRecord'>
          <AudioPlayer playlist={imgInfo.audios}/> 
          {imgInfo.audios.length > 0 && imgInfo.audios.map((audio, index)=>{
            return( 
              <div key={index}>
                <AudioComponent 
                id={audio.recordid}  
                duration={`${0}:${0}`} 
                created={new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                }).format(new Date(audio.created))} commentsList={imgInfo.comments} 
                commentsUsers={imgInfo.commentsUsers} commentsAvatars={imgInfo.commentsAvatars}/>
              </div>)})}
          </div>}
        <div>
          <img className='imgExercise' src={imgInfo.img.link}/>
          <div className='sectionExercise'>
          <Link to="/audio">Audio</Link>...
          <Link to="/record">Record</Link>
        </div>

        </div>
      </div>
    </div>
  )
}




export default AllAudio
