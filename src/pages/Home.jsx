
import React from 'react'
import Advertisement from '../components/Advertisement';
import HeaderBanner from '../components/HeaderBanner';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';

const Home = () => {
    return (
        <div>
            
            <Advertisement />
            <Navbar />

            <HeaderBanner />
            <Categories />
        </div>
    )
}

export default Home
