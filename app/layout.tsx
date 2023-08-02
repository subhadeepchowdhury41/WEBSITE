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
        <html className='bg-[#00000]'>
            <head>
                <title>Indian Institute of Information Technology, Kalyani</title>
                <meta name="Indian Institute of Information Technology, Kalyani" content="Official Website of IIIT Kalynai" />
                <meta name="keywords" content="IIIT Kalyani, Indian Institute of Information Technology,Kalyani, Computer Science, Electronics, Telecommunication" />
                <link href="http://beta.iiitkalyani.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fiiit_kalyani_logo.9853c213.png&w=256&q=75" rel="shortcut icon" type="image/x-icon" />
            </head>
            <body >
                {children}
            </body>
        </html>
    );
}

export default RootLayout;