'use client'

import React from 'react'
import FileCopyIcon from '@mui/icons-material/FileCopy';
import NavBar from '../../sections/appbar/appbar'

import Footer from '../../sections/footer/footer';
import data from './data';
import '../../../styles/coursestr/coursestr.css';
import { useEffect } from 'react';

const page = () => {
    useEffect(() => {
        document.title =
            "Course Structure | Indian Institute of Information Technology, Kalyani";
    }, []);
    return (
        <React.Fragment>
            <div className='h-[212px] bg-[rgba(0,0,0,0.8)] h-set-mobile'>
                <NavBar isHomepage={false} />
            </div>
            <div className='flexCon main-container'>
                <h1>Course Structure</h1>
                <div className='flexCon main-calender'>
                    <h2>B.Tech. CSE</h2>
                    {data.btechcse.map((e) => {
                        return (
                            <div className='flexCon card' key={e.id}>
                                <FileCopyIcon style={{ color: 'black', fontSize: '30px' }} />
                                {e.name}
                                <a href={e.link} className='card-btn' target='_blank'>PDF</a>
                            </div>
                        );
                    })}
                </div>
                <div className='flexCon main-calender'>
                    <h2>B.Tech. ECE</h2>
                    {data.btechece.map((e) => {
                        return (
                            <div className='flexCon card' key={e.id}>
                                <FileCopyIcon style={{ color: 'black', fontSize: '30px' }} />
                                {e.name}
                                <a href={e.link} className='card-btn' target='_blank'>PDF</a>
                            </div>
                        );
                    })}
                </div>
                <div className='flexCon main-calender'>
                    <h2>M.Tech</h2>
                    {data.mtech.map((e) => {
                        return (
                            <div className='flexCon card' key={e.id}>
                                <FileCopyIcon style={{ color: 'black', fontSize: '30px' }} />
                                {e.name}
                                <a href={e.link} className='card-btn' target='_blank'>PDF</a>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default page