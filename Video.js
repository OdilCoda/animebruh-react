import styled from "@emotion/styled/macro";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { useEffect, useState } from "react";
import { SkipNext, SkipPrevious } from "@mui/icons-material";
import axios from "axios";
import { links } from "./Episodes"; 


export const Video = (props) => {
    useEffect(() => {
        props.setSource(links[0])
        props.setEp(1)
    }, [])
    const [played, setPlayed] = useState(false)
    const handlePlay = async () => {
        setPlayed(true)
    }

    const [src, setSrc] = useState(1)
    const handleNext = () => {
        setSrc(src+1)
    }

    const handlePrev = () => {
        if (src===1){} else setSrc(src-1)
    }
    return(
        <Con>
            {played ?
                <ActualVideo autoPlay onContextMenu={(e)=>{e.preventDefault()}} setSource={props.setSrc} src={props.source} controls>
                </ActualVideo> : 
                <Wrapper>
                    <Img src="/slaya.jpg"/>
                    <Play onClick={handlePlay}>
                    <PlayArrowRoundedIcon className="play"/>
                    </Play>
                </Wrapper>}
            <CurrentEpisode>
                You're watching<span> Episode {props.ep}</span>.
            </CurrentEpisode>
        </Con>
    )
}

const Con = styled.div`
    flex-grow: 1;
    height: fit-content;
    position: relative;
`

const Wrapper = styled.div`
    position: relative;
`
const Play = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    padding: 0;
    border: none;
    background-color: transparent;
    border-radius: 50%;
    svg{
        @media (max-width: 1450px){
            height: 70px;
            width: 70px;
        }
        color: #dddddd;
        height: 80px;
        width: 80px;
        background-color: #5a2e98;
        border-radius: 50%;
        padding: 4px;
        border: 5px solid #dddddd;
        
        transition: all 150ms;
        cursor: pointer;
        &:hover{
            transform: scale(1.075);
            color: white;
            border-color: white;
        }
    }
`

const Img = styled.img`
    display: block;
    width: 100%;
`

const ActualVideo = styled.video`
    width: 1094px;
    display: block;
    width: 100%;
    height: 100%/16*9;
`

const CurrentEpisode = styled.div`
    background-color: #1c1c1c;
    color: #aaaaaa;
    height: 40px;
    text-align: center;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
        color: #8c5ece;
        font-weight: 700;
        margin-left: 3px;
    }
`

