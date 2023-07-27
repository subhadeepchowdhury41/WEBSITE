"use client";
import React from "react";
import NavBar from "../sections/appbar/secondNav";
import "../../styles/program/program.css";
import Sidebar from "../designSystem/sidebar";
import Footer from "../sections/footer/footer";

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
        link: "/program/pages/btechcse",
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

const Program = () => {
  return (
    <>
      <NavBar />
      <div className="program-container">
        <Sidebar page="Academic Programmes" array={array} />
      </div>
      <Footer />
    </>
  );
};

export default Program;
