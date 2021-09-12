import styled from "styled-components";
import Advertisement from "../components/Advertisement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div`

`;

const Wrapper = styled.div`

    padding: 20px;
`;

const Title = styled.h1`

    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

`;

const TopButton = styled.button`

    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 10px;
    width: 100%;
    color: gray;
    border: 1px solid pink;
`;

const TopTexts = styled.div``;

const TopText = styled.span`

    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;


`;

const Bottom = styled.div`

    display: flex;
    justify-content: space-between;

`;


const Info = styled.div`

    flex: 3;

`;

// cart product components

const Product = styled.div`

    display: flex;
    justify-content: space-between;


`;

const ProductDetail = styled.div`

display: flex;
    flex: 2;

`;

const Image = styled.img`

    width: 200px;
`;

const Details = styled.div`

    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`;

const ProductName = styled.span``;
const ProductID = styled.span``;

const PriceDetail = styled.div`

    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

`;

const ProductAmountContainer = styled.div`

    display: flex;
    align-items: center;

    margin-bottom: 20px;

`;

const ProductPrice = styled.div`

    font-size: 30px;
    font-weight: 200;

`;


const ProductQuantity = styled.div`

    font-size: 24px;
    margin: 5px;
`;

const HR = styled.hr`

    background-color: #ccc;
    border:none;
    height: 1px;

`;

// summary components
const Summary = styled.div`

    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;

`;

const SummaryTitle = styled.h1`

    font-weight: 200;

`;

const SummaryItem = styled.div`

    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-family: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};

`;


const SummaryText = styled.span``;

const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;

const Button = styled.button`

    width: 100%;
    padding: 10px;
    background-color: pink;
    border:none;
    font-size: 14px;
    font-weight: bold;


`;

const Cart = () => {
    return (
        <Container>
            <Advertisement />
            <Navbar />
            
            <Wrapper>
                <Title>Your Cart</Title>

                <Top>
                    
                <TopTexts>                
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your Wishlist (0)</TopText> 
                </TopTexts>  
                 </Top>
                <Bottom>

                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://images.unsplash.com/photo-1584051022121-6ee465f21b5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"/>
                            <Details>
                                <ProductName><b>Product: </b>Max Lash Mascara</ProductName>
                                <ProductID><b>ID: </b>74147546</ProductID>
                            </Details>

                        </ProductDetail>
                        <PriceDetail>
                                
                                <ProductAmountContainer> 
                                    <Add />
                                    <ProductQuantity>2</ProductQuantity>
                                    <Remove />
                                </ProductAmountContainer>
                                
                                <ProductPrice>$19</ProductPrice>
                        </PriceDetail>
                    </Product>

                    <HR />

                    <Product>
                        <ProductDetail>
                            <Image src="https://images.unsplash.com/photo-1584051022121-6ee465f21b5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"/>
                            <Details>
                                <ProductName><b>Product: </b>Max Lash Mascara</ProductName>
                                <ProductID><b>ID: </b>74147546</ProductID>
                            </Details>

                        </ProductDetail>
                        <PriceDetail>
                                
                                <ProductAmountContainer> 
                                    <Add />
                                    <ProductQuantity>2</ProductQuantity>
                                    <Remove />
                                </ProductAmountContainer>
                                
                                <ProductPrice>$19</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <HR/>
                    <SummaryItem>
                        <SummaryText>Subtotal</SummaryText>
                        <SummaryItemPrice>$20</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem>
                        <SummaryText>Estimated Shipping</SummaryText>
                        <SummaryItemPrice>$6.75</SummaryItemPrice>
                    </ SummaryItem>

                    <SummaryItem>
                        <SummaryText>Total Tax</SummaryText>
                        <SummaryItemPrice>$4.15</SummaryItemPrice>
                    </ SummaryItem>

                    <HR />
                    <SummaryItem type="total">
                        <SummaryText>Total</SummaryText>
                        <SummaryItemPrice>$44.57</SummaryItemPrice>
                    </SummaryItem>

                    <Button>Checkout</Button>
                    <TopButton> Continue Shopping</TopButton>  
                </Summary>

                </Bottom>

            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
