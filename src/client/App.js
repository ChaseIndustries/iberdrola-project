import React from "react";
import styled from 'styled-components';
import TrackList from "./TrackList";
import TrackDetail from './TrackDetail';
import { connect } from 'react-redux';


const AppContainer = styled.div`
  width:100%;
  height:100%;
`

const App = ({ openTrack }) => {
  return (
      <AppContainer className="App">
        <TrackList />
        { openTrack && <TrackDetail /> }
      </AppContainer>
  );
}

const mapStateToProps = state => ({
  openTrack: state.openTrack
})

const mapDispatchToProps = dispatch => ({})
  

export default connect(mapStateToProps, mapDispatchToProps)(App)
