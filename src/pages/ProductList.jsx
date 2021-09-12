
import styled from 'styled-components'
import Advertisement from '../components/Advertisement';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Footer from '../components/Footer';

import {mobile} from '../responsive';

const Container = styled.div`

`;

const Title = styled.h1`

    margin: 20px;

`;

const FilterContainer = styled.div`

    display: flex;
    justify-content: space-between;
   

`;

const Filter = styled.div`

    margin: 20px;

    ${mobile({ margin: "5px 24px" })}

`;

const FilterText = styled.span`

    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ fontSize: "18px", marginRight: "0" })}
`;

const Select = styled.select`

    padding: 10px;

`;

const Option = styled.option`



`;

const ProductList = () => {
    return (
        <Container>
            <Advertisement />
            <Navbar />

            <Title>Skincare</Title>

            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected> Skincare Type </Option>
                        <Option>Moisturizers </Option>
                        <Option> Cleansers</Option>
                        <Option> Masks </Option>
                        <Option> Treatments </Option>
                    </Select>
                </Filter>

                <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                        <Option disabled selected> Price </Option>
                        <Option>Low to High </Option>
                        <Option> High to Low</Option>
                        <Option> Best Sellers </Option>
                    </Select>
                </Filter>
            </FilterContainer>

            <Products />

            <Footer />
        </Container>
    )
}

export default ProductList
