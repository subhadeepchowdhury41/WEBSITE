import React from "react";
import "./css/contact.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import GoogleIcon from "@mui/icons-material/Google";

const TeamMember = ({
  name,
  title,
  email,
  phone,
  linkedin,
  googlePlus,
  imgSrc,
}) => (
  <div className="contact-card">
    <div className="our-team">
      <div className="picture">
        <img className="img-fluid" src={imgSrc} alt={name} />
      </div>
      <div className="team-content">
        <h3 className="name">{name}</h3>
        <h4 className="title">{title}</h4>
        <h6 style={{ marginTop: "5px" }}>
          <a href={`mailto:${email}`}>
            <MailIcon />
            {email}
          </a>
        </h6>
        <h6>
          <PhoneIcon />
          {phone}
        </h6>
      </div>
      <ul className="social">
        <li>
          <a
            href={linkedin}
            className="fa fa-linkedin"
            aria-hidden="true"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a
            href={`mailto:${googlePlus}`}
            className="fa fa-google-plus"
            aria-hidden="true"
          >
            <GoogleIcon />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

const Contact = () => {
  return (
    <div className="contactus">
      <div className="why-head">
        <h2 style={{ textAlign: "center" }}>Student Coordinators</h2>
      </div>
      <div className="students-cord">
        <div className="cord-card">
          <img
            src="img/coord/anuj.jpg"
            alt="Anuj Kirodia"
            style={{ width: "100%" }}
          />
          <h2> Anuj Kirodia </h2>
          <p className="title">Student Coordinator</p>
          <p className="iiit">IIIT Kalyani</p>
          <div>
            <a
              href="https://www.linkedin.com/in/anuj-kirodia-4a28921b9/"
              target="_blank"
            >
              <LinkedInIcon className="cord-link" />
            </a>
          </div>
        </div>

        <div className="cord-card">
          <img
            src="img/coord/ali.jpeg"
            alt="Ali Asad Quasim"
            style={{ width: "100%" }}
          />
          <h2>Ali Asad Quasim</h2>
          <p className="title">Student Coordinator</p>
          <p className="iiit">IIIT Kalyani</p>
          <div>
            <a
              href="https://www.linkedin.com/in/ali-asad-quasim/"
              target="_blank"
            >
              <LinkedInIcon className="cord-link" />
            </a>
          </div>
        </div>

        <div className="cord-card">
          <img
            src="img/coord/aman.png"
            alt="Aman Yadav"
            style={{ width: "100%" }}
          />
          <h2>Aman Yadav</h2>
          <p className="title">Student Coordinator</p>
          <p className="iiit">IIIT Kalyani</p>
          <div>
            <a
              href="https://www.linkedin.com/in/amanyadav13apr/"
              target="_blank"
            >
              <LinkedInIcon className="cord-link" />
            </a>
          </div>
        </div>

        <div className="cord-card">
          <img
            src="img/coord/yash (2).jpg"
            alt="Yashraj Singh"
            style={{ width: "100%" }}
          />
          <h2>Yashraj Singh</h2>
          <p className="title">Student Coordinator</p>
          <p className="iiit">IIIT Kalyani</p>
          <div>
            <a
              href="https://www.linkedin.com/in/yashraj-singh-02/"
              target="_blank"
            >
              <LinkedInIcon className="cord-link" />
            </a>
          </div>
        </div>
      </div>
      <div id="contactus">
        <div className="why-head">
          <h2 style={{ textAlign: "center" }}>Contact Us</h2>
        </div>
        <div className="contact-us">
          <TeamMember
            name="Pratik Chakraborty"
            title="Faculty In-Charge, Training And Placement Cell, IIIT Kalyani"
            email="pratik@iiitkalyani.ac.in"
            phone="+91 8168824544"
            linkedin="https://www.linkedin.com/in/pratik-chakraborty-6a0a0773/"
            googlePlus="pratik@iiitkalyani.ac.in"
            imgSrc="./img/pratik.jpg"
          />

          <TeamMember
            name="Sanjay Chatterji"
            title="Training and Placement Officer, Training And Placement Cell, IIIT Kalyani"
            email="sanjayc@iiitkalyani.ac.in"
            phone="+91 9740122889"
            linkedin="https://www.linkedin.com/in/sanjay-chatterji-936a2523/"
            googlePlus="sanjayc@iiitkalyani.ac.in"
            imgSrc="./img/SANJAY.jpg"
          />
          <div className="contact-card">
            <div className="our-team">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="./img/contactus_tnp.png"
                  alt="Training and Placement"
                />
              </div>
              <div className="team-content">
                <h3 className="name">Training and Placement</h3>
                <h4 className="title">
                  Training & Placement Cell, IIIT Kalyani
                </h4>
                <h6 style={{ marginTop: "5px" }}>
                  <a href="mailto:tnp@iiitkalyani.ac.in">
                    <MailIcon />
                    <span> TnP</span>
                  </a>
                </h6>
                <h6 style={{ marginTop: "5px" }}>
                  <a href="mailto:studentcoordinator_placement@iiitkalyani.ac.in">
                    <MailIcon />
                    <span> Student Coordinator</span>
                  </a>
                </h6>
              </div>
              <ul className="social">
                <li>
                  <a
                    href="https://www.linkedin.com/in/tnpiniiitkalyani/"
                    className="fa fa-linkedin"
                    aria-hidden="true"
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="tnp@iiitkalyani.ac.in"
                    className="fa fa-google-plus"
                    aria-hidden="true"
                  >
                    <GoogleIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
