"use client";
import React,{ useEffect } from "react";
import NavBar from "../../sections/appbar/secondNav";
import Footer from '../../sections/footer/footer';
import "../../../styles/students/regulatoryRules/regulatoryRules.css";
import Data from "./data"


const regulatoryRules = () => {
  useEffect(() => {
    document.title =
      "Regulatory Rules | Indian Institute of Information Technology, Kalyani";
  }, []);
  return (
    <>
      <NavBar />
      <div className="fluid-center rr-main-page">
        <h1>Regulatory Rules</h1>
        <p>Compliance to Institute Rules, all students are bound by the institute rules and must obey such orders as may be issued from time to time by the competent authority. Serious breach of institute rules may entail removal from the institute. The following rules should be rigidly adhered to.</p>
        <div className="fluid-center rr-info">
          <ol className="list-decimal">
            {Data.map((element) => {
              return <li className="rr-info-li" key={element.info}>{element.info}
                {element.subinfo.length > 0 &&
                  <ul className="subinfo list-disc">
                    {element.subinfo.map((e) => {
                      return <li key={e}>{e}</li>
                    })}
                  </ul>
                }
              </li>;
            })}
          </ol>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default regulatoryRules;
