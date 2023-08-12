import AppBar from "./sections/appbar/appbar";
import Carousel from "./sections/carousel/carousel";
import Discover from "./sections/discover/discover";
import Footer from "./sections/footer/footer";
import PayButton from './sections/appbar/payment-button'
import DirectorsMessage from './sections/directorMessage/directorsMessage';
import Research from "./sections/projects/research";
import EventSection from "./sections/cardSection/eventSection";
import Achievements from "./sections/achievement/achievementSection";

const HomePage = () => {
    return (
        <div>
            <AppBar />
            <PayButton />
            <Carousel />
            {/* <Events /> */}
            <DirectorsMessage />
            <Discover />
            {/* <Research /> */}
            <EventSection />
            <Achievements />
            <Footer />
        </div>
    )
}

export default HomePage;