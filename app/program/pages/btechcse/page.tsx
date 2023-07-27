"use client";

import React from "react";
import "../../../../styles/program/program.css";
import Comingsoon from "../../../designSystem/comingsoon";
import NavBar from "../../../sections/appbar/secondNav";
import Footer from "../../../sections/footer/footer";
import Sidebar from "../../../designSystem/sidebar";
import BtechCSE from "../../images/btechcse.jpg";
import { Document, Page } from 'react-pdf';
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
  const pdf1='../../pdf/Annexure_BtechCSE.pdf';
  return (
    <>
      {/* <Program/> */}
      <NavBar />
      <div className="main-container">
        <div className="program-container">
          <Sidebar page="Academic Programmes" array={array} />
        </div>
        <div className="con">
          <span className="branchname text-2xl">
            Computer Science and Engineering
          </span>
          <section className="image">
            <Image src={BtechCSE} alt="map"></Image>
          </section>
          <section className="text">
            <p>
              Computer Science and Engineering [CSE] is a dynamic and
              interdisciplinary field that combines the principles of computer
              science with the engineering aspects of designing and developing
              hardware and software systems . It encompasses a wide range of
              topics,including algorithm design , data structures , artificial
              intelligence , computer architecture , software development ,
              networking , and more . CSE professionals play a crucial role in
              shaping the modern world by creating innovative technologies and
              solutions that have transformed industries , businesses,and our
              daily lives . With its ever-evolving nature and profound impact on
              society , Computer Science and Engineering continues to be at the
              forefront of technological advancements and remains a sought-after
              career path for those passionate about technology and innovation.
            </p>
          </section>
        </div>
        <div className="resources">
          <p className="headingtop">RESOURCES</p>
          <div className="pdfs">
            <ul>
              <li>
              {/* <Document file={pdf1}>
                  <Page pageNumber={1} />djsvshvs
              </Document> */}
              <a href="https://iiitkalyani.ac.in/images/notification2021/Annexure%20E.pdf" target="_blank" rel="noreferrer">New Curriculum from July 2021 onwards</a>
              </li>
              <li>
                <a href="https://iiitkalyani.ac.in/images/notification2021/B.Tech._CSE_Course%20Structure[IIIT%20Kalyani]2021.03.15.pdf" target="_blank" rel="noreferrer">
                  Old Curriculum
                </a>
              </li>
              <li>
                <a
                  href="http://iiitkalyani.ac.in/php/admission.php" target="_blank" rel="noreferrer"
                >
                  UG Admissions
                </a>
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
