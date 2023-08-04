'use client';
import NavBar from '../sections/appbar/secondNav';
import Footer from '../sections/footer/footer';
import Header from './components/Header'
import { useEffect } from 'react';

const App: React.FC = () => {
    useEffect(() => {
        document.title = 'Placement | Indian Institute of Information Technology, Kalyani';
    }, []);
    return (
        <>

            {/* <NavBar /> */}
            <Header />
            <Footer />

        </>
    );
};

export default App;
