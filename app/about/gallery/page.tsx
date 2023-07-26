'use client';
import NavBar from '../../sections/appbar/secondNav';
import Footer from '../../sections/footer/footer';
import { useEffect } from 'react';
import "./page.css"

const App: React.FC = () => {
    useEffect(() => {
        document.title = 'Gallery | Indian Institute of Information Technology, Kalyani';
    }, []);
    return (
        <>

            <NavBar />
            <div className='gallery'>
                <div className='main'></div>
                <div className="gallery-side"></div>
            </div>
            <Footer />

        </>
    );
};

export default App;
