const PlayerREducer = (state, action) => {

    switch (action.type) {
        case 'SET_SONGS_ARRAY':
        return {
            ...state,
            songs: action.data,
        }
        case 'SET_CURRENT_SONG':
        return {
            ...state,
            currentTrack: action.data,
            playing: true,
        }
        case 'TOGGLE_RANDOM':
        return {
            ...state,
            random: action.data,
        }
        case 'TOGGLE_REPEAT':
        return {
            ...state,
            repeat: action.data,
        }
        case 'TOGGLE_PLAYING':
        return {
            ...state,
            playing: action.data,
        }
        default:
        return state
    }
}

export default PlayerREducer