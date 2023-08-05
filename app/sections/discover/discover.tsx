'use client';
import '../../../styles/discover.css';
import ImageData from './discoverData.jsx';
import { useState, useEffect } from "react";
import { Reveal, Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import PhotoFilterIcon from '@mui/icons-material/PhotoFilter';
// import ArrowBackwardIosIcon from '@mui/icons-material/ArrowBackwardIos';
// import ArrowBackwardIosIcon from '@mui/icons-material/ArrowBackwardIos';
// import gsap from 'gsap';
import ITKButton from "../../designSystem/ITKButton";
import ContactlessOutlinedIcon from "@mui/icons-material/ContactlessOutlined";

const Discover = () => {
    useEffect(() => {
        document.title = 'Home | Indian Institute of Information Technology, Kalyani';
    }, []);

    const customAnimation = keyframes`
    from {
        opacity: 0;
        transform: translate3d(-150px, 0, 0);
    }

    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`;
    const customAnimation2 = keyframes`
    from {
        opacity: 0;
        transform: translate3d(0, 50px, 0);
    }

  to {
        opacity: 1;
        transform: translate3d(0, 0, 0);    
    }
`;
    const [i, setI] = useState(1);
    const [windowWidth, setWindowWidth] = useState(1200);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    let l = ImageData.length;
    const ReduceOne = () => {
        if (i === 1)
            setI(l - 2);
        else
            setI(i - 1);
    }
    const AddOne = () => {
        if (windowWidth > 1450) {
            if (i === l - 2 && scrolling === 1) {
                setI(1);
            } else if (scrolling === 1) {
                setI(i + 1);
            }
        } else if (windowWidth >= 975 && windowWidth <= 1500) {
            if (i === l - 1 && scrolling === 1) {
                setI(1);
            } else if (scrolling === 1) {
                setI(i + 1);
            }
        } else {
            if (i === l && scrolling === 1) {
                setI(1);
            } else if (scrolling === 1) {
                setI(i + 1);
            }
        }
    }
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
            AddOne();
        }, 3000);
        return () => { clearInterval(interval) };
    }, [seconds]);

    const [scrolling, setScrolling] = useState(1);

    return (
        <div className="Discover-Box">
            <Reveal keyframes={customAnimation} triggerOnce>
                <span className='card-heading Discover-Heading'>
                    Discover
                    <ContactlessOutlinedIcon style={{ marginLeft: "7px", fontSize: "30px" }} />
                </span>
            </Reveal>
            <Reveal keyframes={customAnimation2} triggerOnce>
                <div className='discover-slider' onMouseEnter={() => { setScrolling(0) }} onMouseLeave={() => { setScrolling(1) }}>
                    <div className='discover-slide-track' style={windowWidth > 550 ? { transform: `translate(${(-480 * (i - 1))}px,0px)` } : windowWidth > 350 ? { transform: `translate(${(-330 * (i - 1))}px,0px)` } : { transform: `translate(${(-270 * (i - 1))}px,0px)` }}>
                        {ImageData.map((index) => {
                            return (<div key={index.id}>
                                <div className='discover-slides' key={index.id}>
                                    <img src={index.url} alt="discover" />
                                    <div className='discover-slides-text'>
                                        <div className='slide-heading'>{index.heading}</div>
                                        <div className='slide-description'>{index.description}</div>
                                    </div>
                                </div>
                            </div>)
                        })}

                    </div>

                </div>

                <div className='discover-navigation'>
                    {/* <ITKButton text="View More" /> */}
                    <div className='view-more'><a href="/about/gallery/parikshapecharcha2022">View More</a></div>
                    <div className='discover-buttons'>
                        <button className='button-prev' id="alb-prev" aria-label="Previous" onClick={() => { ReduceOne() }}><ArrowLeftIcon className="hover:bg-purple-100" style={{ fontSize: "30px", borderRadius: "50%", boxShadow: "1px 1px 2px rgb(0,0,0,0.3)", marginRight: "10px" }} /></button>
                        <button className='button-next' id="alb-next" aria-label="Next" onClick={() => { AddOne() }}><ArrowRightIcon className="hover:bg-purple-100" style={{ fontSize: "30px", borderRadius: "50%", boxShadow: "1px 1px 2px rgb(0,0,0,0.3)" }} /></button>
                    </div>

                </div>
            </Reveal>
        </div>
    )
}

export default Discover;