import React from "react";
import "./css/home.css";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const Home = () => {
  return (
    <div id="home" className="section">
      <img src="img/background.svg" className="home-background" />

      <div className="home-text">
        <span className="heading">
          <br />
          Training and Placement Cell, <br className="hide-br" /> IIIT Kalyani
        </span>
        {/* <br /> */}
        <a
          href="img/brochure/placement_brochure_2023.pdf"
          target="_blank"
          className="brochure-link"
        >
          Placement Brochure
          <FileDownloadIcon className="download-icon" />
        </a>
        <br />
        {/* <a href="#" className="download-link">Placement Invitation&nbsp;&nbsp;<i className="fas fa-download"></i></a> */}
      </div>
      <div
        className="employees-image"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="img/team.gif" style={{ width: "100%" }} />
      </div>
      {/* <div className="hidden-header">
        Training and Placement Cell, IIIT Kalyani
      </div> */}
    </div>
  );
};

export default Home;
