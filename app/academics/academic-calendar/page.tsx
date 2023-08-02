'use client'
import NavBar from '../../sections/appbar/secondNav'
import Footer from '../../sections/footer/footer'
import Comingsoon from '../../designSystem/comingsoon'
import { useEffect } from "react";


import React from 'react'

function AcademicCalendar() {
    useEffect(() => {
        document.title =
            "Academic Calendar | Indian Institute of Information Technology, Kalyani";
    }, []);
    return (
        <React.Fragment>
            <NavBar />
            <Comingsoon />
            <Footer />
        </React.Fragment>
    )
}

export default AcademicCalendar