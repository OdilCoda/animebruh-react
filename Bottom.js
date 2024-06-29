import styled from "@emotion/styled/macro";
import { useEffect, useRef, useState } from "react";

export const Bottom = () => {
    const ref = useRef(null)
    const [counterId, setCounterId] = useState()
    const [scrollLeft, setScrollLeft] = useState(0)
    const [distance, setDistance] = useState(0)
    const [startPoint, setStartPoint] = useState()
    const [scrollLength, setScrollLength] = useState((window.innerWidth - 40)/3*2 + 20)
    
    function scroller(){
        ref.current.scrollLeft = ref.current.scrollLeft + 15*Math.sign(distance) 
    }
    var num = 0

    const counter = () => {
        num++
    }

    const touchstart = (e) => {
        setCounterId(setInterval(counter, 1))
        setStartPoint(e.touches[0].clientX)
    }

    const touchmove = (e) => {
        setDistance(startPoint - e.touches[0].clientX)
        ref.current.scrollLeft = scrollLeft + startPoint - e.touches[0].clientX
    }

    const touchend = (e) => {
        clearInterval(counterId)
        const scrollerId = setInterval(scroller, 15)
        setTimeout(()=>{
            clearInterval(scrollerId)
            ref.current.scrollLeft = scrollLeft + Math.sign(distance)*scrollLength
            setScrollLeft(ref.current.scrollLeft)
        }, (scrollLength - Math.abs(distance))*1)
        //setScrollLeft(ref.current.scrollLeft)
    }

    const scrollEnd = () => {
    }

    return(
        <Con>
            <Seasons ref={ref} /*onMouseDown={bruh} onMouseMove={calc} onMouseUp={remove} onMouseLeave={remove}*/ onTouchStart={touchstart} onTouchMove={touchmove} onTouchEnd={touchend}>
                <SeasonLink className="current">
                    <Img className="current" onDragStart={(e) => e.preventDefault()} src="/s1.jpg"/>
                    <span>season 1</span>
                </SeasonLink>

                <SeasonLink>
                    <Img onDragStart={(e) => e.preventDefault()} src="/s2.jpg"/>
                    <span>season 2</span>
                </SeasonLink>

                <SeasonLink className="bruh">
                    <Img onDragStart={(e) => e.preventDefault()} src="/s3.jpg"/>
                    <span>season 3</span>
                </SeasonLink>

                <SeasonLink>
                    <Img onDragStart={(e) => e.preventDefault()} src="/s4.jpg"/>
                    <span>season 4</span>
                </SeasonLink>

                <SeasonLink>
                    <Img onDragStart={(e) => e.preventDefault()} src="/s5.jpg"/>
                    <span>season 5</span>
                </SeasonLink>
            </Seasons>
        </Con>
    )
}

const Con = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    color: white;
`

const SeasonLink = styled.div`
    @media (max-width: 875px){
        width: calc((100% - 40px)/5);
    @media (max-width: 575px){
        width: calc((100% - 20px)/3);
    }
    }
    &.current{
        border-color: #5a2e98;
    }
    position: relative;
    flex-shrink: 0;
    cursor: pointer;
    width: 325px;
    width: 136px;
    width: 13.5%;
    box-sizing: border-box;
    border-radius: 7px;
    overflow: hidden;
    border: 2px solid #1C1C1C;
    &:hover{
        border-color: #5a2e98;
    }
    span{
        position: absolute;
        white-space: nowrap;
        color: white;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        text-transform: uppercase;
        font-weight: bold;
        user-select: none;
        pointer-events: none;
}
`

const Seasons = styled.div`
    touch-action: pan-y;
    display: flex;
    gap: 10px;
    overflow-x: scroll;
    scrollbar-width: none;
`
const Img = styled.img`
    user-select: none;
    width: 162px;
    width: 100%;
    height: 70px;
    flex-shrink: 0;
    object-fit: cover;
    box-sizing: border-box;
    filter: opacity(.5) brightness(50%);
    transition-duration: 250ms;
    user-select: none;
    display: block;
    &:hover{
        filter: brightness(60%);
    }
    &.current{
        filter: brightness(60%);
    }


`