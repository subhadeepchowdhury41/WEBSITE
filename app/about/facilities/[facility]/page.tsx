'use client'
import { useSearchParams } from 'next/navigation';
import NavBar from '../../../sections/appbar/secondNav';
import Footer from '../../../sections/footer/footer';
import Carousel from '../carousel';
import React from 'react'
import Data from '../facilityData';
import HEADER from '../../../designSystem/header';


function Facility() {
    const searchParams = useSearchParams();
    let slug = searchParams.get('slug')
    const filterData = Data.filter(item => item.slug === slug)
    console.log();
    return (
        <>
            <NavBar />
            <div className='w-full flex items-center justify-center mt-8'>
                <HEADER text={filterData[0].heading} />
            </div>
            <Carousel carouselData={filterData[0].tags} />
            <div className='w-full h-fit flex items-center justify-center'>
                <div className='m-[40px] max-w-[1250px]'>
                    {filterData[0].paragraph?.map((item, index) => !item.text.startsWith('@$') ? (
                        <div className={item.style} key={index}>
                            {item.text}<br /><br />
                        </div>
                    )
                        :
                        item.text.split(',')[0].trim() == '@$-a-tag' ?
                            <div className={item.style}>
                                <a key={index} href={item.text.split(',')[2].trim()}>{item.text.split(',')[1].trim()}</a>
                            </div>
                            :
                            <div></div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Facility