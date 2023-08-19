'use client'
import React,{useEffect} from 'react';
import Image from 'next/image';
import '../../../styles/research/iic/iic.css'
import NavBar from '../../sections/appbar/appbar';
import Footer from '../../sections/footer/footer';
import iicData from './data'

const IIC = () => {
  useEffect(() => {
    document.title =
      "IIC | Indian Institute of Information Technology, Kalyani";
  }, []);
  return (
    <>
      <div className='h-[220px] bg-[rgba(0,0,0,0.8)] h-set-mobile'>
        <NavBar isHomepage={false} />
      </div>
      <div className="fluid-center iic-main-page">
        <h1>Institution&apos;s Innovation Council</h1>
        <div className='fluid-center iic-certificate'>
        <h2>Certificate-IIC</h2>
        <Image src={iicData.certificate} width={1000} height={600} className="iic-certificate-img" alt=''/>
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

export default IIC;