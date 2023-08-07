import NavBar from '../sections/appbar/secondNav';
import Footer from '../sections/footer/footer';
import '../../styles/globals.css';

const RootLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <html className='bg-[#00000]' lang="en">
            <head>

            </head>
            <body >
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}

export default RootLayout;