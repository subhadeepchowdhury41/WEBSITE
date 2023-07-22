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

    let l = events.length;
    const ReduceOne = () => {
        if (i === 1)
            setI(l - 2);
        else
            setI(i - 1);
    }
    const AddOne = () => {
        if (i === l - 2 && scrolling === 1)
            setI(1);
        else if (scrolling === 1)
            setI(i + 1);
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
        <div className="card-row3">
            <div className='row3-card1' style={globalThis.window?.innerWidth > 1500 ? { width: '600px' } : { width: '100%' }}>
                <Reveal keyframes={customAnimation} triggerOnce>
                    <div className='card-heading '>
                        Continuing Education Program
                        <SchoolOutlinedIcon style={{ marginLeft: "5px", fontSize: "35px", marginBottom: "5px" }} />
                    </div>
                </Reveal>
                <div className='announcement-container' style={{ minHeight: '300px' }}>

                    {educationProgram.map((index) => {
                        return (
                            <div key={index.id}>
                                <div className='announcement-tab cep'>
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
                    <a href='https://iiitkalyani.ac.in/php/gallery/gallery.php' target="_blank" rel="noreferrer">
                        {/* <ITKButton text="View All Events" />  */}
                        <div className='view-more'>View More</div>
                    </a>
                </div>
                <div className='event-carousel flex gap-4 w-fit content mt-2' style={globalThis.window?.innerWidth > 1500 ? { maxWidth: `${globalThis.window?.innerWidth - 700}px` } : { minWidth: '100%' }}
                    onMouseEnter={() => { setScrolling(0) }} onMouseLeave={() => { setScrolling(1) }}
                >

                    {event.map((index) => {
                        return (
                            <div className='border border-gray-200 h-[300px] min-w-[300px] flex flex-col rounded-lg animate'
                                style={{ transform: `translate(${(-316 * (i - 1))}px,0px)` }}
                            >
                                <div className='h-[full] w-full flex-[4] round-top hover-effect' style={{ backgroundImage: `url(${index.url})`, backgroundSize: '100% 100%' }}>

                                </div>
                                <div className='h-full w-full flex-[1] round-bottom bg-white'>
                                    <div className='h-full w-full font-semibold text-lg flex items-center justify-center'>{index.title}</div>
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