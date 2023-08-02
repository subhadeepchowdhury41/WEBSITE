'use client'
import '../../../styles/administration/icc/icc.css'
import React from 'react';
import NavBar from '../../sections/appbar/secondNav';
import Footer from '../../sections/footer/footer';
import Sidebar from '../../designSystem/sidebar';
import HEADER from '../../designSystem/header';

const array = [
  {
    headings: [
      { label: "IIIT Kalyani Internal Complaint Committee", id: 1 },
      { label: "Office Memorandum", id: 2 },
      { label: "Notification and Act", id: 3 },
      { label: "Rules", id: 4 },
      { label: "Handbook On Sexual Harassment of Women at Workplace", id: 5 },
    ],
  },
  {
    subheadings: [
      {
        label: "",
        link: "",
      },
    ],
  },
  {
    subheadings: [
      {
        label: "",
        link: "",
      },
    ],
  },
  {
    subheadings: [
      {
        label: "",
        link: "",
      },
    ],
  },
  {
    subheadings: [
      {
        label: "",
        link: "",
      },
    ],
  },
  {
    subheadings: [
      {
        label: "",
        link: "",
      },
    ],
  },
  
];

const ICC = () => {

  return (
    <>
      <NavBar/>
      <div className="icc-container">
        <Sidebar location='Administration > ICC' page="ICC" array={array}/>
        <div className="icc-body">
            <div className="icc-header">
                <HEADER text='Internal Complaint Committee'/>
            </div>
            <div className="icc-links">
                <a href='http://iiitkalyani.ac.in/images/icc/IIIT%20Kalyani%20Internal%20Complaints%20Committee.pdf' target='_blank' rel='noreferrer' className="link">
                    IIIT Kalyani Internal Complaint Committee
                </a>
                <a href='http://iiitkalyani.ac.in/images/icc/Office%20Memorandum.pdf' target='_blank' rel='noreferrer' className="link">
                    Office Memorandum
                </a>
                <a href='' target='_blank' rel='noreferrer' className="link">
                    Notification and Act
                </a>
                <a href='' target='_blank' rel='noreferrer' className="link">
                    Rules
                </a>
                <a href='' target='_blank' rel='noreferrer' className="link">
                    Handbook On Sexual Harassment of Women at Workplace
                </a>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ICC;