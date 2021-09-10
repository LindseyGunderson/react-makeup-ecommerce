
import styled from "styled-components"
import { Facebook, Instagram, Twitter } from '@material-ui/icons';

const Container = styled.div`

    display: flex;
    flex: 1;
    background-color: pink;

`;

const Left = styled.div`

    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;

`;

const Logo = styled.h1``;

const Description = styled.p`

    margin: 20px 0;

`;

const Socials = styled.div`

    display: flex;
    justify-content: space-evenly;

`;

const SocialIcon = styled.div`

    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: teal;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

`;
// end of left column components

// center footer components
const Center = styled.div`

    flex: 1;
    padding: 20px;

`;

const Title = styled.h3`

    margin-bottom: 30px;

`;

const List = styled.ul`

    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`

    width: 50%;
    margin-bottom: 10px;

`;
// end of center footer components


// right column for footer
const Right = styled.div`

    flex: 1;
    padding: 20px;

`;

const Input = styled.input`

    padding: 8px;
    border: 1px solid lightgray;
    width: 70%;

`;

const Button = styled.button`

    padding: 8px;
    border: none;
    background-color: teal;
    color: white;
    font-weight: 700;

`;



const Footer = () => {
    return (
        <Container>
            <Left>  
                <Logo> Such Co. </Logo> 
                
                <Description> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum similique sequi labore veniam blanditiis natus quidem sed ducimus illo doloribus, repellat vitae aliquam dolore dolores eum? Ipsa itaque sint voluptates?
                </Description>
            
            <Socials>
                <SocialIcon>
                    <Facebook />
                </SocialIcon>

                <SocialIcon>
                    <Instagram/>
                </SocialIcon>

                <SocialIcon>
                    <Twitter />
                </SocialIcon>
            </Socials>
            
            </Left>
                <Center>
                    <Title> Useful Links</Title>
                    <List>
                        <ListItem>
                            Home
                        </ListItem>

                        <ListItem>
                            Shopping Cart
                        </ListItem>
                        
                        <ListItem>
                            Eyes
                        </ListItem>

                        <ListItem>
                            Lips    
                        </ListItem>

                        <ListItem>
                            Skin Care    
                        </ListItem>

                        <ListItem>
                            My Account    
                        </ListItem>

                        <ListItem>
                            Order Tracking    
                        </ListItem>

                        <ListItem>
                           WishList
                        </ListItem>

                        
                    </List>


                </Center>
            <Right>
                <Title>Newsletter</Title>
                <Description>Keep update with new items and sales directly to you email!</Description>
                <Input placeholder="Enter your email"/>
                <Button>Subscribe</Button>
            </Right> 
        </Container>
    )
}

export default Footer
