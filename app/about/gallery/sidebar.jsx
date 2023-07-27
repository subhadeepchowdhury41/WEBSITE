import React from "react";
import "./page.css";
import Image from "next/image";
import logo from "../../../assets/gallery/republic/1.jpg";

// type Props = {}
const arr = [
  {
    index: 0,
    url: "../../../assets/gallery/republic/1.jpg",
  },
  {
    index: 1,
    url: { logo },
  },
];

export default function Sidebar({ array }) {
  return (
    <div className="gallery-side">
      {arr.map((index) => {
        return (
          <>
            <div className="gallery-side-card">
              <div className="active"></div>
              <div
                className="gallery-side-card-box"
                style={{ backgroundImage: `url(${index.url})` }}
              ></div>
            </div>
          </>
        );
      })}
    </div>
  );
}
