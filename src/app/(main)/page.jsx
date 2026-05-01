import PopularProducts from '@/components/Home/PopularProducts';
import SummerCare from '@/components/Home/SummerCare';
import TopBrands from '@/components/Home/TopBrands';
import React from 'react';

const Home = () => {
    return (
        <div>
            <PopularProducts></PopularProducts>
            <SummerCare></SummerCare>
            <TopBrands></TopBrands>
        </div>
    );
};

export default Home;