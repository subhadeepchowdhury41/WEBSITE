"use client";
import NavBar from "../../sections/appbar/secondNav";
import facultyData from "./facultyData";
import "../../../styles/faculty/faculty.css";
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
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
        {/* <div className='fluid-center faculty-main-bar'>
                <img className='faculty-profile-pic' src="https://iiitkalyani.ac.in/images/staff/sp.png" alt="" />
                <div className='fluid-center faculty-profile'>
                    <h2 style={{'fontWeight':'700','fontSize':'2.5vh'}}>Dr. Sanjoy Pratihar</h2>
                    <h2 style={{'fontWeight':'300'}}>Assistant Professor</h2>
                    <h2 style={{'backgroundColor':'lightgray','padding':'3px 15px 3px 15px','borderRadius':'20px','fontSize':'15px'}}>PhD @IIT Kharagpur</h2>
                    <div className='faculty-profile-icon'>
                    <EmailIcon color="primary" fontSize="large" style={{'color':'black'}}/>
                    <LinkedInIcon color="primary" fontSize="large"/>
                    <FacebookIcon color="primary" fontSize="large"/>
                    <InstagramIcon color="primary" fontSize="large" style={{'color':'red'}}/>
                    </div>
                </div>
                <div className='fluid-center faculty-topic'>
                <ul className="list-disc">
                    <li>Natural Language Processing Digital image Processing</li>
                    <li>Pattern Recognition</li>
                    <li>Computer Vision and Image Analysis</li>
                    <li>Mathematical Morphology</li>
                    <li>AI techniques in Computer Vision</li>
                </ul>        
                   
                </div>
                <div className='faculty-more'>
                    <button className='faculty-more-button'></button>
                </div>
            
            </div> */}
      </div>
    </>
  );
};

export default Faculty;
