"use client";

import React from "react";
import "../../../../styles/program/program.css";
import Comingsoon from "../../../designSystem/comingsoon";
import NavBar from "../../../sections/appbar/secondNav";
import Footer from "../../../sections/footer/footer";
import Sidebar from "../../../designSystem/sidebar";
import BtechECE from "../../images/btechece.jpg";
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
          <span className="branchname text-2xl">
            Electronics and Communication Engineering
          </span>
          <section className="image">
            <Image src={BtechECE} alt="map"></Image>
          </section>
          <section className="text">
            <p>
              Electronics and Communication Engineering [ECE] is a field of
              engineering that revolves around the study, design, and
              application of electronic devices, systems, and communication
              technologies. It encompasses a wide range of areas, including
              analog and digital electronics, microelectronics,
              telecommunications, signal processing, and wireless
              communication.In this rapidly evolving digital era, ECE has a
              significant impact on almost every aspect of our lives, enabling
              seamless communication through mobile phones, high-speed internet,
              and satellite systems, as well as powering various electronic
              devices we rely on daily.With a strong emphasis on innovation and
              problem-solving, ECE offers exciting opportunities for individuals
              passionate about technology and eager to contribute to the ongoing
              advancements in the field. Whether it is working on developing new
              electronic devices, improving communication networks, or exploring
              emerging technologies like Internet of Things (IoT) and 5G,
              Electronics and Communication Engineering continues to be a vital
              and sought-after discipline in current interconnected world.
            </p>
          </section>
        </div>
        <div className="resources">
          <p className="headingtop">RESOURCES</p>
          <div className="pdfs">
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
