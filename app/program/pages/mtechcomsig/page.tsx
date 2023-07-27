"use client";

import React from "react";
import "../../../../styles/program/program.css";
import Comingsoon from "../../../designSystem/comingsoon";
import NavBar from "../../../sections/appbar/secondNav";
import Footer from "../../../sections/footer/footer";
import Sidebar from "../../../designSystem/sidebar";
import Mtechcomsig from "../../images/mtechcomsig.jpg";
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
          <span className="branchname">
            Advanced Communication Systems and Signal Processing
          </span>
          <section className="image">
            <Image src={Mtechcomsig} alt="map"></Image>
          </section>
          <section className="text">
            <p>
              Advanced Communication Systems and Signal Processing are two
              interconnected fields that play a crucial role in modern
              telecommunications and information exchange.The synergy between
              Advanced Communication Systems and Signal Processing has led to
              significant technological advancements. These fields are
              instrumental in developing cutting-edge technologies like 5G
              wireless networks, digital audio and video compression, image
              recognition algorithms, and speech processing systems.As the world
              becomes increasingly interconnected and reliant on efficient
              communication, the demand for professionals in Advanced
              Communication Systems and Signal Processing continues to grow.
              Experts in these fields work on developing innovative solutions to
              improve communication systems, leading to more efficient data
              exchange, better multimedia experiences, and enhanced connectivity
              across the globe.
            </p>
          </section>
        </div>
        <div className="resources">
          <p className="headingtop">RESOURCES</p>
          <div className="pdfs">
            <ul>
              <li>
                <a href="https://iiitkalyani.ac.in/images/M.Tech_updated_Course_structure_for_Adv_Comm_Sys_and_Sig_Proc_IIIT%20Kalyani.pdf" target="_blank" rel="noreferrer">Course Structure-Advanced Communication Systems and Signal Processing</a>
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
