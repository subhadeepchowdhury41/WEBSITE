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
            url: "winners/1",
        },
        {
            index: 1,
            url: "winners/2",
        },
        {
            index: 2,
            url: "winners/3",
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
            active: true,
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
    const scroll = 49.5;

    return (
        <>
            <NavBar />
            <div className="gallery">
                <div className="main">
                    <h1>WINNERS</h1>
                    <Carousel carouselData={carouselData} />
                </div>
                <Sidebar array={arr} scroll={scroll} />

            </div>
            <Footer />
        </>
    );
};

export default App;
