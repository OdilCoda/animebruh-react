import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled/macro";

export const SimpleSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2
  };
  return (
    <Carousel {...settings}>
                <SeasonLink >
                    <Img src="/s1.jpg"/>
                    <span>season 1</span>
                </SeasonLink>

                <SeasonLink>
                    <Img src="/s2.jpg"/>
                    <span>season 2</span>
                </SeasonLink>

                <SeasonLink>
                    <Img src="/s3.jpg"/>
                    <span>season 3</span>
                </SeasonLink>

                <SeasonLink>
                    <Img src="/s4.jpg"/>
                    <span>season 4</span>
                </SeasonLink>
    </Carousel>
  );
}

const Carousel = styled(Slider)`

`

const SeasonLink = styled.div`
    position: relative;
    cursor: pointer;
    span{
        position: absolute;
        color: white;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        text-transform: uppercase;
        font-weight: bold;
        pointer-events: none;
    }
`

const Img = styled.img`
    width: 100%;
    height: 93px;
    flex-shrink: 0;
    object-fit: cover;
    box-sizing: border-box;
    border-radius: 7px;
    filter: opacity(.5) brightness(50%);
    border: 2.5px solid #1C1C1C;
    transition-duration: 250ms;
    &:hover{
        filter: brightness(60%);
        border-color: #5a2e98;
    }
`