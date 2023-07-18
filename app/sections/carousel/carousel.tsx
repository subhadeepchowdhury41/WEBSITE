'use client';
import '../../../styles/globals.css'
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import PaymentIcon from '@mui/icons-material/Payment';
import { blueGrey } from "@mui/material/colors";
import InfoIcon from '@mui/icons-material/Info';
import { useEffect, useState } from "react";
import xyz from '../../../assets/carousel/p4.jpg'
import p1 from '../../../assets/carousel/Picture1.png'

const carouselData = [
    {
        url: 'https://i.postimg.cc/3rcBvYq5/Picture1.png',
        title: 'Welcome to IIIT Kalyani',
        subtitle: 'Planned IIIT Kalyani'
    },

    {
        url: 'http://iiitkalyani.ac.in/images/Precaution_Dose_Eng.jpg',
        title: '',
        subtitle: ''
    },
    {
        url: 'https://i.postimg.cc/rmTGqpzx/p4.jpg',
        title: '',
        subtitle: ''
    },
    {
        url: 'https://i.postimg.cc/6qgfJfZ5/p5.jpg',
        title: '',
        subtitle: ''
    },
    {
        url: 'https://i.postimg.cc/qvfx1Q01/Picture2.png',
        title: '',
        subtitle: "Planned Boy's Hostel"
    },

    {
        url: 'https://i.postimg.cc/3J0ZjzMy/Picture3.png',
        title: '',
        subtitle: "Planned Girl's Hostel"
    },

];

interface CarouselElement {
    title: string,
    url: string,
    subtitle?: string
}

type Poster = CarouselElement;

const Carousel = () => {
    const handleInterval = () => {
        setPoster(prev => carouselData.length - 1 === prev ? 0 : prev + 1);
    }
    const [poster, setPoster] = useState<number>(0);
    useEffect(() => {
        const interval = setInterval(handleInterval, 6000);
        return () => {
            clearInterval(interval);
        }
    }, []);
    return (
        <div className="">
            {/* <div className="absolute z-[100] opacity-0 hover:opacity-100 text-white h-screen hover:bg-gradient-to-r
          flex items-center justify-center p-5 hover:cursor-pointer 
         from-[#ffffff65] to-transparent left-0 transition-all duration-300">
                <svg width={50} fill="white" viewBox="0 0 24 24">
                    <path d="M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z" />
                </svg>
            </div> */}
            {/* <div className="absolute opacity-0 hover:opacity-100 text-white h-screen right-0
        hover:bg-gradient-to-l flex items-center justify-center p-5 transition-all duration-300
          from-[#ffffff65] to-transparent z-[100] hover:cursor-pointer">
                <svg width={50} fill="white" viewBox="0 0 24 24">
                    <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z" />
                </svg>

            </div> */}


            <CarouselPoster key={poster} poster={carouselData[poster]} />
            {/* <div key={`title-${poster}`} className=" overflow-hidden absolute top-[50%] left-[20%] flex justify-center z-[60] items-center">
                <div className="animate-carousel-title-change text-6xl drop-shadow-lg text-white font-bold">
                    {carouselData[poster].title}
                </div>
            </div> */}

        </div>
    );
}

const CarouselPoster = ({ poster }: {
    poster: Poster
}) => {
    return (
        <div className="h-screen animate-carousel-change carousel" style={{
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `linear-gradient(0deg,
            rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.5)),
            url(${poster.url})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>

            <div className="animate-carousel-title-change textSizer drop-shadow-lg text-white font-bold welcome-text" style={{ textAlign: 'center' }}>
                {poster.title}
            </div>
            {poster.subtitle ?
                <div className='planned' >
                    {poster.subtitle}
                </div>
                : ""}

        </div>);
}

export default Carousel;