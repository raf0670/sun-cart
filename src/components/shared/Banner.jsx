import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='relative'>
            <Image src={"https://cdn.dribbble.com/userupload/45623965/file/9f3f48f7d955815c29774210667846a1.jfif?resize=1024x687&vertical=center"} alt='banner' width={1000} height={1000} className='w-full max-h-screen animate__animated animate__zoomIn'></Image>
        </div>
    );
};

export default Banner;