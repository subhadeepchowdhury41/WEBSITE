'use client'
import { useSearchParams } from 'next/navigation';
import NavBar from '../../../sections/appbar/appbar'
import Footer from '../../../sections/footer/footer';
import Carousel from '../carousel';
import React from 'react'
import Data from '../facilityData';
import HEADER from '../../../designSystem/header';
import "../page.css"


function Facility() {
    const searchParams = useSearchParams();
    let slug = searchParams.get('slug')
    const filterData = Data.filter(item => item.slug === slug)
    return (
        <>
            <div className='h-[212px] bg-[rgba(0,0,0,0.8)] h-set-mobile'>
                <NavBar isHomepage={false} />
            </div>
            <div className='w-full  font-sans flex items-center justify-center mt-8'>
                <HEADER text={filterData[0].heading} />
            </div>
            <Carousel carouselData={filterData[0].tags} />
            <div className='w-full h-fit flex items-center justify-center txtxm'>
                <div style={{ backgroundColor: "whitesmoke", padding: "5%", boxShadow: "0 0 2px #c7ffff", borderRadius: "10px", width: "95%", marginBottom: "5vh" }} className='max-w-[1250px]'>
                    {filterData[0].paragraph?.map((item, index) => !item.text.startsWith('@$') ? (
                        <div style={{ marginBottom: "10px" }} className={item.style} key={index}>
                            {item.text}<br />
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