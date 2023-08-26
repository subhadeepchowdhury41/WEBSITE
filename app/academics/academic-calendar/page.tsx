'use client'
import NavBar from '../../sections/appbar/appbar'

import Footer from '../../sections/footer/footer'
import React from 'react'
import '../../../styles/academiccalender/academiccalender.css'
import data1 from './data1'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { alignProperty } from '@mui/material/styles/cssUtils'
import { useEffect } from 'react'

function AcademicCalendar() {
    useEffect(() => {
        document.title =
            "Academic Calendar | Indian Institute of Information Technology, Kalyani";
    }, []);
    return (
        <React.Fragment>
            <div className='h-[212px] bg-[rgba(0,0,0,0.8)] h-set-mobile'>
                <NavBar isHomepage={false} />
            </div>
            <div className='flexCon main-container'>
                <h1>Academic Calendar and Holiday List</h1>
                <div className='flexCon main-calender'>
                    <h2>Academic Calendar</h2>
                    {data1.calenderdata.map((e) => {
                        return (
                            <div className='flexCon card' key={e.id}>
                                <CalendarMonthIcon style={{ color: 'black', fontSize: '30px' }} />
                                {e.name}
                                <a href={e.link} className='card-btn' target='_blank'>PDF</a>
                            </div>
                        );
                    })}
                </div>
                <div className='flexCon main-calender'>
                    <h2>Holiday List</h2>
                    {data1.holidaydata.map((e) => {
                        return (
                            <div className='flexCon card' key={e.id}>
                                <CalendarMonthIcon style={{ color: 'black', fontSize: '30px' }} />
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

export default AcademicCalendar