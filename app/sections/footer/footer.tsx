'use client';
import "../../../styles/footer.css";
import logo from "../../../assets/logos/iiit_kalyani_logo.png";
import ariia_logo from "../../../assets/logos/ariia_logo.jpg";
import Image from "next/image";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Reveal, Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import grey from "@mui/material/colors/grey";
import Marquee from "react-fast-marquee";

export default function Footer() {
  const customAnimation = keyframes`
    from {
        opacity: 0;
        transform: translate3d(-200px, 0, 0);
    }

    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }`;
  const customAnimation2 = keyframes`
    from {
        opacity: 0;
        transform: translate3d(0, 50px, 0);
    }

  to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }`;
  const customAnimation3 = keyframes`
    from {
        opacity: 0;
        transform: translate3d(0, 0, -200px);
    }

    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }`;
  return (
    <div>
      {/* <!-- Footer --> */}
      <footer className="bgDark ">
        {/* <!-- Grid container --> */}
        <div className="container">
          {/* <!-- Section: Social media --> */}
          <section className="footer-logo-block">
            <Reveal keyframes={customAnimation}>
              <div className="footer-logo-div">
                <Image className="footer-logo" src={logo} alt="logo" />
                <div className="footer-logo-name">
                  <h6
                    style={{ color: "#E8E8E8", margin: "0", paddingLeft: "10px" }}
                  >
                    INDIAN INSTITUTE OF INFORMATION <br />
                    TECHNOLOGY KALYANI
                  </h6>
                  <h6
                    style={{
                      color: "#E8E8E8",
                      margin: "0",
                      paddingLeft: "10px",
                    }}
                  >
                    भारतीय सूचना प्रौद्योगिकी संस्थान, कल्याणी
                  </h6>
                </div>
              </div>
            </Reveal>
            <Reveal keyframes={customAnimation2} triggerOnce>
              <div className="footer-clg-name">
                <h4>
                  Indian Institute of Information Technology Kalyani, Kalyani,
                  India-741235
                </h4>
                <h4 className="footer-email ">
                  Email: iiitkalyani.office@gmail.com
                </h4>
                <h4>Email: office@iiitkalyani.ac.in</h4>
              </div>

              <div className="footer-social">
                {/* <!-- Facebook --> */}
                <a className="btn " href="https://www.facebook.com/iiitkalyani/" aria-label="Visit facebook of IIITKalyani" role="button" target="blank" rel="noopener noreferrer">
                  <FacebookIcon sx={{ color: grey[50] }} className="btn-btn fb" />
                </a>

                {/* <!-- Twitter --> */}
                <a className="btn" href="https://twitter.com/iiit_kalyani?lang=en" aria-label="Visit twitter of IIITKalyani" role="button" target="blank" rel="noopener noreferrer">
                  <TwitterIcon sx={{ color: grey[50] }} className="btn-btn tt" />
                </a>

                {/* <!-- Google --> */}
                <a className="btn" href="https://www.youtube.com/channel/UCdnaperuWO_6YfXzEov6-QA/videos" aria-label="Visit YouTube of IIITKalyani" role="button" target="blank" rel="noopener noreferrer">
                  <YouTubeIcon sx={{ color: grey[50] }} className="btn-btn yt" />
                </a>

                {/* <!-- Instagram --> */}
                <a className="btn" href="https://www.instagram.com/iiitkalyaniofficial/" aria-label="Visit Instagram of IIITKalyani" role="button" target="blank" rel="noopener noreferrer">
                  <InstagramIcon sx={{ color: grey[50] }} className="btn-btn ig" />
                </a>

                {/* <!-- Linkedin --> */}
                <a className="btn " href="https://www.linkedin.com/in/tnpiniiitkalyani/" aria-label="Visit LinkedIn of IIITKalyani" role="button" target="blank" rel="noopener noreferrer">
                  <LinkedInIcon sx={{ color: grey[50] }} className="btn-btn ld" />
                </a>

                {/* <!-- Github --> */}
                {/* <a className="btn" href="#!" role="button" target="blank">
                <GitHubIcon sx={{color: grey[50]}}/>
              </a> */}
              </div>
            </Reveal>
          </section>
          {/* <!-- Section: Links --> */}
          <section className="">
            <Reveal keyframes={customAnimation2} triggerOnce>
              {/* <!--Grid row--> */}
              <div className="footer-row">
                {/* <!--Grid column--> */}
                <div className="">
                  <ul className="list-unstyled ">
                    <li>
                      <a href="/academics/faculty" className="text-white-footer">
                        Faculty
                      </a>
                      <hr />
                    </li>

                    <li>
                      <a href="research/SRIC" className="text-white-footer"  >
                        SRIC Cell
                      </a>
                      <hr />
                    </li>

                    <li>
                      <a href="http://iiitkalyani.ac.in/php/downloads.php" className="text-white-footer"  >
                        Downloads
                      </a>
                      <hr />
                    </li>

                    <li>
                      <a href="/about/aboutus" className="text-white-footer"  >
                        About Us
                      </a>
                      <hr />
                    </li>

                    <li>
                      <a href="http://iiitkalyani.ac.in/php/administration.php" className="text-white-footer"  >
                        Adminstartive Body
                      </a>
                      <hr />
                    </li>

                    <li>
                      <a href="/students/students-achievements" className="text-white-footer"  >
                        Students' Achievment
                      </a>
                      <hr />
                    </li>

                    <li>
                      <a href="/about/gallery/parikshapecharcha2022" className="text-white-footer"  >
                        Gallery
                      </a>
                      <hr />
                    </li>

                    <li>
                      <a href="http://iiitkalyani.ac.in/placement/" className="text-white-footer" target="blank">
                        Placement Portal
                      </a>
                      <hr className="hiddenLine" />
                    </li>
                  </ul>
                </div>
                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}
              </div>
              {/* <!--Grid row--> */}
            </Reveal>
          </section>
          <section className="">
            <Reveal keyframes={customAnimation2} triggerOnce>
              {/* <!--Grid row--> */}
              <div className="footer-row">
                <div className="">
                  <ul className="list-unstyled ">
                    <li>
                      <a href="/e-notice-board" className="text-white-footer"  >
                        e-Notice Board
                      </a>
                      <hr />
                    </li>

                    <li>
                      <a href="/pdf/RTI/Office Order-96_RTI.pdf" className="text-white-footer"  >
                        Right To Information
                      </a>
                      <hr />
                    </li>

                    <li>
                      <a href="/pdf/preamble/The Constitution of India.pdf" className="text-white-footer"  >
                        Preamble of the Constitution of India
                      </a>
                      <hr />
                    </li>

                    <li>
                      <a href="http://iiitkalyani.ac.in/php/fee_structure.php" className="text-white-footer"  >
                        Fee Structure
                      </a>
                      <hr />
                    </li>

                    <li>
                      <a href="http://iiitkalyani.ac.in/php/ugregulations.php" className="text-white-footer"  >
                        UG Regulations
                      </a>
                      <hr />
                    </li>

                    <li>
                      <a href="/academics/nptel" className="text-white-footer"  >
                        NPTEL Collaboration
                      </a>
                      <hr />
                    </li>

                    <li>
                      <a href="/academics/academic-calendar" className="text-white-footer"  >
                        Academic Calender
                      </a>
                      <hr />
                    </li>

                    <li>
                      <a href="http://iiitkalyani.ac.in/php/nep.php" className="text-white-footer"  >
                        New National Education Policy-2020
                      </a>
                      <hr />
                    </li>

                    <li>
                      <a href="/research/IIC" className="text-white-footer"  >
                        Institution's Innovation Council (IIC)
                      </a>
                      <hr className="hiddenLine" />
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!--Grid row--> */}
            </Reveal>
          </section>
        </div>


        <div
          className="footer-copyright" aria-hidden='false'
        >
          {/* <hr /> */}
          <p style={{ position: "absolute", backgroundColor: "rgb(25,25,25)", padding: "0 10px 0 10px", zIndex: "22", fontSize: "17px", display: "flex", flexDirection: "row" }}>Portals
            <a
              href="/pdf/ARIIA/ARIIA _ 0796_2022.pdf"
              target="blank"

            >
              <Image style={{ height: "30px", width: "150px", paddingLeft: "10px" }} src={ariia_logo} alt="aria_logo" />

            </a></p>
          <Marquee speed={80} className="marquee" gradient={false} aria-hidden='false'>

            <a
              href="https://trai.gov.in/"
              className="text-white-footer-portal"
              target="blank"
              aria-hidden='false'
            >
              TRAI &emsp;
            </a>
            <a
              href="https://pmrf.in/"
              className="text-white-footer-portal"
              target="blank"
              aria-hidden='false'
            >
              Prime Minister Research Fellowship &emsp;
            </a>
            <a
              href="http://unnatbharatabhiyan.gov.in/"
              className="text-white-footer-portal"
              target="blank"
              aria-hidden='false'
            >
              Unnat Bharat Abhiyan &emsp;
            </a>
            <a
              href="https://www.vidyalakshmi.co.in/Students/"
              className="text-white-footer-portal"
              target="blank"
              aria-hidden='false'
            >
              Vidya Lakshmi &emsp;
            </a>
            <a
              href="https://scholarship.up.gov.in/"
              className="text-white-footer-portal"
              target="blank"
              aria-hidden='false'
            >
              UP Scholarship &emsp;
            </a>
            <a
              href="https://www.narendramodi.in/pm-modi-launches-fit-india-movement-546213"
              className="text-white-footer-portal"
              target="blank"
              aria-hidden='false'
            >
              Fit India Movement &emsp;
            </a>
            <a
              href="http://nwm.gov.in/?q=catchtherain!"
              className="text-white-footer-portal"
              target="blank"
              aria-hidden='false'
            >
              Jal Shakti Abhiyan: Catch The Rain  &emsp;
            </a>
          </Marquee>
          <hr style={{ marginTop: "2.5vh" }} />
          <p aria-hidden='false'>© 2019 Indian Institute of Information Technology Kalyani</p>
        </div>
      </footer>

      {/* <!-- Footer --> */}
    </div>
  );
}