'use client'
import { useSearchParams } from 'next/navigation';
import NavBar from '../../../sections/appbar/secondNav';
import Footer from '../../../sections/footer/footer';
import Carousel from '../carousel';
import React from 'react'
import Data from '../facilityData';

function Facility() {
    const searchParams = useSearchParams();
    let slug = searchParams.get('slug')
    const filterData = Data.filter(item => item.slug === slug)
    console.log()
    return (
        <>
            <NavBar />
            <div className='w-full flex items-center justify-center mt-8'>
                <div className='w-full max-w-[1250px] font-bold text-3xl'>
                    {filterData[0].heading}
                </div>
            </div>
            <Carousel carouselData={filterData[0].tags} />
            <Footer />
        </>
    )
}

export default Facility