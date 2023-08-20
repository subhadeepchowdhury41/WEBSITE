'use client'
import NavBar from '../../sections/appbar/appbar'

import Footer from '../../sections/footer/footer'
import React from 'react'
import Carousel from './carousel'
import Data from './data'
import { useEffect } from "react";
import { textAlign } from '@mui/system'


function Nptel() {
    useEffect(() => {
        document.title =
            "NPTEL | Indian Institute of Information Technology, Kalyani";
    }, []);
    return (
        <React.Fragment>
            <div className='h-[212px] bg-[rgba(0,0,0,0.8)] h-set-mobile'>
                <NavBar isHomepage={false} />
            </div>

            {Data.map((index) => {
                return (
                    <div className='flex items-center justify-center text-justify px-2' style={{ width: "90%", margin: "auto" }}>
                        <div className='w-full max-w-[1000px] flex flex-col items-center justify-center mt-8'>
                            <div className='w-full text-3xl font-bold'>{index.heading}</div>

                            <Carousel carouselData={index.images} />
                            {index.paragraphs.map((i) => {
                                return (
                                    <div className='w-full mb-8'>{i.text}</div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
            <Footer />
        </React.Fragment>
    )
}

export default Nptel