"use client";
import React from "react";
import NavBar from "../sections/appbar/secondNav";
import "../../styles/program/program.css";
// import Sidebar from "../designSystem/sidebar";
import Footer from "../sections/footer/footer";

const Program = () => {
  return (
    <>
      <NavBar />
      <div className="program-container"></div>
      <Footer />
    </>
  );
};

export default Program;
