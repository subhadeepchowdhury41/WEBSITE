"use client";
import Image from 'next/image'
import NavBar from "../../sections/appbar/secondNav";
import Footer from '../../sections/footer/footer';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import "../../../styles/Students/antiRagging/anti_ragging.css";
import Data from "./data";
import { useEffect } from "react";


const Anti_Ragging = () => {
  useEffect(() => {
    document.title =
      "Anti Ragging | Indian Institute of Information Technology, Kalyani";
  }, []);
  return (
    <>
      <NavBar />
      <div className="fluid-center ragging-main-page">
        <h1>Anti Ragging</h1>
        <p>IIIT Kalyani is a ragging-free campus. Ragging here is an offence. An anti-ragging committee monitors all the ragging related activities. All students are required to submit the ‘Anti Ragging Undertaking’ to IIIT Kalyani Office (Room 107, WEBEL IT Park) in the prescribed format as given in the website http://www.antiragging.in/ by 20 July 2017.</p>
        <div className="fluid-center anti_ragging-main">
          {Data.map((item) => {
            return (
              <div key={item.id} className="fluid-center anti_ragging-card">
                <Image src={item.imgUrl} width={300} height={300} alt="thumbnail" className="anti_ragging-thumbnail" />
                <h3 className='anti_ragging-title'>{item.name}</h3>
                <button className="anti_ragging-download" id="alb" aria-labelledby="labeldiv">
                  <FileOpenIcon style={{ 'color': 'rgb(6, 50, 74)', 'zIndex': '-1' }} />
                  <a href={item.pdf} target="_blank" rel="noreferrer" download></a>
                </button>
              </div>
            );
          })}
        </div>
        <p> National Anti Ragging Help Line (UGC Crisis Hotline)24×7 Toll Free Number* 1800-180-5522(helpline@antiragging.in).</p>
        <a className='anti-ragging_home' href="https://www.antiragging.in/">Anti-ragging Home</a>
      </div>
      <Footer />
    </>
  );
};

export default Anti_Ragging;
