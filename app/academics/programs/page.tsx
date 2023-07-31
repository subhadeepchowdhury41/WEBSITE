'use client'
import NavBar from '../../sections/appbar/secondNav'
import Footer from '../../sections/footer/footer'
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import data from './data'
import { match } from 'assert'
import '../../../styles/program/program.css'
import Link from 'next/link'

function ProgramPage() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [activeId, setActiveId] = useState(1);
    const [matchingItem, setMatchingItem] = useState(
        data.find((item) => item.index === activeIndex)?.children.find((child) => child.id === activeId)
    );
    console.log(matchingItem?.img)
    return (
        <div>
            <NavBar />
            <div className='flex w-full h-fit relative resp-program'>
                <div className='flex-[3] w-full h-[100vh] bg-[rgb(245,235,209)] pos-adj sticky top-[70px]'>
                    <Sidebar data={data} setActiveIndex={setActiveIndex} setActiveId={setActiveId} setMatchingItem={setMatchingItem}
                        ActiveIndex={activeIndex} ActiveId={activeId} />
                </div>
                <div className='flex-[8] w-full h-auto py-[16px] px-[64px] flex flex-col gap-4 pd-adjst'>
                    <div className='text-[28px] font-semibold'>{matchingItem?.label}</div>
                    <div className='w-full aspect-[2] ht-adj' style={{ backgroundImage: `url(${matchingItem?.img})`, backgroundSize: '100% 100%' }}></div>
                    <div className='w-full text-[18px]'>
                        {matchingItem?.text}
                    </div>
                </div>
                <div className='flex-[2] w-full h-[100vh] bg-[rgb(245,235,209)] flex flex-col gap-1 p-[16px] sticky top-[70px]'>
                    <div className='font-semibold text-[26px] '>Resources</div>
                    {matchingItem?.resources?.map((index) => {
                        return (
                            <a href={index.url} target="_blank" rel="noopener noreferrer">
                                <div className='border border-black p-[4px] rounded-[5px]'>{index.heading}</div>
                            </a>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProgramPage