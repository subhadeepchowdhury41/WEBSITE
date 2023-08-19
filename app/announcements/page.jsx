"use client";

import React, { useEffect } from "react";
import announcement from "../sections/directorMessage/announcementData";
import "./page.css";

const page = () => {
  useEffect(() => {
    document.title =
      "Announcements | Indian Institute of Information Technology, Kalyani";
  }, []);
  return (
    <div className="announcement-page">
      <h1>All Announcements</h1>
      <ul style={{ listStyle: "circle" }}>
        {announcement.map((index) => {
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
