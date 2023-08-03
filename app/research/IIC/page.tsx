'use client'
import React,{useEffect} from 'react';
import Image from 'next/image';
import '../../../styles/Research/IIC/iic.css'
import NavBar from '../../sections/appbar/secondNav';
import Footer from '../../sections/footer/footer';
import iicData from './data'

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
        <Image src={iicData.certificate} width={300} height={200} className="iic-certificate-img" alt=''/>
        </div>
        <div className="fluid-center iic-buttons">
        {iicData.iicData.map((e)=>{
          return (
            <a key={e.id} href={e.link} target="_blank" rel="noreferrer" className="fluid-center iic-btn">
              {e.title}
            </a>
          )
        })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PHDStudents;