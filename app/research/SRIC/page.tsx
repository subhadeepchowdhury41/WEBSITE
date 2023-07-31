"use client";
import NavBar from "../../sections/appbar/secondNav";
import Footer from '../../sections/footer/footer';
import "../../../styles/SRIC/sric.css";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const SIRC = () => {
  return (
    <>
      <NavBar />
      <div className="fluid-center sric-main-page">
        <h1>Sponsored Research & Industrial Consultancy (SRIC) Cell</h1>
        <p>IIIT Kalyani encourages its faculty members to submit research proposals to various government funding agencies like, SERB, DST, MEITY, etc., and also to industries on problems related to current day applications as well as basic sciences in the fields of Computer Science and Engineering, Electronics Communication Engineering, Physics, and Mathematics. Administrative support required for proposal submission and project management including accounting, recruitment of JRF and other research personnel, etc., are provided.</p>
        <p>It is the constant endeavour of the Institute to create a world class R&D facility at IIIT Kalyani in IT and Computer Science and allied fields and the Institute’s SRIC Cell is continuously striving to achieve this goal and trying to mark the institute&apos;s name on the global map.</p>
        <div className="fluid-center nisp-buttons">
        <a href='https://iiitkalyani.ac.in/images/downloads/272.2.5%20Letterof%20Reco%20IIIT%20Kalyani.PDF' target="_blank" rel="noreferrer" className="fluid-center nisp-btn">
            Recognition of IIIT Kalyani by Department of Scientific and Industrial Research
            {/* <PictureAsPdfIcon style={{'color':'rgb(6, 50, 74)','fontSize':'max(25px,2.5vw)'}} /> */}
        </a>
        <a href='https://iiitkalyani.ac.in/images/downloads/272.2.5%20RC%20IIIT%20Kalyani.PDF' target="_blank" rel="noreferrer" className="fluid-center nisp-btn">
            Registration of IIIT Kalyani as a Research lnstitution
            {/* <PictureAsPdfIcon style={{'color':'rgb(6, 50, 74)','fontSize':'max(25px,2.5vw)'}} /> */}
        </a>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SIRC;
