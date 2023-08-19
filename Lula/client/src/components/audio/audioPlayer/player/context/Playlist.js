import React, { useContext } from 'react'
import PlayerContext from './PlayerContext'

const Playlist = () => {

const {playlist, currentTrack, SetCurrent} = useContext(PlayerContext)

  return (

      <div className='exerciseContainer'>
        {playlist && <div className= 'box listRecord'>

          {playlist.length > 0 && playlist.map((audio, index)=>{
            return( 
              <div key={index}
               className={'box '+(currentTrack===index? 'selected':'')}
               onClick={()=>SetCurrent(index)}>
                <p>{audio.title}</p>
                <p>{audio.artistName}</p>
              </div>)})}
          </div>}
    </div>
  )
}

export default Playlist