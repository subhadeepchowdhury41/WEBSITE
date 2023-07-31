'use client'
import '../../../../../styles/admissions/admissions.css'
import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import NavBar from '../../../../sections/appbar/secondNav';
import Footer from '../../../../sections/footer/footer';
import Sidebar from '../../../../designSystem/sidebar';
import HEADER from '../../../../designSystem/header';

const array = [
  {
    headings: [
      { label: "B.Tech Admissions", id: 1 },
      { label: "M.Tech Admissions", id: 2 },
      { label: "Ph.D Admissions", id: 3 },
    ],
  },
  {
    subheadings: [
      {
        label: "Admission details",
        link: "",
      },
      {
        label: "Admission form",
        link: "",
      },
      {
        label: "Annexure 7",
        link: "",
      },
    ],
  },
  {
    subheadings: [
      {
        label: "Executive M.Tech Admission - 2023",
        link: "",
      },
      {
        label: "CEP Admission 2023",
        link: "",
      },
      {
        label: "Application Form",
        link: "",
      },
    ],
  },
  {
    subheadings: [
      {
        label: "Year: 2021",
        link: "",
      },
      {
        label: "Admission details",
        link: "",
      },
    ],
  },
  
];

const MtechAdmissions = () => {

  return (
    <>
      <NavBar/>
      <div className="admissions-container">
        <Sidebar location='Academics > Admissions' page="Admissions" array={array}/>
        <div className="mtech-container">
          <HEADER text='Executive M.Tech Admissions: 2023'/>
          <div className="specialization">
            (Specialization: Artificial Intelligence and Data Science)
          </div>
          <div className="admin-incharge">
            <div className="admin-heading">M.Tech Admission Incharge</div>
            <div className="admin-name"><a href="https://iiitkalyani.ac.in/php/facultymainpage/sp.html?" target='_blank' rel='noreferrer'>Dr. Sanjoy Pratihar</a></div>
            <div className="admin-details">
              Ph. 9862346244<br/>
              Email id:<br/>
              cep@iiitkalyani.ac.in<br/>
            </div>
          </div>
          <div className="process">
            Admission Process:
          </div>
          <div className="mtech-details">
            <div className="details-item">
              <div className='item-heading'>1. Fill the <a className='admission-form' href='http://iiitkalyani.ac.in/images/Executive-MTech-Admission-Form-2023.pdf' target='_blank' rel='noreferrer'>Admission Form</a></div> 
            </div>
            <div className="details-item">
            <div className='item-heading'>2. The candidates need to pay the Institute fees as shown below for the July-Dec, 2023 semester:</div><br/>
    a. Semester registration fee: INR 10000<br/>
    b. Registration fee for two theory courses (3+3: 6 credits): 6 X INR 5000 = INR 30000<br/>
    c. Registration fee for sessional paper (2 credits): 2 X INR 3000 = INR 6000<br/><br/>

    Total: (a) + (b) + (c) = INR 46000<br/><br/>

    Account information for payment:<br/>
    Account Name: CONTINUING EDUCATION PROGRAMME (CEP) IIIT KALYANI<br/>
    Account Number: 40031861091<br/>
    IFSC Code: SBIN0006701<br/>
            </div>
            <div className="details-item">
            <div className='item-heading' id='item-3'>3. Send the filled-in admission form along with the payment receipts and self attested documents over email to:</div><br/> cep@iiitkalyani.ac.in with cc to arf@iiitkalyani.ac.in, debottam@iiitkalyani.ac.in as <div className='details-imp'>a single PDF on or before July 26, 2023.</div>
            </div>
            <div className="details-item">
            <div className='item-heading'>4. Documents required (self attested):</div><br/>
    i. Class 10 marksheet / certificate<br/>
    ii. Class 10+2 marksheet / certificate<br/>
    iii. B.Tech/B.E./MSc/MS/MCA or equivalent (as written in the application form): Final Semester marksheet / certificate<br/>
    iv. Copy of Aadhaar card<br/>
            </div>

          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default MtechAdmissions;