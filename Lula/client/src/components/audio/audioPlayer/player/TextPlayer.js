import React, {useContext, useState, useEffect} from 'react'
import {PendingService} from '../../../../services/pending.service.js';
import PlayerContext from './context/PlayerContext.js'


import Controls from './Controls.js'
import PendingComponent from '../../../admin/PendingComponent.js'
import PlayerState from './context/PlayerState.js';
import Header from './Header.js';
import Actions from './Actions.js';
import Playlist from './context/Playlist.js';

const TextPlayer = () => {


  return( 
    <PlayerState>
    <div className='audioplayer'>
      <div className='inside_content'>
        
        <Header/>
        <Actions/>
        <Playlist/>

      </div> 
      <Controls/>
    </div>

    </PlayerState>
  )
}

export default TextPlayer