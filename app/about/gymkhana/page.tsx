'use client';
import NavBar from '../../sections/appbar/secondNav';
import Footer from '../../sections/footer/footer';
import data from './data';
import '../../../styles/about/gymkhana/gymkhana.css'
import Sidebar from './Sidebar'
import { useEffect, useState } from 'react';

const App: React.FC = () => {
    useEffect(() => {
        document.title = 'Gymkhana | Indian Institute of Information Technology, Kalyani';
    }, []);
    const [activeIndex, setActiveIndex] = useState(1);
    const [activeId, setActiveId] = useState(1);
    const [matchingItem, setMatchingItem] = useState(
        data.find((item) => item.id === activeIndex)?.children.find((child) => child.id === activeId)
    );
    return (
        <>
            <NavBar />
            <div className='flex w-full h-fit relative resp-program'>
                <div className={`flex-[3] w-full h-[100vh] bg-[rgb(245,235,209)] pos-adj ${globalThis.window.innerWidth < 1200 ? 'relative top-0' : 'sticky top-[70px]'} `}>
                    <Sidebar data={data} setActiveIndex={setActiveIndex} setActiveId={setActiveId} setMatchingItem={setMatchingItem}
                        ActiveIndex={activeIndex} ActiveId={activeId} />
                </div>
                <div className='flex-[9] w-full h-auto py-[16px] px-[64px] flex flex-col gap-4 pd-adjst'>
                </div>
            </div>
            <Footer />

        </>
    );
};

export default App;
