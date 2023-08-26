"use client";
import NavBar from "../../sections/appbar/appbar";
import Footer from '../../sections/footer/footer';
import "../../../styles/research/sponsoredProjects/sponsoredProjects.css";
import projectsData from './sponsoredProjectsData';
import { useEffect } from "react";


const SponsoredProjects = () => {
  useEffect(() => {
    document.title =
      "Sponsored Projects | Indian Institute of Information Technology, Kalyani";
  }, []);
  return (
    <>
      <div className='h-[212px] bg-[rgba(0,0,0,0.8)] h-set-mobile'>
        <NavBar isHomepage={false} />
      </div>
      <div className="fluid-center projects-main-page">
        <h1>Sponsored Projects</h1>
        <div className="fluid-center main-projects-card">
          <p>Ongoing Sponsored Research Projects</p>
          {projectsData.ongoing.map((item) => {
            return (
              <div key={item.id} className="projects-card">
                {item.id}. <strong>Title: {item.title}</strong>, {item.desc}, PI : {item.PI}, Project value : {item.value}
              </div>
            );
          })}
        </div>
        <div className="fluid-center main-projects-card">
          <p>Completed Sponsored Research Projects</p>
          {projectsData.completed.map((item) => {
            return (
              <div key={item.id} className="projects-card">
                {item.id}. <strong>Title: {item.title}</strong>, {item.desc}, PI : {item.PI}, Project value : {item.value}
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SponsoredProjects;
