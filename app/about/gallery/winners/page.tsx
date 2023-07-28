'use client';
import NavBar from '../../../sections/appbar/secondNav';
import Footer from '../../../sections/footer/footer';
import Comingsoon from '../../../designSystem/comingsoon';
import { useEffect } from 'react';

const App: React.FC = () => {
    useEffect(() => {
        document.title = 'Gallery | Indian Institute of Information Technology, Kalyani';
    }, []);
    return (
        <>

            <NavBar />
            <Comingsoon />
            <Footer />

        </>
    );
};

export default App;
