import React from "react";
import Link from "next/link";
import "./css/header.css";
import MobileNav from "./MobileNav"; // Import the MobileNav component

const Header = ({ setScrollToSectionId }) => {
  return (
    <>
      <div id="placement-header">
        <div id="placement-logo-holder" style={{ alignItems: "center" }}>
          <div
            id="placement-logo"
            style={{ height: "50px", display: "flex", alignItems: "center" }}
          >
            <img style={{ height: "50px" }} src="/img/logo.png" alt="Logo" />
          </div>
        </div>
        <div id="placement-nav" className="placement-nav">
          <Link className="link" href="/">
            <span>Home</span>
          </Link>
          <span onClick={() => setScrollToSectionId("about")}>About Us</span>
          <span onClick={() => setScrollToSectionId("#whyus")}>Why Us</span>
          <span onClick={() => setScrollToSectionId("recruiters")}>
            Past Recruiters
          </span>
          <span onClick={() => setScrollToSectionId("placement-record")}>
            Placement Record
          </span>
          <span onClick={() => setScrollToSectionId("infrastructure")}>
            Infrastructure
          </span>
          <span onClick={() => setScrollToSectionId("contactus")}>
            Contact Us
          </span>
        </div>
        <div className="placement-mobile">
          <MobileNav setScrollToSectionId={setScrollToSectionId} />{" "}
          {/* Include the MobileNav component */}
        </div>
      </div>
      <div id="header_top">
        <div className="header_top-flex">
          <div className="header_top-left" style={{ textAlign: "center" }}>
            <img
              className="header_top-img"
              src="./img/left.png"
              alt="left img"
            />
          </div>
          <div className="header_top-center">
            <img
              className="header_top-imgCenter"
              src="./img/center.png"
              alt="center img"
            />
            <span style={{ color: "white" }}>"विद्याधनं सर्वधनप्रधानम्"</span>
          </div>
          <div className="header_top-right" style={{ textAlign: "center" }}>
            <img
              className="header_top-img"
              src="./img/right.png"
              alt="right img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
