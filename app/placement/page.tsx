'use client';
import Footer from '../sections/footer/footer';
import Header from './components/Header'
import Home from './components/LandingPage'
import About from './components/About'
import { useState, useEffect } from 'react';

const App: React.FC = () => {
    useEffect(() => {
        document.title = 'Placement Portal | Indian Institute of Information Technology, Kalyani';
    }, []);
    const [scrollToSectionId, setScrollToSectionId] = useState<string | null>(null);

    useEffect(() => {
        if (scrollToSectionId) {
            scrollToSection(scrollToSectionId);
        }
    }, [scrollToSectionId]);

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        setScrollToSectionId(null);
    };
    return (
        <>
            <Header setScrollToSectionId={setScrollToSectionId} />
            <Home />
            <About />
            <Footer />
        </>
    );
};

export default App;
