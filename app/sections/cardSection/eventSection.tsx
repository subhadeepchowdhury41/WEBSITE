'use client'
import '../../../styles/cards.css'
import event from './events'
import educationProgram from './educationProgram'
import { Reveal, Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import PaymentsIcon from '@mui/icons-material/Payments';
import { useState, useEffect } from 'react';
import events from './events';



const EventSection = () => {
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
    let l = events.length;
    const ReduceOne = () => {
        if (i === 1)
            setI(l - 2);
        else
            setI(i - 1);
    }
    const AddOne = () => {
        if (windowWidth > 1500) {
            if (i === l - 1 && scrolling === 1) {
                setI(1);
            } else if (scrolling === 1) {
                setI(i + 1);
            }
        } else if (windowWidth >= 800 && windowWidth <= 1500) {
            if (i === l - 2 && scrolling === 1) {
                setI(1);
            } else if (scrolling === 1) {
                setI(i + 1);
            }
        } else {
            // For screens less than 800px, keep the existing behavior
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

    // ==========================================================================

    const [scroll, setScroll] = useState(1);
    const [second, setSecond] = useState(1);
    const [j, setJ] = useState(1);
    useEffect(() => {
        const interval = setInterval(() => {
            setSecond(second => second + 1);
            addOne();
        }, 1000);
        return () => { clearInterval(interval) };
    }, [second]);
    let len = educationProgram.length;
    const addOne = () => {
        if (j === len - 2 && scroll === 1)
            setJ(1);
        else if (scroll === 1)
            setJ(j + 1);
    }

    // ==========================================================================

    return (
        <div className="card-row3">
            <div className='row3-card1' style={windowWidth > 1500 ? { width: '600px' } : { width: '100%' }}>
                <Reveal keyframes={customAnimation} triggerOnce>
                    <div className='card-heading '>
                        Continuing Education Program
                        <SchoolOutlinedIcon style={{ marginLeft: "5px", fontSize: "35px", marginBottom: "5px" }} />
                    </div>
                </Reveal>
                <div className='announcement-container' style={{ minHeight: '300px' }}>

                    {educationProgram.map((index) => {
                        return (
                            <div key={index.id} onMouseEnter={() => { setScroll(0) }} onMouseLeave={() => { setScroll(1) }}>
                                <div className='announcement-tab cep' style={{ transform: `translate(0px,${-75 * i}px)` }}>
                                    <div className='announcement-heading card-heading-small'><a target='_blank' href={index.url} rel="noreferrer" >{index.title}</a></div>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </div>
            <div className='row3-card2'>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Reveal keyframes={customAnimation} triggerOnce delay={500}>
                        <span className='card-heading'>
                            Events
                            <EventNoteOutlinedIcon style={{ marginLeft: "5px", fontSize: "32px", marginBottom: "5px" }} />
                        </span>
                    </Reveal>
                    <a href='/about/gallery/parikshapecharcha2022' rel="noreferrer">
                        {/* <ITKButton text="View All Events" />  */}
                        <div className='view-more'>View More</div>
                    </a>
                </div>
                <div className='event-carousel flex gap-4 mt-2 overflow-hidden' style={windowWidth > 1500 ? { maxWidth: `${windowWidth - 700}px` } : { minWidth: '100%' }}
                    onMouseEnter={() => { setScrolling(0) }} onMouseLeave={() => { setScrolling(1) }}
                >

                    {event.map((index) => {
                        return (
                            <div className='event-slides animate'
                                style={{ transform: `translate(${(-316 * (i - 1))}px,0px)` }} key={index.id}
                            >
                                <div className='event-slide-img' style={{ backgroundImage: `url(${index.url})` }}></div>
                                <div className='event-slide-text'>
                                    <span className='event-heading'>{index.title}</span>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </div>
        </div>

    )
}

export default EventSection