'use client'
import React from 'react'
import NavBar from '../../sections/appbar/appbar'

import Footer from '../../sections/footer/footer'
import '../../../styles/regulations/regulations.css';
import data from './data';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useEffect } from 'react';

const page = () => {
    useEffect(() => {
        document.title =
            "Regulations | Indian Institute of Information Technology, Kalyani";
    }, []);
    return (
        <React.Fragment>
            <div className='h-[220px] bg-[rgba(0,0,0,0.8)] h-set-mobile'>
                <NavBar isHomepage={false} />
            </div>
            <div className="flexCon1 main-container">
                <h1 style={{ marginBottom: "20px" }}>Regulations</h1>
                <div className="flexCon main-course">
                    <h2>UG Regulations</h2>
                    <div className='flexCon2'>
                        {data.ug.map((e) => {
                            return (
                                <div className='card' key={e.id}>
                                    <a href={e.link} className='flexCon card-btn' target='_blank'>{e.name}</a>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="flexCon main-course">
                    <h2>PG Regulations</h2>
                    <div className='flexCon2'>
                        {data.pg.map((e) => {
                            return (
                                <div className='flexCon card' key={e.id}>
                                    <a href={e.link} className='flexCon card-btn' target='_blank'>{e.name}</a>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="flexCon main-course">
                    <h2>Ph.D. Regulations</h2>
                    <div className='flexCon2'>
                        {data.phd.map((e) => {
                            return (
                                <div className='flexCon card' key={e.id}>
                                    <a href={e.link} className='flexCon card-btn' target='_blank'>{e.name}</a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default page