'use client';
import NavBar from '../../sections/appbar/secondNav';
import Footer from '../../sections/footer/footer';
import '../../../styles/Students/achievement/achievement.css'
import { useEffect } from 'react';
import achiData from './data';
import Image from 'next/image';
const App: React.FC = () => {
    useEffect(() => {
        document.title = "Students' Achievements | Indian Institute of Information Technology, Kalyani";
    }, []);
    return (
        <>
        <NavBar />
        <div className='fluid-center aci-main'>
            <h1>Students&apos; Achievements</h1>
            <div className='fluid-center aci-container'>
                <h2>Team based</h2>
                <div className='fluid-center aci-data-contain'>
                    {achiData.team.map((item)=>{
                        return(
                            <>
                            <div key={item.id} className="fluid-center card">
                            <Image src={achiData.thumb} width={600} height={600} alt="thumbnail" className="tro_thumb" />
                                <p className="text">
                                {item.text}
                                </p>
                            </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <div className='fluid-center aci-container'>
                <h2>Indivduals (Batch wise) 2017-2021 batch</h2>
                <div className='fluid-center aci-data-contain'>
                    {achiData.indivduals_2017.map((item)=>{
                        return(
                            <>
                            <div key={item.id} className="fluid-center card">
                            <Image src={achiData.thumb} width={600} height={600} alt="thumbnail" className="tro_thumb" />
                                <p className="text">
                                {item.text}
                                </p>
                            </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <div className='fluid-center aci-container'>
                <h2>Indivduals (Batch wise) 2016-2020 batch</h2>
                <div className='fluid-center aci-data-contain'>
                    {achiData.indivduals_2016.map((item)=>{
                        return(
                            <>
                            <div key={item.id} className="fluid-center card">
                            <Image src={achiData.thumb} width={600} height={600} alt="thumbnail" className="tro_thumb" />
                                <p className="text">
                                {item.text}
                                </p>
                            </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <a className='prev_achi' href={achiData.achipdf} target="_blank" rel="noreferrer" >Students&apos; Achivement upto June, 2019</a>
        </div>
        <Footer />
        </>
    );
};

export default App;
