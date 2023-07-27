"use client";

import React from "react";
import "../../../../styles/program/program.css";
import Comingsoon from "../../../designSystem/comingsoon";
import NavBar from "../../../sections/appbar/secondNav";
import Footer from "../../../sections/footer/footer";
import Sidebar from "../../../designSystem/sidebar";
import PHD from "../../images/phd.jpg";
import Image from "next/image";
const array = [
  {
    headings: [
      { label: "B.Tech", id: 1 },
      { label: "M.Tech", id: 2 },
      { label: "Ph.D", id: 3 },
    ],
  },
  {
    subheadings: [
      {
        label: "Computer Science and Engineering",
        link: "/program/pages/btechcse",
      },
      {
        label: "Electronics and Communication Engineering",
        link: "/program/pages/btechece",
      },
    ],
  },
  {
    subheadings: [
      {
        label: "Artificial Intelligence and Data Science ",
        link: "/program/pages/mtechaids",
      },
      {
        label: "Advanced Communication Systems and Signal Processing",
        link: "/program/pages/mtechcomsig",
      },
    ],
  },
  {
    subheadings: [{ label: "Ph.D Programme", link: "/program/pages/phd" }],
  },
];

const page = () => {
  return (
    <>
      {/* <Program/> */}
      <NavBar />
      <div className="main-container">
        <div className="program-container">
          <Sidebar page="Academic Programmes" array={array} />
        </div>
        <div className="con">
          <span className="branchname">Ph.D Programme</span>
          <section className="image">
            <Image src={PHD} alt="map"></Image>
          </section>
          <section className="text">
            <p>
              IIIT Kalyani offers a Ph.D. program for highly motivated and
              research-oriented individuals who wish to pursue advanced studies
              in various domains of information technology. The Ph.D. program is
              designed to foster innovation, critical thinking, and in-depth
              research in the chosen area of specialization.Admission to the
              Ph.D. program at IIIT Kalyani is highly competitive and follows a
              rigorous selection process. Prospective candidates are required to
              apply online and submit their academic credentials, research
              proposal, and other relevant documents. Shortlisted candidates are
              usually called for a written test and/or an interview to assess
              their research aptitude and domain knowledge.IIIT Kalyani boasts a
              team of distinguished faculty members who are experts in their
              respective research areas. The institute provides state-of-the-art
              research facilities, access to modern labs, and resources
              necessary for conducting cutting-edge research.
            </p>
          </section>
        </div>
        <div className="resources">
          <p className="headingtop">RESOURCES</p>
          <div className="pdfs">
            <ul>
                <li>
                    <a href="https://iiitkalyani.ac.in/images/notification2021/B.Tech._CSE_Course%20Structure[IIIT%20Kalyani]2021.03.15.pdf" target="_blank" rel="noreferrer">Ph.D Regulations</a>
                </li>
                <li>
                  <a href="https://iiitkalyani.ac.in/images/iiitppp/Ph.dreg.pdf" target="_blank" rel="noreferrer">Ph.D Regulations (November 2017)</a>
                </li>
                <li>
                  <a href="https://iiitkalyani.ac.in/php/admissionpg.php" target="_blank" rel="noreferrer">See PhD admissions (Old data)</a>
                </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
