/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect } from 'react';
import NavBar from '../../sections/appbar/secondNav';
import Footer from '../../sections/footer/footer';
import './page.css';
import map from '../../../assets/map/map.png';
import Image from 'next/image';

const App: React.FC = () => {
  useEffect(() => {
    const updateViewLength = () => {
      const sidebar = document.getElementById("sidebar");
      if (sidebar) {
        let startLength = window.scrollY;
        startLength = startLength - 50;
        sidebar.style.top = `${startLength}px`;
      }
    };

    updateViewLength();
    window.addEventListener('scroll', updateViewLength);

    return () => {
      window.removeEventListener('scroll', updateViewLength);
    };
  }, []);
  useEffect(() => {
    document.title = 'About Us | Indian Institute of Information Technology, Kalyani';
  }, []);

  return (
    <>
      <div className="page-container">
        <NavBar />
        <div className="page-body">
          <div className="sidebar1">
            <div className="sidebar2" id="sidebar">
              <div className="mottoSection">
                <h2>Our Motto</h2>
                <hr className="complete" />
                <h1 className="mottoSlogan">विद्याधनं सर्वधनप्रधानम्</h1>
                <p className="mottoSloganMeaning">It means <span className="highlight">Knowledge is Supreme of all Wealth</span></p>
              </div>
              <hr className="complete" />
              <div className='side-img' >
                {/* <a href='https://goo.gl/maps/ZsFRFctaRJsphZwi7' target="_blank">
                  <Image src={map} alt="map" ></Image>
                </a> */}
                <iframe className='side-img' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.7124704321814!2d88.43170931534432!3d22.960814024394352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f894fc95000001%3A0x56bfd0b3bdadb903!2sIndian%20Institute%20of%20Information%20Technology%20Kalyani!5e0!3m2!1sen!2sin!4v1678731580741!5m2!1sen!2sin" style={{ border: "0" }} loading="lazy" ></iframe>

              </div>
              <p className="reach">Indian Institute of Information Technology Kalyani, Kalyani, India-741235</p>
              <p className="reach">Email: <a href="mailto:office@iiitkalyani.ac.in" target="_blank" rel="noreferrer">office@iiitkalyani.ac.in</a></p>
            </div>
          </div>
          <div className="content">
            <h1 className="aboutheading">About IIIT Kalyani</h1>
            {/* <hr /> */}
            <img className="image h-adj-aboutus " src="/img/cllg.jpg" alt="IIIT Kalyani" />

            <div>
              <p className="aboutparagraph">IIIT Kalyani strives to evolve into a world-class academic institution with the highest quality
                of education and research facilities and produce industry ready IT graduates to meet the industry demands.
              </p>
              <p className="aboutparagraph"> The institute will act as a catalyst in fostering an
                innovative entrepreneur-focused ecosystem to ensure that new products, solutions and IP are created in the State taking advantage of the intellectual capital of the State.
              </p>
              <p className="aboutparagraph">IIIT Kalyani has been set up at Kalyani, West Bengal by Government of India (Ministry of Education), Government of West Bengal and industry partners on
                a Not-for-profit Public Private Partnership (N-PPP) basis, being funded in the ratio of 50:35:15 respectively by the above three parties. Additionally, the Government of West Bengal
                has lent support to the institute by granting 50 acres of land for setting up the Campus. The industry partners of IIIT Kalyani are Coal India Ltd. and Rolta Foundation for the present.
              </p>
              <p className="aboutparagraph">The institute is run by the Board of Governors of IIIT Kalyani whose members include the representatives of Government of India (MHRD), Government of West Bengal,
                industry partners and eminent people from academia, industry and civil society.
              </p>
              <p className="aboutparagraph">
                IIIT Kalyani has been attributed the status of Institute of National Importance (INI) by the cabinet in March 2017.
              </p>
              <p className="aboutparagraph">
                While construction has been started in the land provided, the institute is presently running from the temporary campus at Webel IT Park, Kalyani.
              </p>
            </div>
            <h1 className="aboutheading">How to Reach?</h1>
            <hr />
            <p className="aboutparagraph">The most preferred route to reach kalyani if you can make up to
              Howrah / Shalimar / Santragachi / Netaji Subhash Chandra Bose International Airport(Dum Dum).</p>
            <p className="aboutparagraph">All possible routes are mentioned below:</p>
            <div>
              <div className="travel">
                <h4>From Howrah Railway Station</h4>
                <ul>
                  <li><h5>HOWRAH TO SEALDAH</h5>
                    <p>From Howrah get a prepaid taxi from the taxi stand to Sealdah railway station (you may book an ola or uber cab). Buses can also be preferred.</p>
                  </li>
                  <li><h5>SEALDAH TO KALYANI</h5>
                    <p>From Sealdah Railway station you will get many local trains towards Kalyani.</p>
                  </li>
                  <li><h5>KALYANI TO IIIT KALYANI</h5>
                    <p>As you will leave the premise of Kalyani Railway Station, you should be able to find public transports (mostly TATA Magic, beware usually e-rickshaws would not take you to Webel IT Park), towards your right. They will drop you right in front of the gate of Webel IT Park.</p>
                  </li>
                </ul>
              </div>
              <div className="travel">
                <h4>From Howrah Railway Station</h4>
                <ul>
                  <li><h5>HOWRAH TO BANDEL</h5>
                    <p>You will get a lot of locals and trains available towards Bandel from the Howrah Junction. </p>
                  </li>
                  <li><h5>BANDEL TO NAIHATI</h5>
                    <p>After reaching Bandel Jn. You have to get a train to Naihati Jn. There are a lot of trains to Naihati.</p>
                  </li>
                  <li><h5>NAIHATI TO KALYANI</h5>
                    <p>Naihati is just 3 stops away from Kalyani. This is an intermediate stop for local trains which run between Sealdah and Kalyani mention in the Sealdah To Kalyani route above.</p>
                  </li>
                  <li><h5>KALYANI TO IIIT KALYANI</h5>
                    <p>As you will leave the premise of Kalyani Railway Station, you should be able to find public transports (mostly TATA Magic, beware usually e-rickshaws would not take you to Webel IT Park), towards your right. They will drop you right in front of the gate of Webel IT Park.</p>
                  </li>
                </ul>
              </div>
              <div className="travel">
                <h4>From Shalimar Railway Station</h4>
                <ul>
                  <li><h5>SHALIMAR TO SEALDAH</h5>
                    <p>From Shalimar get a prepaid taxi from the taxi stand to Sealdah railway station (you may book an ola or uber cab). Buses can also be preferred.</p>
                  </li>
                  <li><h5>SEALDAH TO KALYANI</h5>
                    <p>From Sealdah Railway station you will get many local trains towards Kalyani.</p>
                  </li>
                  <li><h5>KALYANI TO IIIT KALYANI</h5>
                    <p>As you will leave the premise of Kalyani Railway Station, you should be able to find public transports (mostly TATA Magic, beware usually e-rickshaws would not take you to Webel IT Park), towards your right. They will drop you right in front of the gate of Webel IT Park.</p>
                  </li>
                </ul>
              </div>
              <div className="travel">
                <h4>From Dum Dum Airport(Netaji Subhash Chandra Bose Airport)</h4>
                <ul>
                  <li><h5>Bus Route:</h5>
                    <p>You can get a lot of buses to Dum Dum junction from the Airport Gate No. 1 Bus Stop, Jessore Rd.</p>
                  </li>
                  <li><h5>Rail Route:</h5>
                    <p>The nearest station at the airport is the Biman Bandar(550m) and the next nearest station to it is Durganagar(2.7km)</p>
                  </li>
                  <li>From Durganagar there are 72 locals running towards Dum Dum. All the locals to Sealdah pass through Dum Dum.</li>
                  <li>After coming to Dum Dum Jn you will get many locals running towards Kalyani.</li>
                  <li><h5>KALYANI TO IIIT KALYANI</h5>
                    <p>As you will leave the premise of Kalyani Railway Station, you should be able to find public transports (mostly TATA Magic, beware usually e-rickshaws would not take you to Webel IT Park), towards your right. They will drop you right in front of the gate of Webel IT Park.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="historyBody">
          <h1 className="aboutheading">History</h1>
          <hr className="complete" />
          <p className="aboutparagraph">The classes started from the first week of July 2014 under the mentorship of IIEST Shibpur, from the temporary campus located at the campus of JIS College
            of Engineering. On 19 August 2014, the official inauguration of the institute was done by the former mentor director Ajoy Kumar Ray, the director of IIEST Shibpur.
            The mentorship was passed on to IIT Kharagpur in 2017 and the institute has since been operating from a transit campus at Webel IT Park.
          </p>
        </div>
        <div className="historyBody">
          <h1 className="aboutheading">About Campus</h1>
          <hr className="complete" />
          <p className="aboutparagraph">
            On Jun 30, 2015 Hon'ble Chief Minister, Mamata Banerjee laid the foundation stone of the Indian Institute of Information Technology (IIIT)
            campus in Kalyani. The campus will be built on 50 acres on Kalyani Expressway on the outskirts of Kalyani town.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
