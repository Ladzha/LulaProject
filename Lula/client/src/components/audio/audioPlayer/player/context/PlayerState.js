import React, {useReducer, useState, useEffect} from 'react'
import PlayerReducer from './PlayerReducer'
import PlayerContext from './PlayerContext'
import { song_list } from '../songs'

const PlayerState = (props) => {

  const initalState={
      currentTrack:0,
      playlist: song_list,
      repeat: false,
      random: false, 
      playing: false
  }
  const [state, dispatch] = useReducer(PlayerReducer, initalState)

  const SetCurrent = (id)=> dispatch({ type: 'SET_CURRENT_SONG', data: id})

  const songSet = (songArr)=> dispatch({ type: 'SET_SONG_ARRAY', data: songArr})

  const togglePlaying = (songArr)=> dispatch({ type: 'TOGGLE_PLAYING', data: state.playing?false:true})


    // Next track
    const next = () => {
      if (state.currentTrack === state.playlist.length - 1) {
        SetCurrent(0)
      } else {
        SetCurrent(state.currentSong + 1)}
    }

    // Previous track
    const previous = () => {
      if (state.currentTrack === 0) {
        return SetCurrent(state.playlist.length - 1)
      } else {
        return SetCurrent(state.currentSong - 1)}
    }

  // End of track
  const handleEnd = () => {
    if (state.currentTrack === state.playlist.length - 1) {
        return
      } else {
        next()}
    }

  return (
  <PlayerContext.Provider
      value={{
          currentTrack:state.currentTrack,
          playlist: state.playlist,
          repeat: state.repeat,
          random: state.random, 
          playing: state.playing,
          SetCurrent,
          next,
          previous,
          handleEnd,
          togglePlaying,
      }}>
          {props.children}
      </PlayerContext.Provider>
      )}

export default PlayerState