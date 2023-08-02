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
            url: "ppc/1",
        },
        {
            index: 1,
            url: "ppc/2",
        },
        {
            index: 2,
            url: "ppc/3",
        },
        {
            index: 3,
            url: "ppc/4",
        },
        {
            index: 4,
            url: "ppc/5",
        },
        {
            index: 5,
            url: "ppc/6",
        },
    ];
    const arr = [
        {
            index: 0,
            active: true,
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
            active: false,
        },
        {
            index: 7,
            active: false,
        },
    ];

    const scroll = 0;
    return (
        <>
            <NavBar />
            <div className="gallery">
                <div className="main">
                    <h1>PARIKSHA PE CHARCHA 2022</h1>
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
