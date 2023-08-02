'use client'
import React from 'react'
import NavBar from '../../sections/appbar/secondNav'
import Footer from '../../sections/footer/footer'
import '../../../styles/newedupolicy/newedupolicy.css'
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import data from './data'
const page = () => {
  return (
    <React.Fragment>
        <NavBar/>
        <div className="flexCon main-container">
            <h1>New National Education Policy-2020</h1>
            <div className='flexCon main-calender'>
            {data.map((e)=>{
                        return (
                            <div className='flexCon card' key={e.id}>
                                <TextSnippetIcon style={{color:'black',fontSize:'30px'}}/>
                                {e.name}
                                <a href={e.link} className='card-btn' target='_blank'>PDF</a>
                            </div>
                        );
                    })}
            </div>
        </div>
        <Footer/>
    </React.Fragment>
  )
}

export default page