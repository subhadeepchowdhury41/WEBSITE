'use client'
import React from 'react';
import '../../../styles/Research/IIC/iic.css'
import NavBar from '../../sections/appbar/secondNav';
import Footer from '../../sections/footer/footer';
import { useEffect } from "react";


const PHDStudents = () => {
  useEffect(() => {
    document.title =
      "IIC | Indian Institute of Information Technology, Kalyani";
  }, []);
  return (
    <>
      <NavBar />
      <div className="fluid-center iic-main-page">
        <h1>Institution&apos;s Innovation Council</h1>
        <div className='fluid-center iic-certificate'>
          <h2>Certificate-IIC</h2>
          <img src='https://i.ibb.co/X5H8FXS/IIC-certificate.png' className="iic-certificate-img" alt="certificate" />
        </div>
        <div className="fluid-center iic-buttons">
          <a href='https://iiitkalyani.ac.in/images/downloads/272.2.5%20Letterof%20Reco%20IIIT%20Kalyani.PDF' target="_blank" rel="noreferrer" className="fluid-center iic-btn">
            Annual Report IIC 3.0 compressed
          </a>
          <a href='https://iiitkalyani.ac.in/images/downloads/272.2.5%20RC%20IIIT%20Kalyani.PDF' target="_blank" rel="noreferrer" className="fluid-center iic-btn">
            IIC 4.0 Annual Report IIIT_Kalyani 2021-22
          </a>
          <a href='https://iiitkalyani.ac.in/images/downloads/272.2.5%20RC%20IIIT%20Kalyani.PDF' target="_blank" rel="noreferrer" className="fluid-center iic-btn">
            Innovation and Startup _IIITK_V1.0 (1)
          </a>
          <a href='https://iiitkalyani.ac.in/images/downloads/272.2.5%20RC%20IIIT%20Kalyani.PDF' target="_blank" rel="noreferrer" className="fluid-center iic-btn">
            Expert Committee webpage
          </a>
          <a href='https://iiitkalyani.ac.in/images/downloads/272.2.5%20RC%20IIIT%20Kalyani.PDF' target="_blank" rel="noreferrer" className="fluid-center iic-btn">
            IIC Committee 2022
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PHDStudents;