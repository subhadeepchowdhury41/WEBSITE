import './../styles/globals.css';
import AppBar from './sections/appbar/appbar';
import Carousel from './sections/carousel/carousel';
import Discover from './sections/discover/discover';
import Events from './sections/cardSection/events';
import Footer from './sections/footer/footer';
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
                <meta charSet='UTF-8' />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Empowering Innovators: IIIT Kalyani - Shaping Futures in Tech Education & Research." />
                <meta name="Indian Institute of Information Technology, Kalyani" content="Official Website of IIIT Kalynai" />
                <meta name="keywords" content="IIIT Kalyani, Indian Institute of Information Technology,Kalyani, Computer Science, Electronics, Electronics and Communication, Engineering, Telecommunication, Education, Research" />
                <meta name="author" content="IIIT Kalyani" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />

                {/*Meta tags for Open Graph*/}
                <meta property="og:title" content="IIIT Kalyani" />
                <meta property="og:description" content="Empowering Innovators: IIIT Kalyani - Shaping Futures in Tech Education & Research." />
                <meta property="og:image" content="/iiit_kalyani_logo.png" />
                {/* <meta property="og:url" content="https://example.com/page-url" /> */}
                <meta property="og:type" content="website" />
                {/**=Open graph meta tags close*/}
                <link href="/iiit_kalyani_logo.png" rel="shortcut icon" type="image/x-icon" />
                <title>Indian Institute of Information Technology, Kalyani</title>
            </head>
            <body >
                {children}
            </body>
        </html>
    );
}

export default RootLayout;