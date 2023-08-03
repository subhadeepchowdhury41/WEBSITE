"use client";
import NavBar from "../../sections/appbar/secondNav";
import Footer from '../../sections/footer/footer';
import "../../../styles/Research/SRIC/sric.css";
import sricData from './data'

const SIRC = () => {
  return (
    <>
      <NavBar />
      <div className="fluid-center sric-main-page">
        <h1>Sponsored Research & Industrial Consultancy (SRIC) Cell</h1>
        <p>IIIT Kalyani encourages its faculty members to submit research proposals to various government funding agencies like, SERB, DST, MEITY, etc., and also to industries on problems related to current day applications as well as basic sciences in the fields of Computer Science and Engineering, Electronics Communication Engineering, Physics, and Mathematics. Administrative support required for proposal submission and project management including accounting, recruitment of JRF and other research personnel, etc., are provided.</p>
        <p>It is the constant endeavour of the Institute to create a world class R&D facility at IIIT Kalyani in IT and Computer Science and allied fields and the Institute’s SRIC Cell is continuously striving to achieve this goal and trying to mark the institute&apos;s name on the global map.</p>
        <div className="fluid-center nisp-buttons">
        {sricData.map((item)=>{
            return(
              <a key={item.id} href={item.link} target="_blank" rel="noreferrer" className="fluid-center nisp-btn">
                {item.title}
              </a>
            )
        })}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SIRC;
