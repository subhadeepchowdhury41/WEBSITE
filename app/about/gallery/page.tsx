'use client';
import NavBar from '../../sections/appbar/secondNav';
import Footer from '../../sections/footer/footer';
import { useEffect } from 'react';
import Carousel from '../facilities/carousel'
import Sidebar from './sidebar';
import Image from 'next/image';
import logo from "../../../assets/gallery/republic/1.jpg"

import "./page.css"

const App: React.FC = () => {
    useEffect(() => {
        document.title = 'Gallery | Indian Institute of Information Technology, Kalyani';
    }, []);
    const carouselData = [{
        index: 0,
        url: 'https://3.img-dpreview.com/files/p/E~TS590x0~articles/8692662059/8283897908.jpeg'
    },
    {
        index: 1,
        url: 'https://i.pinimg.com/originals/8b/8d/de/8b8dde74631a704a0420ede695fde00d.png'
    },
    {
        index: 2,
        url: 'https://fujifilm-x.com/products-cameras-static/gfx100s/assets/images/image-setting/banner_wapk.png'
    },
    {
        index: 3,
        url: 'https://fujifilm-x.com/products-cameras-static/gfx100s/assets/images/image-setting/banner_wapk.png'
    }
    ]
    const arr = [{
        index: 0,
        active: true
    }, {
        index: 1,
        active: false
    }]
    return (
        <>

            <NavBar />
            <div className='gallery'>
                <div className='main'>
                    <div style={{ position: "absolute", top: "45vh", zIndex: "1", color: "white", left: "32.5vw", fontSize: "50px", fontFamily: "cursive" }}>Gallery</div>
                    <Carousel carouselData={carouselData} />
                    {/* <Image src={logo} alt="logo" /> */}
                </div>
                <Sidebar array={arr} />
            </div>
            <Footer />

        </>
    );
};

export default App;
