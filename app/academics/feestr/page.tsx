'use client'

import React from 'react'
import NavBar from '../../sections/appbar/secondNav'
import Footer from '../../sections/footer/footer'
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import data from './data'
import '../../../styles/feestr/feestr.css'

const page = () => {
    return (
        <React.Fragment>
            <NavBar />
            <div className='flexCon main-container'>
                <h1>Fee Structure and Payments</h1>
                <div className='flexCon main-calender'>
                    <h2>Fee Structure for B.Tech. (CSE and ECE)</h2>
                    {data.btech.map((e) => {
                        return (
                            <div className='flexCon card' key={e.id}>
                                <FileCopyIcon style={{ color: 'black', fontSize: '30px' }} />
                                {e.name}
                                <a href={e.link} className='card-btn' target='_blank'>PDF</a>
                            </div>
                        );
                    })}
                </div>
                <div className='flexCon main-calender'>
                    <h2>Fee Structure for M.Tech.</h2>
                    {data.mtech.map((i) => {
                        return (
                            <div className='flexCon card' key={i.id}>
                                <FileCopyIcon style={{ color: 'black', fontSize: '30px' }} />
                                {i.name}
                                <a href={i.link} className='card-btn' target='_blank'>PDF Soon</a>
                            </div>
                        );
                    })}
                </div>
                <div className='flexCon main-calender'>
                    <h2>Fee Structure for Ph.D.</h2>
                    {data.phd.map((ind) => {
                        return (
                            <div className='flexCon card' key={ind.id}>
                                <FileCopyIcon style={{ color: 'black', fontSize: '30px' }} />
                                {ind.name}
                                <a href={ind.link} className='card-btn' target='_blank'>PDF</a>
                            </div>
                        );
                    })}
                </div>
                <div className='flexCon main-calender'>
                    <h3>Note : </h3>
                    <p className='noteinfo'>All the payments to IIIT Kalyani are received through Payment Portal only. For payment click on "PAY" tab below. Please read instructions before proceeding for payment. </p>
                    <h3>Instructions : </h3>
                    <div className='noteinfo'>
                        <p>The students / parents paying the fees through online payment systems should follow the following process for paying the fees.</p>
                        <div className="instruct">
                            <ol style={{ listStyleType: 'roman' }}>
                                <li>Click on payment option given below. "PAY"</li>
                                <li>Select Educational Institution as type of Corporate/Institution.</li>
                                <li>Select West Bengal as State of Corporate/Institution.</li>
                                <li>Select INDIAN INSTITUTE OF INFORMATION TECHNOLOGY,KALYANI as Educational Institute Name.</li>
                                <li>Select the payment category as per requirement.(For  e.g. Select 'FEES PAYMENT FOR NEW STUDENTS' for payment of PART A.)</li>
                                <li>Fill in all the details and then click on "Next".</li>
                            </ol>
                        </div>
                    </div>

                    <div className='flexCon card'>
                        <CurrencyRupeeIcon style={{ color: 'black', fontSize: '30px' }} />
                        <p>SBI Collect Payment Portal</p>
                        <a href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm" className='card-btn' target='_blank'>PAY</a>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default page