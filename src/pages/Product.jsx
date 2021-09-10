import styled from "styled-components";

import Advertisement from "../components/Advertisement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { Add, Remove} from '@material-ui/icons'

const Container = styled.div``;

const Wrapper = styled.div`

    padding: 50px;
    display: flex;

`;

const ImgContainer = styled.div`

    flex: 1;


`;

const Image = styled.img`

    width: 100%;
    height: 80vh;
    object-fit: cover;

`;

const InfoContainer = styled.div`

    flex: 1;
    padding: 0 50px;

`;

const Title = styled.h1`

    font-weight: 200;

`;
const Desc = styled.p`

    margin: 20px 0;

`;
const Price = styled.p`

    font-size: 40px;
    font-weight: 400;

`;

// add to cart options
const AddContainer = styled.div`

    margin-top: 20px;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

const AmountContainer = styled.div`

    display: flex;
    align-items: center;
    font-weight: 700;

`;

const Amount = styled.span`

    width: 40px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid lightgray;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;

`;

const Button = styled.button`

    padding: 13px;
    border: 2px solid pink;
    background-color: pink;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;

    &:hover {

        background-color: white;
        color: gray;


    }

`;


const Product = () => {
    return (
        <Container>
            <Advertisement />
            <Navbar />

            <Wrapper> 

                <ImgContainer>

                <Image src="https://images.unsplash.com/photo-1583209814683-c023dd293cc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"/>

                </ImgContainer>

                <InfoContainer>
                    <Title>Skincare Bundle Package</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sint culpa repudiandae architecto rem ex quam est vitae doloribus nemo. Necessitatibus, quo. Itaque harum assumenda voluptate, alias officiis iusto sit!</Desc>
                    <Price>$30</Price>

                    <AddContainer>
                        <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                        </AmountContainer>
                        <Button>Add To Cart</Button>
                    </AddContainer>
                    
                </InfoContainer>
            </Wrapper>

            <Footer />
            
        </Container>
    )
}

export default Product
