'use client'
import '../../../styles/cards.css'
import ITKButton from '../../designSystem/ITKButton'
import projectData from './projectData'
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import { Reveal, Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

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

const Research = () => {
    return (
        <div className="card-row2">
            <div className='row2-card'>
                <Reveal keyframes={customAnimation} triggerOnce>
                    <span className='card-heading'>
                        Research
                        <TravelExploreOutlinedIcon style={{ marginLeft: "3px", marginBottom: "5px", fontSize: "32px" }} />
                    </span>
                </Reveal>
                <a href='https://iiitkalyani.ac.in/php/proj_spons.php' target='_blank' >
                    <div className='MoreProjects ReadMore'>
                        {/* <ITKButton text="Read More" />  */}
                        <div className='view-more'>View More</div>
                    </div>
                </a>
                <div className='row2-data'>
                    {projectData.map((index) => {
                        return (
                            <div className='project-datablock' key={index.id}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <span className={index.pi.length > 32 ? 'card-heading-mini card-adjust-mini' : 'card-heading-mini'}>{index.pi}</span>
                                    <span className='card-heading-small'>{index.title}</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <span className='tag-pi'>Project Value : {index.value}</span>
                                    <div className='sponsor-row'>
                                        {index.sponsors.map((e) => {
                                            return (
                                                <div className='sponsor-tag' key={e.id}>
                                                    <div className='tag-image' style={{ backgroundImage: `url('${e.img}')` }}></div>
                                                    {e.shortForm ? e.shortForm : e.name}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Research