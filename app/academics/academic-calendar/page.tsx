'use client'
import NavBar from '../../sections/appbar/secondNav'
import Footer from '../../sections/footer/footer'
import Comingsoon from '../../designSystem/comingsoon'

import React from 'react'

function AcademicCalendar() {
    return (
        <React.Fragment>
            <NavBar />
            <Comingsoon />
            <Footer />
        </React.Fragment>
    )
}

export default AcademicCalendar