'use client';
import '../../../styles/about/carousel/carousel.css'
import NavBar from '../../sections/appbar/appbar'
import Footer from '../../sections/footer/footer';
import Carousel from './carousel';
import { useEffect } from 'react';
import Data from './facilityData'
import Card from './facilityCard'
import React from 'react';

const App: React.FC = () => {
    const carouselData = [{
        index: 0,
        url: '/facility/campus/campus-cover.jpg'
    },
    {
        index: 1,
        url: '/facility/labs/labs-cover.jpg'
    },
    {
        index: 2,
        url: '/facility/library/library-cover.jpg'
    },
    {
        index: 3,
        url: '/facility/hostel/hostel-cover.jpg'
    },
    {
        index: 4,
        url: '/facility/medical_services/medical-services-cover.jpg'
    },
    {
        index: 5,
        url: '/facility/other_amenities/other-amenities-cover.jpg'
    }
    ]
    useEffect(() => {
        document.title = 'Facilities | Indian Institute of Information Technology, Kalyani';
    }, []);
    return (
        <>
            <div className='h-[220px] bg-[rgba(0,0,0,0.8)] h-set-mobile'>
                <NavBar isHomepage={false} />
            </div>
            <Carousel carouselData={carouselData} />
            <div className='w-full h-auto flex flex-col pad-adjust items-center justify-center'>
                {Data.map((index) => {
                    return (
                        <React.Fragment key={index.slug}>
                            <div className='bg-gray-200 h-[2px] max-w-[1250px] text-justify w-full my-8'></div>
                            <Card cellData={index} />
                        </React.Fragment>

                    )

                })}
            </div>
            <Footer />
        </>
    );
};

export default App;
