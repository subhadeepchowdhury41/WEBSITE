/* eslint-disable @next/next/no-img-element */
"use client";
import NavBar from "../sections/appbar/secondNav";
import Footer from '../sections/footer/footer';
import facultyData from "./facultyData";
import "../../styles/Academics/faculty/faculty.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Faculty = () => {
  return (
    <>
      <NavBar />
      <div className="fluid-center faculty-main-page">
        <h1>IIIT kalyani Faculties</h1>
        <div className="fluid-center faculty-line">
          <span>Profile</span>
          <span>Topic of Expertise</span>
        </div>
        {facultyData.map((item) => {
          return (
            <div key={item.email[0]} className="fluid-center main-bar-body">
              <div className="fluid-center faculty-main-bar">
                <img className="faculty-profile-pic" src={item.imgUrl} alt="" />
                <div className="fluid-center faculty-profile">
                  <h2 style={{ fontWeight: "700", fontSize: "2.5vh" }}>{item.name}</h2>
                  <h2 style={{ fontWeight: "300" }}>{item.designation}</h2>
                  <h2 style={{ backgroundColor: "lightgray",padding: "3px 15px 3px 15px",borderRadius: "20px",fontSize: "15px"}}>
                    {item.eduaction}
                  </h2>
                  <div>
                    <EmailIcon className="faculty-profile-icon" color="primary" style={{'color':'black'}} onClick={()=>{navigator.clipboard.writeText(item.email[0])}} />
                    <LinkedInIcon className="faculty-profile-icon" color="primary" onClick={()=>{window.location.href = item.linkedIn}} />
                  </div>
                </div>
                <div className="fluid-center faculty-topic">
                  <ul className="list-disc">
                    {item.topicExpertie.map((element) => {
                      return <li key={element}>{element}</li>;
                    })}
                  </ul>
                </div>
              </div>
              <form className="faculty-more" action={item.more} >
                <button className="faculty-more-button" type="submit"></button>
              </form>
            </div>
          );
        })}
      </div>
      <Footer/>
    </>
  );
};

export default Faculty;
