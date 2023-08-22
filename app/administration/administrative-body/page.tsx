"use client";
import NavBar from '../../sections/appbar/appbar'
import Footer from '../../sections/footer/footer';
import acadBodyData from "./acadBodyData";
import "../../../styles/administration/administrativeBody/administrativeBody.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react"

const AcadBody = () => {

  const isDesktop = useMediaQuery({ minWidth: 501 });
  useEffect(() => {
    document.title =
      "Adminstrative Body | Indian Institute of Information Technology, Kalyani";
  }, []);

  return (
    <>
      <div className='h-[212px] bg-[rgba(0,0,0,0.8)] h-set-mobile'>
        <NavBar isHomepage={false} />
      </div>
      <div className="fluid-center administrativeBody-main-page">
        <h1>Adminstartive Body</h1>
        <div className="fluid-center administrativeBody-line">

        </div>
        {acadBodyData.map((item) => {
          return (
            <div key={item.email[0]} className="fluid-center main-bar-body">
              <div className=" administrativeBody-main-bar" style={{ justifyContent: 'space-between' }}>
                <div className="administrativeBody-main-bar-div" >
                  <img className="administrativeBody-profile-pic" src={item.imgUrl} alt="profile" />
                  <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                    <h2 className="item-name" >{item.name}</h2>
                    <h2 className="item-designation">{item.designation}</h2>
                  </div>
                </div>
                <div className=" administrativeBody-profile">
                  {/* <h2 >
                    {item.info}
                  </h2> */}
                  <div>
                    <a href={`mailto:${item.email[0]}`}>
                      <EmailIcon className="administrativeBody-profile-icon" color="primary" style={{ 'color': 'black', marginRight: '5px' }} onClick={() => { navigator.clipboard.writeText(item.email[0]) }} />
                      <span>{item.email[0]}</span>
                    </a>
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
