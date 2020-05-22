export const openTrack = track => ({
  type: 'OPEN_TRACK',
  track
})

export const closeTrack = () => ({
  type: 'CLOSE_TRACK',
})

export const setTrackList = tracks => ({
  type: 'SET_TRACKLIST',
  tracks
})