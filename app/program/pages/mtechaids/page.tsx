"use client";

import React from "react";
import "../../../../styles/program/program.css";
import Comingsoon from "../../../designSystem/comingsoon";
import NavBar from "../../../sections/appbar/secondNav";
import Footer from "../../../sections/footer/footer";
import Sidebar from "../../../designSystem/sidebar";
import MtechAids from "../../images/mtechAIDS.jpg";
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
            Artificial Intelligence and Data Science
          </span>
          <section className="image">
            <Image src={MtechAids} alt="map"></Image>
          </section>
          <section className="text">
            <p>
              Artificial Intelligence (AI) and Data Science are two rapidly
              evolving fields at the forefront of modern technology.Both AI and
              Data Science are highly interrelated. Data serves as the
              foundation for training AI models, and AI algorithms are used to
              enhance the efficiency and effectiveness of data analysis. The
              synergy between these fields has led to remarkable advancements in
              various domains, including healthcare, finance, marketing, and
              more.AI and Data Science have revolutionized industries, enabling
              companies to make data-driven decisions, automate processes, and
              provide personalized services to customers. As technology
              continues to advance, these fields will play an increasingly
              critical role in shaping the future, paving the way for smarter
              and more efficient systems that will have a profound impact on
              society.
            </p>
          </section>
        </div>
        <div className="resources">
          <p className="headingtop">RESOURCES</p>
          <div className="pdfs">
            <ul>
                <li>
                <a href="https://iiitkalyani.ac.in/images/MTech-Course-Structure-AI-and-Data%20Science.pdf" target="_blank" rel="noreferrer">
              M.Tech Course Structure AI and Data Science
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
