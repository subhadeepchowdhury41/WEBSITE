'use client'

import React from 'react'
import NavBar from '../../../../sections/appbar/appbar'

import Footer from '../../../../sections/footer/footer'
import '../../../../../styles/phdadmission/phdadmission.css'
import { type } from 'os'
import data from './data';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import { WidthFull } from '@mui/icons-material'
import { padding } from '@mui/system'

const datapdf = [
  {
    id: 1,
    name: 'Ph.D. ORDINANCE & REGULATIONS',
    link: '/programresources/PhdRegulation2021.pdf'
  }
]
const page = () => {
  return (
    <React.Fragment>
      <div className='h-[212px] bg-[rgba(0,0,0,0.8)] h-set-mobile'>
        <NavBar isHomepage={false} />
      </div>
      <div className="flex-set main-container">
        <h1>Ph.D. Admissions <hr /> </h1>
        <div className="main-content">
          <h2>Admission Procedure</h2>
          <p style={{ padding: '1%' }}>Admission to the Ph.D. Programme of the Institute will normally take place in January and July every year. Advertisements will be issued in September/October for the even semester (January - June) and February-March for the odd semester (July - December).
            Admission to all categories of students is granted on the basis of admission test followed by interview to be held usually during the month of December and May - July every year.</p>
          <h4>The following documents are to be furnished along with the application by candidates falling under Sponsored, Project Staff, Part-time and External categories:</h4>
          <div className="lists" style={{ textAlign: 'justify' }}>
            <ol >
              <li>Form I: Sponsorship letter for Sponsored category.</li>
              <li>Form II: No objection certificate from Head of the Department/Head of the Institute, IIIT Kalyani, for Project Staff category.</li>
              <li>Form III: No objection certificate from the employer for Part-time category.</li>
              <li>Form IV: Sponsorship certificate/ letter for External category. All forms are available in Annexure B.</li>
            </ol>
          </div>
        </div>
        <div className="main-content">
          <h2>Duration of Ph.D. Programs</h2>
          <h4>The duration of the Ph.D. programme is as follows :</h4>
          <div className="lists" style={{ textAlign: 'justify' }}>
            <ol style={{ listStyle: 'upper-roman' }}>
              <li>The minimum duration of the Ph.D. programme (excluding dropped semester(s)/maternity leave) is four semesters after registration.</li>
              <li>The maximum duration of the Ph.D. programme is 12 semesters from the date of admission for a full-time student of which he can get fellowship of 10 semestersand 14semesters for a part-time student. The period will be counted after registration.</li>
              <li>Any further extension can be approved by the competent authority.</li>
            </ol>
          </div>
        </div>
        <div className="main-content">
          <h2>Category of Ph.D. Students</h2>
          <h4>The Institute admits Ph.D. students under the following categories :</h4>
          <div className="cat">
            {data.phdcategory.map((e) => {
              return (
                <div className=" flex-set categories" key={e.id}>
                  <h5>{e.name}</h5>
                  <div className="details" style={{ textAlign: 'justify' }}>
                    {e.details}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="main-content">
          <h2>Eligibility Criteria for Admission into Ph.D. Program</h2>
          <h5>The details of the eligibility criteria (i.e. minimum qualifications and experience) for admission to various Ph.D. programmes are given in this appendix. The DRC reviews the same for admission to the Ph.D. programme from time to time. Relaxation in academic qualification for reserved categories of students is as per Government of India guidelines.</h5>
          <div className="cat">
            {data.phdeligibility.map((e) => {
              return (
                <div className=" flex-set categories" key={e.id}>
                  <h5 >{e.name}</h5>
                  <h6>{e.forinfo}</h6>
                  <div className="details">
                    {e.details.map((i) => {
                      return (
                        <React.Fragment key={i.id}>{i.label} <br /></React.Fragment>
                      )
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="btn-reg" style={{ margin: '3%' }}>
          {datapdf.map((p) => {
            return (
              <a key={p.id} href={p.link} target="_blank" rel='noreferrer' style={{ padding: "10px" }}><PictureAsPdfIcon /> {p.name} </a>
            );
          })}
        </div>
        <div className="main-content">
          <h5>For Admission related queries, contact Admission In-charge of IIIT Kalyani.</h5>
        </div>
        <div className="main-content" style={{ marginBottom: "50px" }}>
          <h2>Ph.D. Coordinator</h2>
          <h5>Dr. Oishila Bandyopadhyay</h5>
          <div className="lists">
            <ol>
              <li>Dept : Computer Science and Engineering</li>
              <li><a href="https://scholar.google.co.in/citations?user=yKaKpWYAAAAJ&hl=en" target={'_blank'} rel='noreferrer'> <AccountCircleIcon /> Profile</a></li>
              <li><a href="mailto: oishila@iiitkalyani.ac.in"> <EmailIcon />oishila@iiitkalyani.ac.in</a></li>
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default page