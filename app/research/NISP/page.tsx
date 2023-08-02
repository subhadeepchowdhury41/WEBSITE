"use client";
import NavBar from "../../sections/appbar/secondNav";
import Footer from '../../sections/footer/footer';
import "../../../styles/Research/NISP/nisp.css";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const NISP = () => {
  return (
    <>
      <NavBar />
      <div className="fluid-center nisp-main-page">
        <h1>National Innovation and Startup Policy</h1>
        <div className="fluid-center nisp-buttons">
        <a href='https://iiitkalyani.ac.in/images/Innovation%20and%20Startup%20_IIITK_V1.0-2.pdf' target="_blank" rel="noreferrer" className="fluid-center nisp-btn">NISP Policy
        <PictureAsPdfIcon style={{'color':'rgb(6, 50, 74)','fontSize':'max(25px,2.5vw)'}} />
        </a>
        <a href='https://iiitkalyani.ac.in/images/Expert%20Committee_webpage.pdf' target="_blank" rel="noreferrer" className="fluid-center nisp-btn">NISP Committee
        <PictureAsPdfIcon style={{'color':'rgb(6, 50, 74)','fontSize':'max(25px,2.5vw)'}} />
        </a>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default NISP;
