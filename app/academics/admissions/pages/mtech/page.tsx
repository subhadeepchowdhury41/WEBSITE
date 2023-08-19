'use client'
import React from 'react';
import NavBar from '../../../../sections/appbar/appbar';
import Footer from '../../../../sections/footer/footer';
import '../../../../../styles/phdadmission/phdadmission.css'

const MtechAdmissions = () => {

  return (
    <>
      <div className='h-[220px] bg-[rgba(0,0,0,0.8)] h-set-mobile'>
        <NavBar isHomepage={false} />
      </div>
      <div className='flex-set main-container'>
        <h1>Executive M.Tech Admissions: 2023 <hr /> </h1>
        <h2 style={{fontSize:'max(1.1vw,1.7vh)'}}>(Specialization: Artificial Intelligence and Data Science)</h2>
        <div className='main-content'>
          <h2>M.Tech Admission Incharge</h2>
          <h4>Dr. Sanjoy Pratihar</h4>
          <div className="lists">
            <ol>
              <h6>Ph. 9862346244</h6>
              <h6>Email id: cep@iiitkalyani.ac.in </h6>
            </ol>
          </div>
        </div>
        <div className='main-content'>
          <h2>Admission Process</h2>
          <h4>1. Fill the <a className='admission-form-pdf' href='/admissions/pdfs/mtech/Executive-MTech-Admission-Form-2023.pdf' target='_blank' rel='noreferrer'>Admission Form</a></h4>
          <h4>2. The candidates need to pay the Institute fees as shown below for the July-Dec, 2023 semester</h4>
          <div className="lists" style={{textAlign:'justify'}}>
            <ol >
              <li>a. Semester registration fee: INR 10000</li>
              <li>b. Registration fee for two theory courses (3+3: 6 credits): 6 X INR 5000 = INR 30000</li>
              <li>c. Registration fee for sessional paper (2 credits): 2 X INR 3000 = INR 6000</li>
            </ol>
          </div>
          <div className="lists" style={{textAlign:'justify'}}>
            <ol>
              <li>Total: (a) + (b) + (c) = INR 46000</li>
            </ol>
          </div>
          <div className="lists" style={{textAlign:'justify'}}>
            <ol>
              <h4>Account information for payment</h4>
              <li>1. Account Name: CONTINUING EDUCATION PROGRAMME (CEP) IIIT KALYANI</li>
              <li>2. Account Number: 40031861091</li>
              <li>3. IFSC Code: SBIN0006701</li>
            </ol>
          </div>
          <h4>3. Send the filled-in admission form along with the payment receipts and self attested documents over email to : </h4>
          <div className="lists" style={{textAlign:'justify'}}>
            <ol>
              <li>cep@iiitkalyani.ac.in with cc to arf@iiitkalyani.ac.in, debottam@iiitkalyani.ac.in as <strong>a single PDF on or before July 26, 2023.</strong> </li>
            </ol>
          </div>
          <h4>4. Documents required (self attested):</h4>
          <div className="lists" style={{textAlign:'justify'}}>
            <ol>
              <li>1. Class 10 marksheet / certificate</li>
              <li>2. Class 10+2 marksheet / certificate</li>
              <li>3. B.Tech/B.E./MSc/MS/MCA or equivalent (as written in the application form): Final Semester marksheet / certificate</li>
              <li>4. Copy of Aadhaar card</li>
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MtechAdmissions;