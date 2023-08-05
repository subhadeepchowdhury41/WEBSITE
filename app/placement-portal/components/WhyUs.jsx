import React from "react";
import "./css/whyus.css";
import LanguageIcon from "@mui/icons-material/Language";
import AnchorIcon from "@mui/icons-material/Anchor";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import StorageIcon from "@mui/icons-material/Storage";
import UploadIcon from "@mui/icons-material/Upload";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const WhyUs = () => {
  return (
    <div id="whyus">
      <div className="why-head">
        <h2 style={{ textAlign: "center" }}>Why Recruit at IIIT Kalyani?</h2>
      </div>

      <div className="why-container">
        <div className="row">
          <div className="why-card">
            <span
              className="icon feature_box_col_one"
              style={{ textAlign: "center" }}
            >
              <LanguageIcon style={{ fontSize: 45 }} />
            </span>
            <h6 style={{ textAlign: "center" }}>Our Motto</h6>
            <p>
              The Indian Institute of Information Technology, Kalyani has been
              setup with an objective to produce best-in-class human resources
              in IT and to harness the multidimensional facets of IT in various
              domains. IIIT Kalyani strives to evolve into a world-class
              academic institution with the highest quality of education and
              research facilities.
            </p>
          </div>
          <div className="why-card">
            <span
              className="icon feature_box_col_two"
              style={{ textAlign: "center" }}
            >
              <AnchorIcon style={{ fontSize: 45 }} />
            </span>
            <h6 style={{ textAlign: "center" }}>Our Mission</h6>
            <p>
              The Institute aligns all its activities to serve national interest
              and seeks To provide broad-based education, helping students hone
              their professional skills and acquire the capabilities in their
              respective disciplines To draw the best expertise in science,
              technology, management and law so as to equip students with the
              skills to visualize, synthesize and execute.
            </p>
          </div>
          <div className="why-card">
            <span
              className="icon feature_box_col_three"
              style={{ textAlign: "center" }}
            >
              <HourglassBottomIcon style={{ fontSize: 45 }} />
            </span>
            <h6 style={{ textAlign: "center" }}>Our Vision</h6>
            <p>
              To be a center of excellence in education and research, producing
              global leaders in science, technology and management To be a hub
              of knowledge creation that priorities the frontier areas of
              national and global importance IIIT, Kalyani will not only create
              industry ready IT Graduates to feed the demand of the industry,
              but it will also act as a catalyst.
            </p>
          </div>
          <div className="why-card">
            <span
              className="icon feature_box_col_four"
              style={{ textAlign: "center" }}
            >
              <StorageIcon style={{ fontSize: 45 }} />
            </span>
            <h6 style={{ textAlign: "center" }}>Strong Industry Interface</h6>
            <p>
              IIIT Kalyani has a strong, active and growing interface with
              business and industry, with experts from a range of leading
              companies and thought leaders of IT Industry delivering regular
              guest lectures and serving as members of various advisory boards.
            </p>
          </div>
          <div className="why-card">
            <span
              className="icon feature_box_col_five"
              style={{ textAlign: "center" }}
            >
              <UploadIcon style={{ fontSize: 45 }} />
            </span>
            <h6 style={{ textAlign: "center" }}>Projects</h6>
            <p>
              Students are encouraged to take up projects on contemporary topics
              as a part of their independent study which includes image
              processing, Cryptography, Artificial Intelligence And Machine
              Learning. Arrangements will be made for practical training on
              projects of leading companies.
            </p>
          </div>
          <div className="why-card">
            <span
              className="icon feature_box_col_six"
              style={{ textAlign: "center" }}
            >
              <CameraAltIcon style={{ fontSize: 45 }} />
            </span>
            <h6 style={{ textAlign: "center" }}>Achievements</h6>
            <p>
              Selection in <b>Google Summer of Code</b>, Teams in{" "}
              <b>ICPC Regionals</b>, Selections in <b>Smart India Hackathon</b>,{" "}
              <b>
                Google Summer of Code &<b> Code-In-Mentor</b> Selections
              </b>
              , <b>Google Build for Digital India</b> Selections,{" "}
              <b>MLH Fellowship </b>
              Selection (SPONSORED BY GITHUB).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
