"use client";
import NavBar from '../../../sections/appbar/appbar'
import Footer from "../../../sections/footer/footer";
import { useEffect } from "react";
import Carousel from "../carousel";
import Sidebar from "../sidebar";

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
            <div className='h-[220px] bg-[rgba(0,0,0,0.8)] h-set-mobile'>
                <NavBar isHomepage={false} />
            </div>
            <div className="gallery">
                <div className="main">
                    <h1>REPUBLIC DAY 2021</h1>
                    <Carousel carouselData={carouselData} />
                </div>
                <Sidebar array={arr} scroll={scroll} />

            </div>
            <Footer />
        </>
    );
};

export default App;
