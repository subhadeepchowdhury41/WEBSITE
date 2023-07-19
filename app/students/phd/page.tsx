'use client'
import '../../../styles/Phd/phd.css'
import React from 'react';
import { useState } from 'react';
import data from './data'
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import NavBar from '../../sections/appbar/secondNav';
import Footer from '../../sections/footer/footer';

const PHDStudents = () => {
    const [hovering, setHovering] = useState(0)
    const [decider, setDecider] = useState(-1)
    const [active, setActive] = useState(-1)
    return (
        <div style={{}}>
            <NavBar />
            <div style={{ marginTop: '25px' }} className='phd-outbox'>
                {
                    data.map((index) => {
                        return (
                            <div className='contentbox'>
                                <div className='color-circle'></div>
                                <div className='cd-col1' onClick={() => setActive(index.index === active ? -1 : index.index)}>
                                    <div className='cd-img' style={{ backgroundImage: `url(${index.img})` }}></div>
                                    <div className='cd-name'>{index.name}</div>
                                    <div className='cd-mail'>{index.email}</div>
                                    <div className='cd-link' style={{ marginTop: '2px' }}>
                                        <span onMouseEnter={() => { setHovering(index.index); setDecider(0) }} onMouseLeave={() => setHovering(0)}><MailIcon />{hovering === index.index && decider === 0 ? <div className='hovertext'>Gmail</div> : <></>}</span>

                                        <span onMouseEnter={() => { setHovering(index.index); setDecider(1) }} onMouseLeave={() => setHovering(0)}><InstagramIcon />{hovering === index.index && decider === 1 ? <div className='hovertext'>Instagram</div> : <></>}</span>

                                        <span onMouseEnter={() => { setHovering(index.index); setDecider(2) }} onMouseLeave={() => setHovering(0)}><LinkedInIcon />{hovering === index.index && decider === 2 ? <div className='hovertext'>LinkedIn</div> : <></>}</span>

                                        <span onMouseEnter={() => { setHovering(index.index); setDecider(3) }} onMouseLeave={() => setHovering(0)}><InsertLinkIcon />{hovering === index.index && decider === 3 ? <div className='hovertext'>External Links</div> : <></>}</span>
                                    </div>
                                </div>
                                <div className={active === index.index ? 'separator active' : 'separator'}></div>
                                <div className={active === index.index ? `cd-col2 active` : `cd-col2`}>
                                    <div className='tuple'>
                                        <div className='tuple-heading'>Session</div>
                                        <div className='tuple-data'>{index.session}</div>
                                    </div>
                                    <div className='tuple'>
                                        <div className='tuple-heading'>Supervisor</div>
                                        <div className='tuple-data'>{index.supervisor}</div>
                                    </div>
                                    <div className='tuple'>
                                        <div className='tuple-heading'>Research Area</div>
                                        <div className='tuple-data'>{index.research_area}</div>
                                    </div>

                                    {index.pub_details ? <><div className='tuple'>
                                        <div className='tuple-heading'>Publication Details</div>
                                        <div className='tuple-data'>{index.pub_details}</div>
                                    </div></> : <></>}
                                    <div className='tuple'>
                                        <div className='tuple-heading'>Ph.D Status</div>
                                        <div className='tuple-data'>{index.status}</div>
                                    </div>
                                    <div className='tuple'>
                                        <div className='tuple-heading'>Ph.D Type</div>
                                        <div className='tuple-data'>{index.type}</div>
                                    </div>
                                    <div className='tuple'>
                                        <div className='tuple-heading'>Fellowship Type</div>
                                        <div className='tuple-data'>{index.fellowship}</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <Footer />
        </div>)
        ;
};


export default PHDStudents;