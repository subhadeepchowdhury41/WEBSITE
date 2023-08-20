"use client";
import NavBar from "../../sections/appbar/appbar";
import Footer from '../../sections/footer/footer';
import facultyData from "./data";
import "../../../styles/academics/faculty/faculty.css";
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LaunchIcon from '@mui/icons-material/Launch';

const Faculty = () => {
  useEffect(() => {
    document.title =
      "Faculty | Indian Institute of Information Technology, Kalyani";
  }, []);
  return (
    <>
      <div className='h-[212px] bg-[rgba(0,0,0,0.8)] h-set-mobile'>
        <NavBar isHomepage={false} />
      </div>
      <div className="fluid-center faculty-main-page">
        <h1>IIIT Kalyani Faculties</h1>
        <div className="fluid-center faculty-line">
          <span>Profile</span>
          <span>Topic of Expertise</span>
        </div>
        {facultyData.map((item) => {
          return (
            <div key={item.email[0]} className="fluid-center main-bar-body">
              <div className="fluid-center faculty-main-bar">
                <Image width={500} height={500} className="faculty-profile-pic" src={item.imgUrl} alt="profile" />
                <div className="fluid-center faculty-profile">
                  <h2 style={{ fontWeight: "700", fontSize: "2.5vh" }}>{item.name}</h2>
                  <h2 style={{ fontWeight: "300" }}>{item.designation}</h2>
                  <h2 style={{ backgroundColor: "lightgray", padding: "3px 15px 3px 15px", borderRadius: "20px", fontSize: "15px" }}>
                    {item.eduaction}
                  </h2>
                  <div>
                    <EmailIcon className="faculty-profile-icon" color="primary" style={{ 'color': 'black' }} onClick={() => { window.open(`mailto:${item.email[0]}`, '_blank') }} />
                    {item.more.substring(0, 4) == "http" ? <LaunchIcon className="faculty-profile-icon" onClick={() => { window.open(item.more, '_blank') }} /> : <Link className="faculty-more" href={{ pathname: `/academics/faculty/${item.more}`, query: { slug: item.more } }} target="_blank" rel="noreferrer" ><LaunchIcon className="faculty-profile-icon" /></Link>}

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
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Faculty;
