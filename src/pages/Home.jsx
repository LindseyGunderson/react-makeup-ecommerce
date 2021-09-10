
import React from 'react'
import Advertisement from '../components/Advertisement';
import HeaderBanner from '../components/HeaderBanner';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Products from '../components/Products';

const Home = () => {
    return (
        <div>
            
            <Advertisement />
            <Navbar />

            <HeaderBanner />
            <Categories />
            <Products />

        </div>
    )
}

export default Home
