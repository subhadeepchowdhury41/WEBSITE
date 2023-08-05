"use client";
import { useEffect } from "react";
import NavBar from "../../sections/appbar/secondNav";
import Footer from '../../sections/footer/footer';
import "../../../styles/Research/SRIC/sric.css";
import sricData from './data'
import { ImportExport } from "@mui/icons-material";

const SIRC = () => {
  useEffect(() => {
    document.title =
      "SRIC | Indian Institute of Information Technology, Kalyani";
  }, []);
  return (
    <>
      <NavBar />
      <div className="fluid-center sric-main-page">
        <h1>Sponsored Research & Industrial Consultancy (SRIC) Cell</h1>
        <p>IIIT Kalyani encourages its faculty members to submit research proposals to various government funding agencies like, SERB, DST, MEITY, etc., and also to industries on problems related to current day applications as well as basic sciences in the fields of Computer Science and Engineering, Electronics Communication Engineering, Physics, and Mathematics. Administrative support required for proposal submission and project management including accounting, recruitment of JRF and other research personnel, etc., are provided.</p>
        <p>It is the constant endeavour of the Institute to create a world class R&D facility at IIIT Kalyani in IT and Computer Science and allied fields and the Institute&apos;s SRIC Cell is continuously striving to achieve this goal and trying to mark the institute&apos;s name on the global map.</p>
        <div className="fluid-center nisp-buttons">
        {sricData.sric.map((item)=>{
            return(
              <a key={item.id} href={item.link} target="_blank" rel="noreferrer" className="fluid-center nisp-btn">
                {item.title}
              </a>
            )
        })}
        </div>
        <div className="fluid-center sirc-spon">
          <h2>Ongoing Sponsored Research Projects</h2>
          <div className="fluid-center sirc-spon-buttons">
          {sricData.ongoing.map((item) => {
            return (
              <div key={item.id} className="fluid-center projects-card">
                <h2>{item.title}</h2>
                <h4>{item.desc}</h4>
                <section>
                  <h3>PI : {item.PI}</h3>
                  <h3>Project value : {item.value}</h3>
                </section>
              </div>
            );
          })}
          </div>
        </div>
        <div className="fluid-center sirc-spon">
          <h2>Completed Sponsored Research Projects</h2>
          <div className="fluid-center sirc-spon-buttons">
          {sricData.completed.map((item) => {
            return (
              <div key={item.id} className="fluid-center projects-card">
                <h2>{item.title}</h2>
                <h4>{item.desc}</h4>
                <section>
                  <h3>PI : {item.PI}</h3>
                  <h3>Project value : {item.value}</h3>
                </section>
              </div>
            );
          })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SIRC;
