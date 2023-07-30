import React from "react";
import "./page.css";
import Image from "next/image";
import logo from "../../../assets/gallery/republic/1.jpg";

// type Props = {}
const arr = [
  {
    images: [
      {
        url: "ppc/1",
        id: 0,
        link: "/about/gallery/iiitkalyanionlineevents",
      },
      {
        url: "republic/1",
        id: 1,
        link: "/about/gallery/parikshapecharcha2022",
      },
    ],
  },
];

export default function Sidebar({ array }) {
  return (
    <div className="gallery-side">
      {arr[0].images.map((index) => {
        return (
          <>
            <div className="gallery-side-card">
              <div className={array[index.id].active ? "active" : ""}></div>
              <div className="gallery-side-card-box">
                <a href={index.link}>
                  <Image
                    className="gallery-side-image"
                    src={require(`../../../assets/gallery/${index.url}.jpg`)}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
