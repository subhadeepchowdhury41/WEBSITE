"use client";
import { useEffect } from "react";
import NavBar from "../../sections/appbar/appbar";
import Footer from '../../sections/footer/footer';
import "../../../styles/research/nisp/nisp.css";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import nispData from './data'

const NISP = () => {
  useEffect(() => {
    document.title =
      "NISP | Indian Institute of Information Technology, Kalyani";
  }, []);
  return (
    <>
      <div className='h-[220px] bg-[rgba(0,0,0,0.8)] h-set-mobile'>
        <NavBar isHomepage={false} />
      </div>
      <div className="fluid-center nisp-main-page">
        <h1>National Innovation and Startup Policy</h1>
        <div className="fluid-center nisp-buttons">
        {nispData.map((item)=>{
          return(
            <a key={item.id} href={item.link} target="_blank" rel="noreferrer" className="fluid-center nisp-btn">{item.title}
            <PictureAsPdfIcon style={{'color':'rgb(6, 50, 74)','fontSize':'max(25px,2.5vw)'}} />
            </a>
          )
        })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NISP;
