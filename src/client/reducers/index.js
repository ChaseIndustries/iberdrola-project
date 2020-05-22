const initialState = { trackList: [], track: {}}

export default  (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TRACKLIST':
            return {
                ...state,
                trackList: action.tracks
            }
        case 'OPEN_TRACK':
            return {
                ...state,
                openTrack: action.track
            }
        case 'CLOSE_TRACK':
            return {
                ...state,
                openTrack: false
            }
        default:
        return state
    }
}