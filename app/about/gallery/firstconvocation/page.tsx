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
            url: "convocation/1",
        },
        {
            index: 1,
            url: "convocation/2",
        },
        {
            index: 2,
            url: "convocation/3",
        },
        {
            index: 3,
            url: "convocation/4",
        },
        {
            index: 4,
            url: "convocation/5",
        },
        {
            index: 5,
            url: "convocation/6",
        },
        {
            index: 6,
            url: "convocation/7",
        },
        {
            index: 7,
            url: "convocation/8",
        },
        {
            index: 8,
            url: "convocation/9",
        },
        {
            index: 9,
            url: "convocation/10",
        },
        {
            index: 10,
            url: "convocation/11",
        },
        {
            index: 11,
            url: "convocation/12",
        },
        {
            index: 12,
            url: "convocation/13",
        },
        {
            index: 13,
            url: "convocation/14",
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
            active: false,
        },
        {
            index: 6,
            active: true,
        },
        {
            index: 7,
            active: false,
        },
    ];
    const scroll = 100;

    return (
        <>
            <NavBar />
            <div className="gallery">
                <div className="main">
                    <h1>IIIT KALYANI FIRST CONVOCATION</h1>
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
