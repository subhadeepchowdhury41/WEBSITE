import './../styles/globals.css';
import AppBar from './sections/appbar/appbar';
import Carousel from './sections/carousel/carousel';
import Discover from './sections/discover/discover';
import Events from './sections/cardSection/events';
import Footer from './sections/footer/footer';
import Gallery from './sections/gallery/gallery';
import DirectorsMessage from './sections/directorMessage/directorsMessage';
import Research from './sections/projects/research';
import EventSection from './sections/cardSection/eventSection';
import Achievements from './sections/achievement/achievementSection';

const RootLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <html className='bg-[#00000]' lang="en">
            <head>
                <title>Indian Institute of Information Technology, Kalyani</title>
                <meta name="Indian Institute of Information Technology, Kalyani" content="Official Website of IIIT Kalynai" />
                <meta name="keywords" content="IIIT Kalyani, Indian Institute of Information Technology,Kalyani, Computer Science, Electronics, Telecommunication" />
                <link href="https://iiitkalyani.ac.in/images/front-page/iiitlogo.png" rel="shortcut icon" type="image/x-icon" />
            </head>
            <body >
                {children}
            </body>
        </html>
    );
}

export default RootLayout;