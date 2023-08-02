"use client";
import NavBar from "../../../sections/appbar/secondNav";
import Footer from "../../../sections/footer/footer";
import Comingsoon from "../../../designSystem/comingsoon";
import { useEffect } from "react";
import Carousel from "../carousel";
import Sidebar from "../sidebar";
import logo from "../../../../assets/gallery/ppc/1.jpg";
import Image from "next/image";

const App: React.FC = () => {
  useEffect(() => {
    document.title =
      "Gallery | Indian Institute of Information Technology, Kalyani";
  }, []);
  const carouselData = [
    {
      index: 0,
      url: "online/2",
    },
    {
      index: 1,
      url: "online/3",
    },
    {
      index: 2,
      url: "online/4",
    },
    {
      index: 3,
      url: "online/5",
    },
  ];
  const arr = [
    {
      index: 0,
      active: false,
    },
    {
      index: 1,
      active: false,
    },
    {
      index: 2,
      active: false,
    },
    {
      index: 3,
      active: true,
    },
    {
      index: 4,
      active: false,
    },
    {
      index: 5,
      active: false,
    },
    {
      index: 6,
      active: false,
    },
    {
      index: 7,
      active: false,
    },
  ];

  const scroll = 37.5;
  return (
    <>
      <NavBar />
      <div className="gallery">
        <div className="main">
          <h1>ONLINE EVENTS</h1>
          <Carousel carouselData={carouselData} />
        </div>
        <Sidebar array={arr} scroll={scroll} />
      </div>
      {/* <Image src={require(`../../../../assets/gallery/${carouselData[0].url}.jpg`)} alt="logo" /> */}

      <Footer />
    </>
  );
};

export default App;
