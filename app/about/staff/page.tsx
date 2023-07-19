'use client'
import '../../../styles/staff/staff.css'
import React from 'react';
import { useState } from 'react';
// import data from './data'
// import MailIcon from '@mui/icons-material/Mail';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InsertLinkIcon from '@mui/icons-material/InsertLink';
import NavBar from '../../sections/appbar/secondNav';
import Footer from '../../sections/footer/footer';
import HEADER from '../../designSystem/header';
import logo from "../../../assets/logos/iiit_kalyani_logo.png"

const PHDStudents = () => {

    return (
        <>
        <div className="navbar">
            <NavBar/>
        </div>
        <div className='why-container'>
            
            <div className="why-main-heading">
                <HEADER text='IIIT Kalyani Staff'/>
            </div>
            <span className='staff-sub-header'>
                {/* <hr/> */}                   
                <p>IIIT Kalyani Technical Team</p>
                <hr/>         
            </span>
            <div className="staff-card">
            
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default PHDStudents;