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
            url: "induction/1",
        },
        {
            index: 1,
            url: "induction/2",
        },
        {
            index: 2,
            url: "induction/3",
        },
        {
            index: 3,
            url: "induction/4",
        },
        {
            index: 4,
            url: "induction/5",
        },
        {
            index: 5,
            url: "induction/6",
        },
        {
            index: 6,
            url: "induction/7",
        },
        {
            index: 7,
            url: "induction/8",
        },
        {
            index: 8,
            url: "induction/9",
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
            active: false,
        },
        {
            index: 7,
            active: true,
        },
    ];
    const scroll = 100;

    return (
        <>
            <NavBar />
            <div className="gallery">
                <div className="main">
                    <h1>IIIT KALYANI INDUCTION PROGRAMME 2019</h1>
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
