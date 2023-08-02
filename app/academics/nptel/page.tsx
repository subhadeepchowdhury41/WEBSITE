'use client'
import NavBar from '../../sections/appbar/secondNav'
import Footer from '../../sections/footer/footer'
import React from 'react'
import Carousel from './carousel'
import Data from './data'

function Nptel() {
    return (
        <React.Fragment>
            <NavBar />

            {Data.map((index) => {
                return (
                    <div className='w-full flex items-center justify-center px-2'>
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