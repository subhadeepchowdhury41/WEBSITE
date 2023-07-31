'use client'
import NavBar from '../../sections/appbar/secondNav'
import Footer from '../../sections/footer/footer'
import React from 'react'
import Carousel from '../../about/facilities/carousel'
import Data from './data'

function Nptel() {
    return (
        <React.Fragment>
            <NavBar />

            {Data.map((index) => {
                return (
                    <div className='w-full flex flex-col items-center justify-center mt-8 px-1'>
                        <div className='w-full max-w-[1258px] text-3xl font-bold'>{index.heading}</div>

                        <Carousel carouselData={index.images} />
                        {index.paragraphs.map((i) => {
                            return (
                                <div className='w-full max-w-[1258px] mb-8 px-1'>{i.text}</div>
                            )
                        })}
                    </div>
                )
            })}
            <Footer />
        </React.Fragment>
    )
}

export default Nptel