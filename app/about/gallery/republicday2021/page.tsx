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
            url: "rp/1",
        },
        {
            index: 1,
            url: "rp/2",
        },
        {
            index: 2,
            url: "rp/3",
        },
        {
            index: 3,
            url: "rp/4",
        },
        {
            index: 4,
            url: "rp/5",
        },
        {
            index: 5,
            url: "rp/6",
        },
        {
            index: 6,
            url: "rp/7",
        },
        {
            index: 7,
            url: "rp/8",
        },
        {
            index: 8,
            url: "rp/9",
        },
        {
            index: 9,
            url: "rp/10",
        },
        {
            index: 10,
            url: "rp/11",
        },
        {
            index: 11,
            url: "rp/12",
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
            active: false,
        },
        {
            index: 4,
            active: false,
        },
        {
            index: 5,
            active: true,
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
    const scroll = 61.8;

    return (
        <>
            <NavBar />
            <div className="gallery">
                <div className="main">
                    <h1>REPUBLIC DAY 2021</h1>
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
