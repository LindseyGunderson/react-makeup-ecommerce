import { Badge } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {mobile} from '../responsive';

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

    height: 60px;
    ${mobile({ height: "50px"})}

`;

const Wrapper = styled.div `

    padding: 1rem 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0"})}
`;

const Logo = styled.h1`

    flex: 1;
    display: flex;
    align-items: center;
    
    ${mobile({ fontSize: "16px" })}

`;

const SearchContainer = styled.div`

    display: flex;
    text-align: center;
    
    margin-left: 25px;
    padding: 5px;

`;

const Input = styled.input`
    border: none;
    border: 0.5px solid lightgray;
    margin-right: 0.5rem;
    padding-left: 5px;

    ${mobile({ width: "60px" })}
`;

const NavLinks = styled.div `
    
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;

    ${mobile({ justifyContent: "center", flex: "2"})}


`;

const MenuItem = styled.div`

    font-size: 14px;
    cursor: pointer;

    ${mobile({ fontSize: "12px", marginLeft: "10px"})}

`;


const Navbar = () => {
    return (
        <Container>

            <Wrapper>
                <Logo>Such Co.</Logo>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search/>
                    </SearchContainer>

                    <NavLinks>
                        <MenuItem>Register</MenuItem>
                        <MenuItem>Sign In</MenuItem>
                        <MenuItem>
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </MenuItem>
                    </NavLinks>
            </Wrapper>
        </Container>
            
    )
}

export default Navbar
