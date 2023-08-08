import React from "react";
import "./css/about.css";
import ImageCarousel from "./ImageCarousel";

const images = [
  "/img/cllg.jpg",
  "/img/cllg1.jpeg",
  "/img/cllg2.jpg",
  "/img/img-class.jpg",
  // Add more image URLs here
];

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="about-text">
        <h3 className="about-head">
          Indian Institute of Information Technology Kalyani
        </h3>
        <p style={{ lineHeight: "180%", fontSize: "1rem", marginTop: "10%" }}>
          A Memorandum of Understanding (MoU) was signed in 2014 between the
          Indian government, West Bengal government, and industry partners
          (namely Coal India Limited, Rolta Foundation, and Webel) to establish
          IIIT Kalyani under the Public Private Partnership (PPP) model. Since
          2017, IIIT Kalyani has become an Institute of National Importance.
          <br />
          <br />
          The Institute currently offers a 4-year B.Tech programme in Computer
          Science and Engineering, with the goal of providing high-quality
          technical education to students and equipping them with the necessary
          skills to tackle complex industry problems in the modern world. Its
          faculty members, who are young and dynamic doctorates from prestigious
          institutions and universities in India and abroad, guide over 50
          research scholars towards obtaining their PhD degrees. As a result,
          the Institute has developed into a hub of research excellence over
          time.
          <br />
          <br />
          IIIT Kalyani seeks substantial support from major Indian industries.
          Several major IT companies, including Wipro, TCS, Cognizant, IBM, PWC,
          Yellowclass, Goldman Sachs, ShareChat, OLA, Mihup, TCG, Deloitte, Jio,
          Capgemini, MAQ Software, and others, have already hired students from
          this Institute. The Institute offers a serene, peaceful, and
          productive atmosphere for studying, with a student-friendly
          environment.
        </p>
      </div>
      <ImageCarousel images={images} />
    </div>
  );
};

export default About;
