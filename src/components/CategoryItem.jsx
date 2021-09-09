import styled from "styled-components";

const Container = styled.div`

    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;

`;

const Image = styled.img`

    width: 100%;
    height: 100%;
    object-fit: cover;

`;

const Info = styled.div`

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const Title = styled.h1`

    color: #fff;
    margin-bottom: 20px;
    filter: drop-shadow(0 0 0.2rem #000);


`;

const Button = styled.button`

    border: 2px pink solid;
    padding: 1rem;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    background-color: pink;

    &:hover {

        background-color: #fff;
        border: 2px solid pink;
        color: grey;


    }

`;

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>Shop Now</Button>
            </Info>
            
        </Container>
    )
}

export default CategoryItem
