'use client'
import NavBar from '../sections/appbar/appbar'
import Footer from '../sections/footer/footer'
import React, { useState, useRef, useEffect } from 'react'
import data from './data'
import styled from 'styled-components';
import "../../styles/admissions/admissions.css"
interface ChildInterface {
    title: string;
    url: string;
    isNew: boolean;
}

interface DataType {
    id: number
    title: string;
    children: Array<ChildInterface>;
}
function ENoticeBoard() {
    const [active, setActive] = useState<null | number>(null);
    const toggleActive = (index: number) => {
        if (active != index) {
            setActive(index);
        }
        else {
            setActive(null)
        }
    };
    useEffect(() => {
        document.title =
            "e-Notice Board | Indian Institute of Information Technology, Kalyani";
    }, []);
    const transitioningRefs = useRef<(HTMLDivElement | null)[]>(data.map(() => null));
    useEffect(() => {
        transitioningRefs.current.forEach((ref, index) => {
            if (ref) {
                if (active === index) {
                    ref.style.maxHeight = `${ref.scrollHeight + 30}px`; // Open the active element
                } else {
                    ref.style.maxHeight = '0px'; // Close all other elements
                }
            }
        });
    }, [active]);
    return (
        <div className='w-full h-fit'>
            <div className='h-[212px] bg-[rgba(0,0,0,0.8)] h-set-mobile'>
                <NavBar isHomepage={false} />
            </div>
            <div className='w-full font-semibold text-4xl py-4 text-center'>E-Notice Board</div>
            <div className='w-full font-semibold text-gray-500 text-center pb-8'>Note : These are the latest notices, for previous notices please visit Archive section</div>
            <div className='w-full h-fit p-2 flex items-center justify-center'>
                <div className='w-full flex justify-center max-w-[1200px] flex-wrap gap-4 mb-8'>
                    {
                        data.map((index: DataType, i) => {
                            return (
                                <div className='min-w-[250px] w-[30%] max-w-[350px] flex flex-col cursor-pointer'>
                                    <StyledDiv className='w-full h-[32px] max-h-[32px] text-center' onClick={() => toggleActive(index.id)}>
                                        {index.title}
                                    </StyledDiv>

                                    <StyledDivTwo className={`w-full border transition-all duration-500 overflow-hidden relative ${active === index.id ? 'active' : ''}`} ref={el => (transitioningRefs.current[i] = el)} >
                                        <ul className='py-2 px-4 mx-[12px]' style={{ listStyleType: 'disc' }}>
                                            {index.children.map((i) => {
                                                return (
                                                    <li className='' style={{ display: 'list-item' }}>
                                                        {i.isNew ?
                                                            <div className='hover:text-[rgb(82,219,216)] py-[5px]'><span className='new-announcement ml-0 mr-2'>New</span><a href={i.url} target="blank">{i.title}</a>
                                                            </div> : <div className='hover:text-[rgb(82,219,216)] py-[5px]'><a href={i.url} target="blank">{i.title}</a></div>}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </StyledDivTwo>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ENoticeBoard

const StyledDiv = styled.div`
//   border: 2px solid rgb(141, 221, 255);

  &:hover {
    border: 2px solid white;
    box-shadow: 9px 9px 18px #93c2d9, -9px -9px 18px #c7ffff;
  }
`;

const StyledDivTwo = styled.div`
    border: 2px solid rgb(141, 221, 255);
    // box-shadow: 9px 9px 18px #93c2d9, -9px -9px 18px #c7ffff;
`;

