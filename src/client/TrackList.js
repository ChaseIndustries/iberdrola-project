import React from "react";
import axios from "axios";
import styled from 'styled-components';
import Track from './Track';
import { connect } from 'react-redux';
import * as actions from './actions'

const TrackListElement = styled.div`
  display:flex;
  border-radius:10px;
  box-shadow:0px 0px 40px rgba(0,0,0,.3);
  width:100%;
  padding:10px;
  max-width:860px;
  justify-content:flex-start;
  margin:30px auto;
  background-color:white;
  flex-wrap:wrap;
`

const TrackList = ({ trackList, setTrackList, openTrack }) => {
  React.useEffect(() => {
    async function getTrackList() {
      try {
        const trackListResponse = await axios.get(
          `//localhost:4000/track-list`
        )
        setTrackList(trackListResponse.data.results)
      } catch (err) {
        console.error(err);
      }
    }
    getTrackList();
  }, [setTrackList]);
  
  return (
    <TrackListElement>
      {trackList && trackList.map((track, index) => (
        <Track onClick={() => openTrack(track)} key={index} {...track} />
      ))}
    </TrackListElement>
  );
}

const mapStateToProps = state => ({
  trackList: state.trackList
})

const mapDispatchToProps = dispatch => ({
  setTrackList: trackList => dispatch(actions.setTrackList(trackList)),
  openTrack: track => dispatch(actions.openTrack(track))
})

export default connect(mapStateToProps, mapDispatchToProps)(TrackList)