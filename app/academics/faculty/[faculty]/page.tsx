'use client'
import { useSearchParams } from 'next/navigation';
import NavBar from '../../../sections/appbar/secondNav';
import Footer from '../../../sections/footer/footer';
import React,{ useEffect } from 'react';
import data from '../facultyData';
import EmailIcon from '@mui/icons-material/Email';
import '../../../../styles/academics/faculty/faculties.css';
import Image from 'next/image';


function Faculty() {

    useEffect(() => {
      window.scrollTo(0,0);
    }, [])
    

    const searchParams = useSearchParams();
    let slug = searchParams.get('slug')
    const filterData = data.filter(item => item.slug === slug)
    return (
        <>
            <NavBar />
            <div className='fluid-center fac-main-page'>
                <div className='fluid-center fac-main relative'>
                <div className="fluid-center relative mx-4 -mt-28 overflow-hidden card">
                    <Image src={String(filterData[0].imgLink)} height={500} width={500} className='card-image' alt='image' />
                </div>
                    <div className='fluid-center profile-detail'>
                        <h1>{filterData[0].name}</h1>
                        <p>{filterData[0].genInfo.edu}</p>
                        <p>Department: {filterData[0].genInfo.dept}</p>
                        <p><EmailIcon className="profile-icon" color="primary" style={{ 'color': 'black' }} onClick={() => { navigator.clipboard.writeText(filterData[0].email) }} /> : {filterData[0].email}</p>
                        <div className='fluid-center'>
                        {filterData[0].cv.length>0 && <a href={filterData[0].cv} className='btn' target="_blank" rel="noreferrer">CV</a>}
                        {filterData[0].moreInfoLink.length>0 && <a href={filterData[0].moreInfoLink} className='btn' target="_blank" rel="noreferrer">More Details</a>}
                        {filterData[0].hasOwnProperty('vidLink') && <a href={filterData[0].vidLink} className='btn' target="_blank" rel="noreferrer">Youtube Link</a>}
                        </div>
                    </div>
                    <div className='fluid-center res-int'>
                        {filterData[0].researchInst.map((item)=>{
                            return(
                                <div key={item.title} className='fluid-center inter-details'>
                                    <h1>{item.title}</h1>
                                    <ul className='list-disc'>
                                        {item.items.map((e)=>{
                                            return(
                                                <li key={e}>{e}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })}                        
                    </div>
                    <div className='fluid-center res-int f-d-c'>
                        {filterData[0].mainData?.map((e)=>{
                            return(
                                <div key={e.HeadingElement} className='fluid-center publi f-d-c mar'>
                                    <h1 className='pad'>{e.HeadingElement}</h1>
                                    <h2>{e.subHeading}</h2>
                                    <ul className='list-disc mar'>
                                        {e.elements.map((d)=>{
                                            return(
                                                <li className='mar' key={d.elementData}>{d.elementData}
                                                {d.link.length>0 && <a className='sml-btn' href={d.link} target="_blank" rel="noreferrer">Link</a>}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })}                       
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Faculty;