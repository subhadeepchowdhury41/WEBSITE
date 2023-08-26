"use client"
import React from 'react';
import NavBar from '../sections/appbar/appbar'
import Footer from '../sections/footer/footer';
import '../../styles/director/director.css'
import Image from 'next/image';
import dirData from './data';

const director = () => {
  return (
    <>
      <div className='h-[212px] bg-[rgba(0,0,0,0.8)] h-set-mobile'>
        <NavBar isHomepage={false} />
      </div>
      <div className='fluid-center director-main'>
        <div className='fluid-center director-img'>
          <Image width={1000} height={1000} src={dirData.dirImg} alt="" />
        </div>
        <div className='fluid-center director-main-info'>
          <h1>Message from The Director&apos;s Desk</h1>
          <p>It is my pleasure to be associated with the Indian Institute of Information Technology, Kalyani as its Director. Before taking up this assignment, I have been a Professor in the Dept. of Electronics and Electrical Communication Engineering, Indian Institute of Technology, Kharagpur and also Associate Dean, Faculty of Engineering and Architecture of the institute. From my undergraduate studies till PhD I have been in the Computer Science and Engineering specialization. In this background, I joining IIIT Kalyani give the opportunity to explore both the software and hardware challenges of Information Technology and its applications.</p>
          <p>Information technology has become one of the pillars in both societal and economic developments of countries, including India. Its effect has started reaching almost every remote corners of the country, impacting the life-style and financial stabilization of them. Institutes on information technology have the mandate to play a significant role in the process. Keeping in view this key observation, I visualize IIIT Kalyani to come up with full vigor and play a pivotal role in the all-round development of not only the region or state, but also the entire country.</p>
          <p>IIIT Kalyani has a vibrant, energetic and young set of people as faculties. Apart from teaching the subjects, they are very active researchers and developers as well. Our students are the power to carry out the R&D activities. A combination of the two has given thrust to the overall growth of the institute over the years. In the coming days, I am sure, the institute will establish itself as a pioneering one in IT education in the country, contributing significantly to its advancement to the new era.</p>
          <div className='fluid-center director-sig'>
            <Image width={1000} height={100} src={dirData.dirSign} alt="" />
            <h2>Director</h2>
            <h2>Professor, E&ECE, IIT Kharagpur</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default director;
