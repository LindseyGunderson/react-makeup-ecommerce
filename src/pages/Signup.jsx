import styled from "styled-components";
import Advertisement from "../components/Advertisement";
import Navbar from "../components/Navbar";

const Container = styled.div`

    width: 100vw;
    height: 100vh;
    background-image: url("https://images.unsplash.com/photo-1586809764311-090bc6068916?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;

`;

const Wrapper = styled.div`

    padding: 20px;
    width: 50%;
    background-color: #fff;
    border: 2px solid teal;
    text-align: center;

`;

const Title = styled.h1`

    font-size: 24px;
    color: gray;
    font-weight: 300;

`;

const Form = styled.form`

    display: flex;
    flex-wrap: wrap;

`;


const Input = styled.input`

    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`;

const Agreement = styled.span`

    font-size: 12px;
    margin: 20px;

`;


const Button = styled.button`

    margin: auto auto;
    width: 40%;
    border:none;
    padding: 15px 20px;
    background-color: pink;
    color: gray;

`;

const Signup = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Sign Up For An Account</Title>

                <Form>
                    <Input placeholder="first name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder=" email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />

                    <Agreement>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea maiores nemo aut dicta dolore aspernatur voluptatibus soluta provident, sunt officia reiciendis vel ab temporibus saepe voluptatum dolorum blanditiis! Consequuntur, maiores!
                    </Agreement>

                    <Button>Create Your Account</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Signup
