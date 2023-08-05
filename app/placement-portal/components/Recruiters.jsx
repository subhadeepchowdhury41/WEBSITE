import React from "react";
import Carousel from "./Carousel";
import "./css/recruiters.css";
import "./css/whyus.css";

const Recruiters = () => {
  const images = [
    "./img/pngwing.com.png",
    "./img/yelloClass_intern.png",
    "./img/gojek.jpg",
    "./img/Goldman_Sachs-Logo.wine.png",
    "./img/Gupshup.png",
    "./img/amazon-n.png",
    "./img/sqaudstack.jpg",
    "./img/cognizant.jpeg",
    "./img/cisco.png",
    "./img/accolite.png",
    "./img/gobudgo.jpg",
    "./img/infolo.jpg",
    "./img/infosys.png",
    "./img/jio.png",
    "./img/maq.png",
    "./img/mihup.png",
    "./img/tata1mg.png",
    "./img/oneshot.jpg",
    "./img/wipro.png",
    "./img/sharechat.png",
    "./img/nagarro.png",
    "./img/mindfire.png",
    "./img/infolo.jpg",
    "./img/fossee.png",
    "./img/dotpe.png",
    "./img/deltaX.png",
    "./img/cogoport.png",
    "./img/cdot.png",
    "./img/beehyv.png",
    "./img/accolite.png",
    "./img/adecco.png",
    // Add more image URLs as needed
  ];

  const image = [
    "./img/314e.png",
    "./img/adecco_old.png",
    "./img/zensar.png",
    "./img/vap.png",
    "./img/trigent.jpg",
    "./img/vassarlab.png",
    "./img/thrillophilia.png",
    "./img/tele.png",
    "./img/tcGDigital.jpeg",
    "./img/Tanzen_intern.png",
    "./img/sudLife_intern.jpg",
    "./img/softech.png",
    "./img/shopconnect.jpeg",
    "./img/ritwik.jpeg",
    "./img/redsky_technologies.png",
    "./img/quolum.png",
    "./img/publicSapient.png",
    "./img/planentspark.png",
    "./img/octro_intern.png",
    "./img/natinal_lib.png",
    "./img/loyalty_jaggernaut.png",
    "./img/kickdrum.png",
    "./img/ericsson.png",
    "./img/elucidata.png",
    "./img/cuvette.png",
    "./img/clevertap.png",
    "./img/brigosha.jpeg",
    "./img/Affine_Analytics.png",
    "./img/addverb.jpeg",
  ];

  const autoScrollInterval = 1500; // Set the auto-scrolling interval in milliseconds

  return (
    <div className="recruiters" id="recruiters">
      <div className="why-head">
        <h2 style={{ textAlign: "center" }}>Past Recruiters</h2>
      </div>
      <Carousel images={images} autoScrollInterval={autoScrollInterval} />
      <Carousel images={image} autoScrollInterval={autoScrollInterval} />
    </div>
  );
};

export default Recruiters;
