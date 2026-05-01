import Banner from '@/components/shared/Banner';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div>
            <Banner></Banner>
            {children}
        </div>
    );
};

export default MainLayout;