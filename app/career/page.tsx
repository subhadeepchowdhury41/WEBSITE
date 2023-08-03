"use client"
import Image from 'next/image';
import React from 'react'
import NavBar from '../sections/appbar/secondNav';
import Footer from '../sections/footer/footer';
import '../../styles/Career/career.css'
import careerData from './data'
import { useEffect } from 'react';

const career = () => {
    const handleClick = (url: string) => {
        window.open(url, "_blank");
    }
    useEffect(() => {
        document.title =
            "Carreer | Indian Institute of Information Technology, Kalyani";
    }, []);
    return (
        <>
            <NavBar />
            <div className='fluid-center carrer-main'>
                <h1>Career</h1>
                <div className="fluid-center career-info">
                    <h2>Career Information</h2>
                    <div className='fluid-center career-info-group'>
                        {careerData.careerPDF.map((item) => {
                            return (
                                <div key={item.id} className="fluid-center career-buttons">
                                    {item.name}
                                    <div className='fluid-center career-btn-group'>
                                        <Image src={careerData.pdfIcon} width={50} height={100} className='career-btn' onClick={() => { handleClick(item.link) }} alt={''} />
                                        {item.doc.length > 0 && <Image src={careerData.docIcon} width={50} height={100} className='career-btn' onClick={() => { handleClick(item.doc) }} alt={''} />}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="fluid-center career-info">
                    <h2>Forms</h2>
                    <div className='fluid-center career-info-group'>
                        {careerData.carrerForm.map((item) => {
                            return (
                                <div key={item.id} className="fluid-center career-buttons">
                                    {item.name}
                                    <div className='fluid-center career-btn-group'>
                                        <Image src={careerData.pdfIcon} width={50} height={100} className='career-btn' onClick={() => { handleClick(item.link) }} alt={''} />
                                        {item.doc.length > 0 && <Image src={careerData.docIcon} width={50} height={100} className='career-btn' onClick={() => { handleClick(item.doc) }} alt={''} />}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default career;
