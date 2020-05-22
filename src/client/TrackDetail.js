import React from 'react'
import styled from 'styled-components'
import * as actions from './actions'
import { connect } from 'react-redux';
import Track from './Track'


const TrackContainer = styled.div`
    position:absolute;
    border-radius:10px;
    top:50%;
    left:50%;
    transform:translate3d(-50%, -50%, 0);
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:2;
    font-size:1.5rem;
`;

const Overlay = styled.div`
    position:fixed;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,.3);
    left:0;
    top:0;
    z-index:1;
`

const CloseTrackButton = styled.a`
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    right:10px;
    top:10px;
    width:30px;
    height:30px;
    background-color:lightgrey;
    color:darkgrey;
    z-index:4;
    text-decoration:none;
    border-radius:400px;
    line-height:0;
`

const TrackDetail = (props) => {
    const {
        openTrack,
        closeTrack
    } = props
    return (
        <Overlay onClick={closeTrack}>
            <TrackContainer onClick={(e) => e.stopPropagation()}>
                <CloseTrackButton href="#" onClick={closeTrack}>&times;</CloseTrackButton>
                <Track {...openTrack} width="500" showDetails={true} />
            </TrackContainer>
        </Overlay>
    )
}


const mapStateToProps = state => ({
  openTrack: state.openTrack
})

const mapDispatchToProps = dispatch => ({
  closeTrack: () => dispatch(actions.closeTrack()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TrackDetail)