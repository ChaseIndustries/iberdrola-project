import React from 'react'
import styled from 'styled-components'

const TrackContainer = styled.div`
    width: ${props => props.width || '200'}px;
    display:flex;
    align-items:center;
    padding:.5em 1em;
    margin:5px 5px 10px 5px;
    justify-content:center;
    transition:.3s all;
    border:1px solid white;
    border-radius:10px;
    cursor:${props => !props.showDetails && 'pointer'};
    &:hover {
        ${props => !props.showDetails && 'border-color:rgba(0,0,0,.07)' }
    }
`;

const TrackImage = styled.div`
    background-image: url(${props => props.src});
    background-size:cover;
    border-radius:50%;
    margin:auto;
    margin-bottom:1em;
    width:100px;
    height:100px;
    border:2px outset rgba(0,0,0,.3);

`;
const TrackDetails = styled.div`
    text-align:center;
`;
const TrackName = styled.div`
    font-size:.8em;
    font-weight:600;
`
const ArtistName = styled.div`
    font-size:0.8em;
    color:#656565;
    margin-bottom:.5em
`
const TrackPrice = styled.div`
    font-size:0.8em;
    color:green;
    background-color:white;
    border:1px solid whitesmoke;
    border-radius:400px;
    display:inline-block;
    padding:0.2em 1em;
`

const ExtraDetailsUl = styled.ul`
    margin:0;
    list-style:none;
    padding:0;
    margin-top:.5em;
    margin-bottom:.5em;
    color:#abaaaa;
`

const ExtraDetailsLi = styled.li`
    margin:0;
    padding:0;
    margin-bottom:.3em;
    color:#abaaaa;
    font-size:.5em
`
const ExtraDetailsLiTitle = styled.span`
    font-weight:600
`

const MoreDetailsButton = styled.a`
    background-color:orange;
    border-radius:400px;
    color:white;
    margin-bottom:.5em;
    text-decoration:none;
    padding:.5em 1em;
    display:block;
    width:40%;
    margin:auto;
    font-size:0.5em;
`

export default function Track(props){
    const {
        artistName,
        trackPrice,
        trackName,
        onClick,
        artworkUrl100,
        width,
        trackTimeMillis,
        releaseDate,
        showDetails,
        trackViewUrl
    } = props
    const renderExtra = () => (
        <div>
            <ExtraDetailsUl>
                <ExtraDetailsLi><ExtraDetailsLiTitle>Artwork Url:</ExtraDetailsLiTitle> {artworkUrl100}</ExtraDetailsLi>
                <ExtraDetailsLi>Duration: { Math.round((10 * (trackTimeMillis/1000)) / 10) }sec</ExtraDetailsLi>
                <ExtraDetailsLi>Release Date: {new Date(releaseDate).toDateString()}</ExtraDetailsLi>     
            </ExtraDetailsUl>
            <MoreDetailsButton href={trackViewUrl} target="_blank" rel="nofollow">More Details</MoreDetailsButton>
        </div>
    )
    return (
        <TrackContainer onClick={onClick} width={width} showDetails={showDetails}>
            <TrackDetails>
                <TrackImage src={artworkUrl100}></TrackImage>
                <TrackName>{ trackName }</TrackName>
                <ArtistName>{ artistName }</ArtistName>
                <TrackPrice>{ new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(trackPrice) }</TrackPrice>
                { showDetails && renderExtra() }
            </TrackDetails>
        </TrackContainer>
    )
}