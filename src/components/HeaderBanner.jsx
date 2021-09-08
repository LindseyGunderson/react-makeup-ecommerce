import {React, useState} from 'react';

import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Container = styled.div`

    width: 100%;
    height: 90vh;
    display: flex;
    
    color: #fff;
    position: relative;
    overflow: hidden;

`;


const BannerWrapper = styled.div`

    height: 100%;
    display: flex;

`;


const Arrow = styled.div`

    width: 40px;
    height: 60px;
    background-color: #000;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=>props.direction === "left" && "10px"};
    right: ${props=>props.direction === "right" && "10px"};

    margin: auto;
    cursor: pointer;
    z-index: 2;

`;

// sliger components
const Slide = styled.div`

    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${props=>props.bg};

`;
const ImgContainer = styled.div`

    height: 100%;
    flex: 1;

`;

const Image = styled.img`

height: 90%;

`;

const InfoContainer = styled.div`

    flex: 1;
    padding: 50px; 

`;

const Title = styled.h1`

    font-size: 72px;



`;

const Description = styled.p`

    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
`;

const Button = styled.button`

    padding: 15px;
    font-size: 16px;
    background-color: transparent;
    border: 2px solid #FFF;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;

`;




const HeaderBanner = () => {

    const [slideIndex, setSlideIndex] = useState();


    // handle arrows for slider
    const handleClick = () => {



    }




    return (
        <div>
            <Container>
                <Arrow direction="left" onClick={() => handleClick("left")}>
                    <ArrowBackIosIcon/>
                </Arrow>
                
                    <BannerWrapper>
                        <Slide bg=""> 
                            <ImgContainer>
                                <Image src=""/>
                            </ImgContainer>
                        <InfoContainer>

                            <Title>  </Title>
                            <Description> </Description>
                            <Button>Shop Now</Button>
                        </InfoContainer>

                        </Slide>

                    </BannerWrapper>

                <Arrow direction="right" onClick={() => handleClick("right")}>
                    <ArrowForwardIosIcon />
                </Arrow>

            </Container>
            
        </div>
    )
}

export default HeaderBanner
