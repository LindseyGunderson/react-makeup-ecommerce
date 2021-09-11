
import styled from "styled-components";

const Container = styled.div`

    width: 100vw;
    height: 100vh;
    background-image: url("https://images.unsplash.com/photo-1571875257727-256c39da42af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;

`;

const Wrapper = styled.div`

    padding: 20px;
    width: 30%;
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
    flex-direction: column;
    flex-wrap: wrap;

`;


const Input = styled.input`

    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`;


const Button = styled.button`

    margin: auto auto;
    width: 40%;
    border:none;
    padding: 15px 20px;
    background-color: pink;
    color: gray;

`;

const Link = styled.a`

    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    color: teal;
    cursor: pointer;

`;

const Login = () => {
    return (
        <Container>
        <Wrapper>
            <Title> Login</Title>

            <Form>
                <Input placeholder="username" />
                <Input placeholder="password" />

                <Button>Login</Button>

                <Link>Forgot Your Password?</Link>
                <Link>Create An Account</Link>
            </Form>
        </Wrapper>
    </Container>
    )
}

export default Login
