'use client'
import NavBar from '../../sections/appbar/secondNav'
import Footer from '../../sections/footer/footer'
import React from 'react'
import '../../../styles/academiccalender/academiccalender.css'
import data1 from './data1'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
function AcademicCalendar() {
    return (
        <React.Fragment>
            <NavBar />
            <div className='flexCon main-container'>
                <h1>Academic Calendar and Holiday List</h1>
                <div className='flexCon main-calender'>
                    <h2>Academic Calendar</h2>
                    {data1.calenderdata.map((e)=>{
                        return (
                            <div className='flexCon card' key={e.id}>
                                <CalendarMonthIcon style={{color:'black',fontSize:'30px'}}/>
                                {e.name}
                                <a href={e.link} className='card-btn' target='_blank'>PDF</a>
                            </div>
                        );
                    })}
                </div>
                <div className='flexCon main-calender'>
                <h2>Holiday List</h2>
                {data1.holidaydata.map((e)=>{
                         return (
                            <div className='flexCon card' key={e.id}>
                                <CalendarMonthIcon style={{color:'black',fontSize:'30px'}}/>
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