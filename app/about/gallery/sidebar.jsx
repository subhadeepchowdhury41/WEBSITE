import React, { useRef, useEffect } from "react";
import "./page.css";
import Image from "next/image";

const arr = [
  {
    images: [
      {
        url: "ppc/1",
        id: 0,
        link: "/about/gallery/parikshapecharcha2022",
        name: "Pariksha Pe Charcha 2022",
      },
      {
        url: "republic/1",
        id: 1,
        link: "/about/gallery/republicday2022",
        name: "Republic Day 2022",
      },
      {
        url: "sp/1",
        id: 2,
        link: "/about/gallery/swachhtapakhwada2021",
        name: "Swachhta Pakhwada 2021",
      },
      {
        url: "online/1",
        id: 3,
        link: "/about/gallery/iiitkalyanionlineevents",
        name: "Online Events",
      },
      {
        url: "winners/1",
        id: 4,
        link: "/about/gallery/winners",
        name: "Winner",
      },
      {
        url: "rp/1",
        id: 5,
        link: "/about/gallery/republicday2021",
        name: "Republic Day 2021",
      },
      {
        url: "convocation/1",
        id: 6,
        link: "/about/gallery/firstconvocation",
        name: "First Convocation",
      },
      {
        url: "induction/1",
        id: 7,
        link: "/about/gallery/firstinduction",
        name: "First Induction",
      },
    ],
  },
];

export default function Sidebar({ array, scroll }) {
  const divRef = useRef();

  useEffect(() => {
    if (divRef.current) {
      // Calculate 30% of the scrollable height
      const scrollableHeight = divRef.current.scrollHeight;
      const scrollToPosition = (scroll / 100) * scrollableHeight;

      // Scroll to the calculated position
      divRef.current.scrollTop = scrollToPosition;
    }
  }, [divRef]);

  return (
    <div ref={divRef} className="gallery-side">
      {arr[0].images.map((index) => (
        <div className="gallery-side-card" key={index.id}>
          <div className={array[index.id]?.active ? "active" : ""}></div>
          <div className="gallery-side-card-box">
            <a href={index.link}>
              <Image
                className="gallery-side-image"
                src={require(`../../../assets/gallery/${index.url}.jpg`)}
                alt=""
              />
            </a>
            <div className="gallery-slide-text">
              <span className="gallery-heading">{index.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
