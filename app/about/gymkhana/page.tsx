'use client';
import NavBar from '../../sections/appbar/secondNav';
import Footer from '../../sections/footer/footer';
import data from './data';
import '../../../styles/about/gymkhana/gymkhana.css'
import Sidebar from './Sidebar'
import { useEffect, useState } from 'react';
import Carousel from './carousel'

const App: React.FC = () => {
    useEffect(() => {
        document.title = 'Gymkhana | Indian Institute of Information Technology, Kalyani';
    }, []);

    const [activeIndex, setActiveIndex] = useState(1);
    const [activeId, setActiveId] = useState(1);
    const [matchingItem, setMatchingItem] = useState(
        data.find((item) => item.id === activeIndex)?.children.find((child) => child.id === activeId)
    );
    const [windowWidth, setWindowWidth] = useState(globalThis.window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(globalThis.window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <NavBar />
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
                <div className='flex-[10] w-full h-[200vh] py-[20px] flex flex-col pd-adjst'>
                    <div className='w-full flex h-fit items-center gap-4'>
                        <div className='w-16 h-16 min-w-[64px] min-h-[64px] border rounded-[50%]' style={{ backgroundImage: `url(${matchingItem?.icon_url})`, backgroundSize: '100% 100%' }}></div>
                        <div className={`font-bold ${windowWidth > 1200 ? 'text-4xl' : 'text-3xl'}`}>{matchingItem?.title}{matchingItem?.subtitle ? `${' - ' + matchingItem.subtitle}` : ''}</div>
                    </div>
                    <Carousel carouselData={matchingItem?.mainCarousel} />
                    {matchingItem?.description.map((index) => {
                        return (
                            <div className='font-[400] text-[18px]'>{ }</div>
                        )
                    })}
                </div>
            </div>
            <Footer />

        </>
    );
};

export default App;
