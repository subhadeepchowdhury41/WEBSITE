"use client";
import NavBar from "../../sections/appbar/secondNav";
import Footer from '../../sections/footer/footer';
import "../../../styles/sponsoredProjects/sponsoredProjects.css";
import projectsData from './sponsoredProjectsData';

const SponsoredProjects = () => {
  return (
    <>
      <NavBar />
      <div className="fluid-center projects-main-page">
        <h1>Sponsored Projects</h1>
        <p>Ongoing Sponsored Research Projects</p>
        <div className="fluid-center main-projects-card">
        {projectsData.map((item) => {
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
      <Footer/>
    </>
  );
};

export default SponsoredProjects;
