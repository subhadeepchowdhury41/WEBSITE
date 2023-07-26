'use client';
import '../../../styles/about/carousel/carousel.css'
import NavBar from '../../sections/appbar/secondNav';
import Footer from '../../sections/footer/footer';
import Carousel from './carousel';
import { useEffect } from 'react';
import Data from './facilityData'
import Card from './facilityCard'

const App: React.FC = () => {
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
    }
    ]
    useEffect(() => {
        document.title = 'Facilities | Indian Institute of Information Technology, Kalyani';
    }, []);
    return (
        <>
            <NavBar />
            <Carousel carouselData={carouselData} />
            <div className='w-full h-auto flex flex-col pad-adjust items-center justify-center'>
                {Data.map((index) => {
                    return (
                        <Card cellData={index} />
                    )

                })}
            </div>
            <Footer />
        </>
    );
};

export default App;
