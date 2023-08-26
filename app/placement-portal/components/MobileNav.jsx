/* Inside MobileNav.js */

import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./css/mobile.css";

const MobileNav = ({ setScrollToSectionId }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mobile-nav">
      <div className="hamburger" onClick={toggleMenu}>
        <span>{isMenuOpen ? <CloseIcon /> : <MenuIcon />}</span>
      </div>
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <span>
          <Link href="/">Home</Link>
        </span>
        <span onClick={() => setScrollToSectionId("about")}>About Us</span>
        <span onClick={() => setScrollToSectionId("whyus")}>Why Us</span>
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
    </div>
  );
};

export default MobileNav;
