'use client';
import '../../../styles/achievement.css';
import achievement from './achievement'
import { useState, useEffect } from "react";
import { Reveal} from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import HEADER from '../../designSystem/header';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';



const Achievement = () => { 
  const customAnimation = keyframes`
    from {
        opacity: 0;
        transform: translate3d(-200px, 0, 0);
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
    const [scrolling, setScrolling] = useState(1)
    let l = achievement.length;
    const ReduceOne = () => {
        if (i === 0)
            setI(l - 1);
        else
            setI(i - 1);
    }
    const AddOne = () => {
        if (i === l - 1)
            setI(0);
        else
            setI(i + 1);
    }
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
            if (scrolling == 1)
                AddOne();
        }, 5000);
        return () => { clearInterval(interval) };
    }, [seconds]);
    return (
        <div className="Discover-Box acheivment">
            <Reveal keyframes={customAnimation2} triggerOnce>
                {/* <span className='achievment-header'>
                    <hr/>
                    <p>Achievements</p>
                    <hr/>
                </span> */}
                <HEADER text='Achievements'/>
            </Reveal>
            <div className='slider' >
                <div className='discover-slide-track' >
                    {/* {achievement.map((index) => {
                    return (<> */}
                    <div className='achievment-slides'>
                        <img src={achievement[i].url} />
                        <div className='slide-box' style={{display:'flex', flexDirection:'column'}}>
                            <div className='slide-box-heading'>{achievement[i].title}</div>
                            <div className='slide-box-description'>{achievement[i].description}</div>
                        </div> 
                    </div>
                    {/* </>)
                    })} */}
                </div>
            </div>
            <hr className='line'/>
        </div>
  )
}

export default Achievement;