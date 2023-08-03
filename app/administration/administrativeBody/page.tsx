"use client";
import NavBar from "../../sections/appbar/secondNav";
import Footer from '../../sections/footer/footer';
import acadBodyData from "./acadBodyData";
import "../../../styles/administration/administrativeBody/administrativeBody.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useMediaQuery } from "react-responsive";

const AcadBody = () => {

  const isDesktop = useMediaQuery({ minWidth: 501 });

  return (
    <>
      <NavBar />
      <div className="fluid-center administrativeBody-main-page">
        <h1>IIIT kalyani Faculties</h1>
        <div className="fluid-center administrativeBody-line">
          <span>Profile</span>
          {/* <span>Topic of Expertise</span> */}
        </div>
        {acadBodyData.map((item) => {
          return (
            <div key={item.email[0]} className="fluid-center main-bar-body">
              <div className="fluid-center administrativeBody-main-bar" style={{ justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: isDesktop ? 'row' : 'column', alignItems: 'center' }}>
                  <img className="administrativeBody-profile-pic" src={item.imgUrl} alt="profile" />
                  <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                    <h2 style={{ fontWeight: "700", fontSize: "2.5vh" }}>{item.name}</h2>
                    <h2 style={{ fontWeight: "300" }}>{item.designation}</h2>
                  </div>
                </div>
                <div className="fluid-center administrativeBody-profile">

                  {/* <h2 style={{ backgroundColor: "lightgray",padding: "3px 15px 3px 15px",borderRadius: "20px",fontSize: "15px"}}>
                    {item.eduaction}
                  </h2> */}
                  <div style={{ marginLeft: '10px' }}>
                    <EmailIcon className="administrativeBody-profile-icon" color="primary" style={{ 'color': 'black', marginRight: '5px' }} onClick={() => { navigator.clipboard.writeText(item.email[0]) }} />
                    <span>{item.email[0]}</span>
                    {/* <LinkedInIcon className="administrativeBody-profile-icon" color="primary" onClick={()=>{window.location.href = item.linkedIn}} /> */}
                  </div>
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

export default AcadBody;
