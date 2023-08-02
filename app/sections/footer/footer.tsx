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
                <a className="btn " href="https://www.facebook.com/iiitkalyani/" role="button" target="blank">
                  <FacebookIcon sx={{ color: grey[50] }} className="btn-btn fb" />
                </a>

                {/* <!-- Twitter --> */}
                <a className="btn" href="https://twitter.com/iiit_kalyani?lang=en" role="button" target="blank">
                  <TwitterIcon sx={{ color: grey[50] }} className="btn-btn tt" />
                </a>

                {/* <!-- Google --> */}
                <a className="btn" href="https://www.youtube.com/channel/UCdnaperuWO_6YfXzEov6-QA/videos" role="button" target="blank">
                  <YouTubeIcon sx={{ color: grey[50] }} className="btn-btn yt" />
                </a>

                {/* <!-- Instagram --> */}
                <a className="btn" href="https://www.instagram.com/iiitkalyaniofficial/" role="button" target="blank">
                  <InstagramIcon sx={{ color: grey[50] }} className="btn-btn ig" />
                </a>

                {/* <!-- Linkedin --> */}
                <a className="btn " href="https://www.linkedin.com/in/tnpiniiitkalyani/" role="button" target="blank">
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
<<<<<<< HEAD
                      <a href="https://iiitkalyani.ac.in/newfacultypages/faculty1.php" target="blank" className="text-white-footer">
=======
                      <a href="/academics/faculty" className="text-white-footer">
>>>>>>> 74698cc855e800c4a7010b48d6feea118f5d1c21
                        Faculty
                      </a>
                      <hr />
                    </li>

                    <li>
<<<<<<< HEAD
                      <a href="http://iiitkalyani.ac.in/php/sric.php" className="text-white-footer" target="blank">
=======
                      <a href="research/SRIC" className="text-white-footer"  >
>>>>>>> 74698cc855e800c4a7010b48d6feea118f5d1c21
                        SRIC Cell
                      </a>
                      <hr />
                    </li>

                    <li>
<<<<<<< HEAD
                      <a href="http://iiitkalyani.ac.in/php/downloads.php" className="text-white-footer" target="blank">
=======
                      <a href="http://iiitkalyani.ac.in/php/downloads.php" className="text-white-footer"  >
>>>>>>> 74698cc855e800c4a7010b48d6feea118f5d1c21
                        Downloads
                      </a>
                      <hr />
                    </li>

                    <li>
<<<<<<< HEAD
                      <a href="http://iiitkalyani.ac.in/php/about_us.php" className="text-white-footer" target="blank">
=======
                      <a href="/about/aboutus" className="text-white-footer"  >
>>>>>>> 74698cc855e800c4a7010b48d6feea118f5d1c21
                        About Us
                      </a>
                      <hr />
                    </li>

                    <li>
<<<<<<< HEAD
                      <a href="http://iiitkalyani.ac.in/php/administration.php" className="text-white-footer" target="blank">
=======
                      <a href="http://iiitkalyani.ac.in/php/administration.php" className="text-white-footer"  >
>>>>>>> 74698cc855e800c4a7010b48d6feea118f5d1c21
                        Adminstartive Body
                      </a>
                      <hr />
                    </li>

                    <li>
<<<<<<< HEAD
                      <a href="http://iiitkalyani.ac.in/php/studentachievement.php" className="text-white-footer" target="blank">
=======
                      <a href="/students/students-achievements" className="text-white-footer"  >
>>>>>>> 74698cc855e800c4a7010b48d6feea118f5d1c21
                        Students' Achievment
                      </a>
                      <hr />
                    </li>

                    <li>
<<<<<<< HEAD
                      <a href="http://iiitkalyani.ac.in/php/gallery/gallery.php" className="text-white-footer" target="blank">
=======
                      <a href="/about/gallery/parikshapecharcha2022" className="text-white-footer"  >
>>>>>>> 74698cc855e800c4a7010b48d6feea118f5d1c21
                        Gallery
                      </a>
                      <hr />
                    </li>

                    <li>
<<<<<<< HEAD
                      <a href="http://iiitkalyani.ac.in/placement/" className="text-white-footer" target="blank">
=======
                      <a href="http://iiitkalyani.ac.in/placement/" className="text-white-footer"  >
>>>>>>> 74698cc855e800c4a7010b48d6feea118f5d1c21
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
<<<<<<< HEAD
                      <a href="/e-notice-board" className="text-white-footer">
=======
                      <a href="http://iiitkalyani.ac.in/php/notifications.php" className="text-white-footer"  >
>>>>>>> 74698cc855e800c4a7010b48d6feea118f5d1c21
                        e-Notice Board
                      </a>
                      <hr />
                    </li>

                    <li>
<<<<<<< HEAD
                      <a href="http://iiitkalyani.ac.in/php/rti.php" className="text-white-footer" target="blank">
=======
                      <a href="/pdf/RTI/Office Order-96_RTI.pdf" className="text-white-footer"  >
>>>>>>> 74698cc855e800c4a7010b48d6feea118f5d1c21
                        Right To Information
                      </a>
                      <hr />
                    </li>

                    <li>
<<<<<<< HEAD
                      <a href="http://iiitkalyani.ac.in/images/The%20Constitution%20of%20India.pdf" className="text-white-footer" target="blank">
=======
                      <a href="/pdf/preamble/The Constitution of India.pdf" className="text-white-footer"  >
>>>>>>> 74698cc855e800c4a7010b48d6feea118f5d1c21
                        Preamble of the Constitution of India
                      </a>
                      <hr />
                    </li>

                    <li>
<<<<<<< HEAD
                      <a href="http://iiitkalyani.ac.in/php/fee_structure.php" className="text-white-footer" target="blank">
=======
                      <a href="http://iiitkalyani.ac.in/php/fee_structure.php" className="text-white-footer"  >
>>>>>>> 74698cc855e800c4a7010b48d6feea118f5d1c21
                        Fee Structure
                      </a>
                      <hr />
                    </li>

                    <li>
<<<<<<< HEAD
                      <a href="http://iiitkalyani.ac.in/php/ugregulations.php" className="text-white-footer" target="blank">
=======
                      <a href="http://iiitkalyani.ac.in/php/ugregulations.php" className="text-white-footer"  >
>>>>>>> 74698cc855e800c4a7010b48d6feea118f5d1c21
                        UG Regulations
                      </a>
                      <hr />
                    </li>

                    <li>
<<<<<<< HEAD
                      <a href="http://iiitkalyani.ac.in/php/nptel.php" className="text-white-footer" target="blank">
=======
                      <a href="/academics/nptel" className="text-white-footer"  >
>>>>>>> 74698cc855e800c4a7010b48d6feea118f5d1c21
                        NPTEL Collaboration
                      </a>
                      <hr />
                    </li>

                    <li>
<<<<<<< HEAD
                      <a href="http://iiitkalyani.ac.in/php/Academic_cal.php" className="text-white-footer" target="blank">
=======
                      <a href="/academics/academic-calendar" className="text-white-footer"  >
>>>>>>> 74698cc855e800c4a7010b48d6feea118f5d1c21
                        Academic Calender
                      </a>
                      <hr />
                    </li>

                    <li>
<<<<<<< HEAD
                      <a href="http://iiitkalyani.ac.in/php/nep.php" className="text-white-footer" target="blank">
=======
                      <a href="http://iiitkalyani.ac.in/php/nep.php" className="text-white-footer"  >
>>>>>>> 74698cc855e800c4a7010b48d6feea118f5d1c21
                        New National Education Policy-2020
                      </a>
                      <hr />
                    </li>

                    <li>
<<<<<<< HEAD
                      <a href="http://iiitkalyani.ac.in/php/iic.php" className="text-white-footer" target="blank">
=======
                      <a href="/research/IIC" className="text-white-footer"  >
>>>>>>> 74698cc855e800c4a7010b48d6feea118f5d1c21
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
          {/* <Reveal keyframes={customAnimation3}>
          <div className="footer-portal">
            <div className="footer-portal-head">Portals</div>
            <div className="footer-portal-body">
              <a
                href="http://iiitkalyani.ac.in/images/ARIIA%20_%200796_2022.pdf"
                download
                target="blank"
              >
                <Image className="ariia_logo" src={ariia_logo} alt="ariia_logo" />
              </a>
              <ul className="list-unstyled-portal">
                <li>
                  <a
                    href="https://main.trai.gov.in/"
                    className="text-white-footer-portal"
                    target="blank"
                  >
                    TRAI
                  </a>
                </li>
                <li>
                  <a
                    href="https://pmrf.in/"
                    className="text-white-footer-portal"
                    target="blank"
                  >
                    Prime Minister Research Fellowship
                  </a>
                </li>
                <li>
                  <a
                    href="http://unnatbharatabhiyan.gov.in/"
                    className="text-white-footer-portal"
                    target="blank"
                  >
                    Unnat Bharat Abhiyan
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.vidyalakshmi.co.in/Students/"
                    className="text-white-footer-portal"
                    target="blank"
                  >
                    Vidya Lakshmi
                  </a>
                </li>
                <li>
                  <a
                    href="http://scholarship.up.nic.in/"
                    className="text-white-footer-portal"
                    target="blank"
                  >
                    UP Scholarship
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.narendramodi.in/pm-modi-launches-fit-india-movement-546213"
                    className="text-white-footer-portal"
                    target="blank"
                  >
                    Fit India Movement
                  </a>
                </li>
                <li>
                  <a
                    href="http://nwm.gov.in/?q=catchtherain!"
                    className="text-white-footer-portal"
                    target="blank"
                  >
                    Jal Shakti Abhiyan: Catch The Rain
                  </a>
                </li>
              </ul>
            </div>
            </div>
            </Reveal> */}
          {/* <!-- Section: Links --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}

        {/* <!-- Copyright --> */}

        <div
          className="footer-copyright"
        >
          {/* <hr /> */}
          <p style={{ position: "absolute", backgroundColor: "rgb(25,25,25)", padding: "0 10px 0 10px", zIndex: "22", fontSize: "17px", display: "flex", flexDirection: "row" }}>Portals
            <a
<<<<<<< HEAD
              href="http://iiitkalyani.ac.in/images/ARIIA%20_%200796_2022.pdf"
              download
=======
              href="/pdf/ARIIA/ARIIA _ 0796_2022.pdf"
>>>>>>> 74698cc855e800c4a7010b48d6feea118f5d1c21
              target="blank"

            >
              <Image style={{ height: "30px", width: "150px", paddingLeft: "10px" }} src={ariia_logo} alt="ariia_logo" />

            </a></p>
          <Marquee speed={80} className="marquee" gradient={false}>

            <a
<<<<<<< HEAD
              href="https://main.trai.gov.in/"
=======
              href="https://trai.gov.in/"
>>>>>>> 74698cc855e800c4a7010b48d6feea118f5d1c21
              className="text-white-footer-portal"
              target="blank"
            >
              TRAI &emsp;
            </a>
            <a
              href="https://pmrf.in/"
              className="text-white-footer-portal"
              target="blank"
            >
              Prime Minister Research Fellowship &emsp;
            </a>
            <a
              href="http://unnatbharatabhiyan.gov.in/"
              className="text-white-footer-portal"
              target="blank"
            >
              Unnat Bharat Abhiyan &emsp;
            </a>
            <a
              href="https://www.vidyalakshmi.co.in/Students/"
              className="text-white-footer-portal"
              target="blank"
            >
              Vidya Lakshmi &emsp;
            </a>
            <a
<<<<<<< HEAD
              href="http://scholarship.up.nic.in/"
=======
              href="https://scholarship.up.gov.in/"
>>>>>>> 74698cc855e800c4a7010b48d6feea118f5d1c21
              className="text-white-footer-portal"
              target="blank"
            >
              UP Scholarship &emsp;
            </a>
            <a
              href="https://www.narendramodi.in/pm-modi-launches-fit-india-movement-546213"
              className="text-white-footer-portal"
              target="blank"
            >
              Fit India Movement &emsp;
            </a>
            <a
              href="http://nwm.gov.in/?q=catchtherain!"
              className="text-white-footer-portal"
              target="blank"
            >
              Jal Shakti Abhiyan: Catch The Rain  &emsp;
            </a>
          </Marquee>
          <hr style={{ marginTop: "2.5vh" }} />
          <p>© 2019 Indian Institute of Information Technology Kalyani</p>
        </div>
      </footer>

      {/* <!-- Footer --> */}
    </div>
  );
}