'use client'
import NavBar from '../../sections/appbar/appbar'

import Footer from '../../sections/footer/footer'
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import data from './data'
import { match } from 'assert'
import '../../../styles/academics/program/program.css'
import Link from 'next/link'
import { useEffect } from 'react'

function ProgramPage() {
    useEffect(() => {
        document.title =
            "Programmes | Indian Institute of Information Technology, Kalyani";
    }, []);
    const handleButtonClick = (pdfFileName: string) => {
        // Set the PDF file path based on the file name and the "public" folder location
        const pdfUrl = `/${pdfFileName}`;

        // Open the PDF URL in a new tab/window
        window.open(pdfUrl, "_blank");
    };
    const [activeIndex, setActiveIndex] = useState(1);
    const [activeId, setActiveId] = useState(1);
    const [matchingItem, setMatchingItem] = useState(
        data.find((item) => item.index === activeIndex)?.children.find((child) => child.id === activeId)
    );
    const [windowWidth, setWindowWidth] = useState(1200);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div>
            <div className='h-[212px] bg-[rgba(0,0,0,0.8)] h-set-mobile'>
                <NavBar isHomepage={false} />
            </div>
            <div className='flex w-full h-fit relative resp-program'>
                <div className={`flex-[3] w-full h-[100vh] bg-[rgb(245,235,209)] pos-adj ${windowWidth < 1200 ? 'relative top-0' : 'sticky top-[70px]'} `}>
                    <Sidebar data={data} setActiveIndex={setActiveIndex} setActiveId={setActiveId} setMatchingItem={setMatchingItem}
                        ActiveIndex={activeIndex} ActiveId={activeId} />
                </div>
                <div className='flex-[8] w-full h-auto py-[16px] px-[64px] flex flex-col gap-4 pd-adjst'>
                    <div className='text-[28px] font-semibold'>{matchingItem?.label}</div>
                    <div className='w-full aspect-[2] ht-adj' style={{ backgroundImage: `url(${matchingItem?.img})`, backgroundSize: '100% 100%', borderRadius: "10px", boxShadow: "0 0 5px grey" }}></div>
                    <div className='w-full text-[18px]' style={{ fontSize: "16px", textAlign: "justify" }}>
                        {matchingItem?.text}
                    </div>
                </div>
                <div className={`flex-[2] w-full h-[100vh] bg-[rgb(245,235,209)] flex flex-col gap-1 p-[16px] ${windowWidth < 1200 ? 'relative top-0' : 'sticky top-[70px]'}`}>
                    <div className='font-semibold text-[26px] '>Resources</div>
                    {matchingItem?.resources?.map((index) => {
                        return (
                            // <a href={index.url} target="_blank" rel="noopener noreferrer">
                            <div style={{ cursor: "pointer" }} onClick={() => handleButtonClick(index.url)} className='border border-black p-[4px] my-1 rounded-[5px]'>{index.heading}</div>
                            // </a>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default ProgramPage