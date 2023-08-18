'use client';
import NavBar from '../../sections/appbar/appbar'
import Footer from '../../sections/footer/footer';
import data from './data';
import '../../../styles/about/gymkhana/gymkhana.css'
import '../../../styles/globals.css'
import Sidebar from './Sidebar'
import { useEffect, useState } from 'react';
import Carousel from './carousel'
import Link from 'next/link';

const App: React.FC = () => {
    useEffect(() => {
        document.title = 'Gymkhana | Indian Institute of Information Technology, Kalyani';
    }, []);

    const [activeIndex, setActiveIndex] = useState(1);
    const [activeId, setActiveId] = useState(1);
    const [matchingItem, setMatchingItem] = useState(
        data.find((item) => item.id === activeIndex)?.children.find((child: any) => child.id === activeId)
    );
    const [windowWidth, setWindowWidth] = useState(1250);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className='h-[220px] bg-[rgba(0,0,0,0.8)] h-set-mobile'>
                <NavBar isHomepage={false} />
            </div>
            <div className='flex w-full h-fit relative resp-program'>
                {windowWidth > 1200 ?
                    <div className={`flex-[3] w-full h-[100vh] bg-[rgb(245,235,209)] pos-adj sticky top-[70px] `}>
                        <Sidebar data={data} setActiveIndex={setActiveIndex} setActiveId={setActiveId} setMatchingItem={setMatchingItem}
                            ActiveIndex={activeIndex} ActiveId={activeId} />
                    </div> :
                    <div className={`flex-[3] w-full h-[100vh] bg-[rgb(245,235,209)] pos-adj relative top-0 `}>
                        <Sidebar data={data} setActiveIndex={setActiveIndex} setActiveId={setActiveId} setMatchingItem={setMatchingItem}
                            ActiveIndex={activeIndex} ActiveId={activeId} />
                    </div>
                }
                <div className='flex-[11] w-full h-fit py-[20px] flex flex-col pd-adjst gap-8'>
                    <div className='w-full flex h-fit items-center gap-4'>
                        <div className='w-16 h-16 min-w-[64px] min-h-[64px] border rounded-[50%]' style={{ backgroundImage: `url(${matchingItem?.icon_url})`, backgroundSize: '100% 100%' }}></div>
                        <div className={`font-bold ${windowWidth > 1200 ? 'text-4xl' : 'text-3xl'}`}>{matchingItem?.title}{matchingItem?.subtitle ? `${' - ' + matchingItem.subtitle}` : ''}</div>
                    </div>
                    <Carousel carouselData={matchingItem?.mainCarousel} />
                    {matchingItem?.description.map((index: any) => {
                        return (
                            <div className='w-full h-fit'>
                                {index.type === 'text' && <div className='font-[400] text-[16px]'>{index.title}</div>}
                                {index.type === 'heading' && <div className='font-semibold text-[28px]'>{index.title}</div>}
                                {index.type === 'carousel' &&
                                    <div className='w-full h-auto flex border rounded-2xl overflow-hidden col900'>
                                        <div className='w-full h-[300px] flex-[4]'>
                                            <Carousel carouselData={index.data} border={'none'} height={'small'} />
                                        </div>
                                        <div className='w-full h-[300px] flex-[6] flex flex-col px-4 justify-between'>
                                            <div className='flex flex-col'>
                                                <div className='my-2 font-semibold text-[24px]'>{index.title}</div>
                                                <div className='mb-2 font-[400] text-gray-700'>{index.description}</div>
                                            </div>
                                            <div className='flex w-full h-auto mb-4 flex-wrap gap-2'>
                                                {index.tags?.map((tag: any) => {
                                                    return (
                                                        <Link href={tag.link} target={'_blank'} aria-label={tag.text}>
                                                            <div className='flex items-center gap-1 py-1 px-2 rounded-3xl bg-[rgb(122,215,246)]'>
                                                                <div className='w-[20px] h-[20px] rounded-[50%] bg-transparent' style={{ backgroundImage: `url(${tag.icon})`, backgroundSize: '100% 100%' }}></div>
                                                                <div className='text-[12px] flex items-center min-h-[24px]'>{tag.text}</div>
                                                            </div>
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                }

                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />

        </>
    );
};

export default App;
