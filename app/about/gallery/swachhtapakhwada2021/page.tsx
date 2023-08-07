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
            url: "sp/1",
        },
        {
            index: 1,
            url: "sp/2",
        },
        {
            index: 2,
            url: "sp/3",
        },
        {
            index: 3,
            url: "sp/4",
        },
        {
            index: 4,
            url: "sp/5",
        },
        {
            index: 5,
            url: "sp/6",
        },
        {
            index: 6,
            url: "sp/7",
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
            active: true,
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
    const scroll = 25.5;

    return (
        <>
            <NavBar />
            <div className="gallery">
                <div className="main">
                    <h1>SWACHHTA PAKHWADA 2021</h1>
                    <Carousel carouselData={carouselData} />
                </div>
                <Sidebar array={arr} scroll={scroll} />

            </div>
            <Footer />
        </>
    );
};

export default App;
