import React from "react";
import "./css/infrastructure.css";

const Infrastructure = () => {
  return (
    <div id="infrastructure">
      <div className="infra">
        <div className="text-div">
          <div className="why-head">
            <h2 style={{ textAlign: "center" }}>Infrastructure</h2>
          </div>
          <p>
            The Government of West Bengal has lent support to the institute by
            granting 50 acres of land for setting up the Campus. While
            construction has been started in the land provided, the institute is
            presently running from the temporary campus at Webel IT Park,
            Kalyani.
            <br />
            <br />
            The infrastructure of the building is pretty good and sufficient for
            the functioning of the institution. The classrooms allotted for the
            institution are smart classrooms, which have video conferencing
            facility. Faculties and industry experts from distant locations take
            classes and interact with the students through video conferencing in
            the classrooms.
          </p>
        </div>
        <div className="icons-div">
          <a
            href="/about/facilities/campus?slug=campus"
            target="_blank"
            className="infra-icon"
          >
            <img src="img/building_blue.svg" alt="Campus" />
            <span>CAMPUS</span>
          </a>
          <a
            href="/about/facilities/hostel?slug=hostel"
            target="_blank"
            className="infra-icon"
          >
            <img src="img/bunk.svg" alt="Hostel" />
            <span>HOSTEL</span>
          </a>

          <a
            href="/about/facilities/labs?slug=labs"
            target="_blank"
            className="infra-icon"
          >
            <img src="img/lab.svg" alt="Lab" />
            <span>LAB</span>
          </a>
          <a
            href="/about/facilities/library?slug=library"
            target="_blank"
            className="infra-icon"
          >
            <img src="img/books.svg" alt="Library" />
            <span>LIBRARY</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
