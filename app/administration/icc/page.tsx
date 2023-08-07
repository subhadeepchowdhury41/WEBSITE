'use client'

import React from 'react'
import FileCopyIcon from '@mui/icons-material/FileCopy';
import NavBar from '../../sections/appbar/secondNav';
import Footer from '../../sections/footer/footer';
import data from './data';
import '../../../styles/coursestr/coursestr.css';
import { useEffect } from 'react';

const page = () => {
  useEffect(() => {
    document.title =
      "ICC | Indian Institute of Information Technology, Kalyani";
  }, []);
  return (
    <React.Fragment>
      <NavBar />
      <div className='flexCon main-container'>
        <h1>Internal Complaint Committee</h1>
        <div className='flexCon main-calender'>
          <h2>Handbooks</h2>
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

      </div>
      <Footer />
    </React.Fragment>
  )
}

export default page