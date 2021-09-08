import { Badge } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

    height: 60px;
`;

const Wrapper = styled.div `

    padding: 1rem 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

const Logo = styled.div`

    flex: 1;
    display: flex;
    align-items: center;

`;

const SearchContainer = styled.div`

    display: flex;
    flex: 1;
    text-align: center;
    
    margin-left: 25px;
    padding: 5px;

`;

const Input = styled.input`
    border: none;
    border: 0.5px solid lightgray;
    margin-right: 1rem;
`;

const MenuItem = styled.div`

    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 14px;
    cursor: pointer;

`;


const Navbar = () => {
    return (
        <Container>

            <Wrapper>
                <Logo>LOGO</Logo>
                    <SearchContainer>
                        <Input/>
                        <Search />
                    </SearchContainer>

                        <MenuItem>Register</MenuItem>
                        <MenuItem>Sign In</MenuItem>
                        <MenuItem>
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </MenuItem>
            </Wrapper>
        </Container>
            
    )
}

export default Navbar
