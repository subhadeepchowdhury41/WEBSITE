'use client'
import '../../../styles/admissions/admissions.css'
import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import NavBar from '../../sections/appbar/secondNav';
import Footer from '../../sections/footer/footer';
import Sidebar from '../../designSystem/sidebar';

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

const Admissions = () => {

  function AdmissionCard(props){
    return (
      <>
        <div className="card-container">
          <div className="card-body">
          {props.data.map((element, i) => {
            return (
              <>
                <div>
                  <ul style={{listStyleType:"square"}}>
                    <li>
                      <div className="data-item">
                        <a href={element[1]} target="_blank" rel="noreferrer">{element[0]}</a>
                      {element[2] ? <div className='new-announcement'>New</div> : <div/>}
                      </div>
                    </li>
                  </ul>
                </div>
              </>
            );
          })}
          </div>
          <div className="card-header">
            <div>
              {props.heading} Admissions {" >"}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar/>
      <div className="admissions-container">
        <Sidebar location='Academics > Admissions' page="Admissions" array={array}/>
        <div className="admission-channels">

          <div className="admission-card">
            <AdmissionCard heading = "B.Tech" data = {[["Admission details", "https://iiitkalyani.ac.in/php/images/admission_brochure_2023.pdf", true], ["Admission Form", "https://iiitkalyani.ac.in/php/images/Admission%20Form%202023.pdf", true], ["Annexure 7", "https://iiitkalyani.ac.in/php/images/Annexure7.pdf", true]]}/>
          </div>

          <div className="admission-card">
            <AdmissionCard heading = "M.Tech" data = {[["Executive M.Tech Admission - 2023", "admissions/pages/mtech", false], ["CEP Admission 2023 - List of Eligible and Not Eligible Candidates", "http://iiitkalyani.ac.in/images/CEP%20Admission%202023%20-%20List%20of%20Eligible%20and%20Not%20Eligible%20Candidates.pdf", true], ["Admission to Executive M.Tech (Artificial Intelligence and Data Science) Program - July 2023 Session", "http://iiitkalyani.ac.in/php/images/Advertisement-MTech-2023-IIITKalyani.pdf", true], ["Executive M.Tech Program - 2023: Application Form (PDF)", "http://iiitkalyani.ac.in/php/images/Advertisement-MTech-2023-IIITKalyani.pdf", true], ["Executive M.Tech Program - 2023: Application Form (DOCX)", "http://iiitkalyani.ac.in/php/images/Advertisement-MTech-2023-IIITKalyani.pdf", true]]}/>
          </div>

          <div className="admission-card">
            <AdmissionCard heading = "PhD" data = {[["Year: 2021", "", false], ["Admission details", "", false]]}/>
          </div>

        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Admissions;