"use client";
import NavBar from '../../../sections/appbar/appbar'
import Footer from "../../../sections/footer/footer";
import Comingsoon from "../../../designSystem/comingsoon";
import { useEffect, useRef } from "react";
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
            url: "republic/1",
        },
        {
            index: 1,
            url: "republic/2",
        },
        {
            index: 2,
            url: "republic/3",
        },
        {
            index: 3,
            url: "republic/4",
        },
        {
            index: 4,
            url: "republic/5",
        },
        {
            index: 5,
            url: "republic/6",
        },
        {
            index: 6,
            url: "republic/7",
        },
        {
            index: 7,
            url: "republic/8",
        },
        {
            index: 8,
            url: "republic/9",
        },
        {
            index: 9,
            url: "republic/10",
        },
        {
            index: 10,
            url: "republic/11",
        },
        {
            index: 11,
            url: "republic/12",
        },
        {
            index: 12,
            url: "republic/13",
        },
        {
            index: 13,
            url: "republic/14",
        },

    ];
    const arr = [
        {
            index: 0,
            active: false,
        },
        {
            index: 1,
            active: true,
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
    const scroll = 13;

    return (
        <>
            <div className='h-[212px] bg-[rgba(0,0,0,0.8)] h-set-mobile'>
                <NavBar isHomepage={false} />
            </div>
            <div className="gallery">
                <div className="main">
                    <h1>REPUBLIC DAY 2022</h1>
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
