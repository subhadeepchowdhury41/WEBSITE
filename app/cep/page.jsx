import React from "react";
import educationProgram from "../sections/cardSection/educationProgram";
import "./page.css";

const page = () => {
  return (
    <div className="announcement-page">
      <h1>All Programs</h1>
      <ul style={{ listStyle: "circle" }}>
        {educationProgram.map((index) => {
          return (
            <a href={index.description}>
              <li>{index.title} </li>
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default page;
