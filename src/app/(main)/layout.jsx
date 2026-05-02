import Banner from '@/components/shared/Banner';
import React from 'react';

export const metadata = {
    title: "Sun Cart | Home",
    description: "Sun-Cart homepage",
};

const MainLayout = ({ children }) => {
    return (
        <div>
            <Banner></Banner>
            {children}
        </div>
    );
};

export default MainLayout;