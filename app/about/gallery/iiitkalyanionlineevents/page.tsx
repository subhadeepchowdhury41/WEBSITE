'use client';
import NavBar from '../../../sections/appbar/secondNav';
import Footer from '../../../sections/footer/footer';
import Comingsoon from '../../../designSystem/comingsoon';
import { useEffect } from 'react';
import Carousel from '../../facilities/carousel'
import Sidebar from '../sidebar';

const App: React.FC = () => {
  useEffect(() => {
    document.title = 'Gallery | Indian Institute of Information Technology, Kalyani';
  }, []);
  const carouselData = [{
    index: 0,
    url: 'https://iiitkalyani.ac.in/php/gallery/img/ppc/2%20(1).jpg'
  },
  {
    index: 1,
    url: 'https://iiitkalyani.ac.in/php/gallery/img/ppc/1%20(2).jpg'
  },
  {
    index: 2,
    url: 'https://iiitkalyani.ac.in/php/gallery/img/ppc/3%20(1).jpg'
  },
  {
    index: 3,
    url: 'https://iiitkalyani.ac.in/php/gallery/img/ppc/4%20(3).jpg'
  },
  {
    index: 4,
    url: 'https://iiitkalyani.ac.in/php/gallery/img/ppc/5%20(1).jpg'
  },
  {
    index: 5,
    url: 'https://iiitkalyani.ac.in/php/gallery/img/ppc/6%20(1).jpg'
  }
  ]
  const arr = [{
    index: 0,
    active: true
  }, {
    index: 1,
    active: false
  }]
  return (
    <>

      <NavBar />
      <div className='gallery'>
        <div className='main'>
          <Carousel carouselData={carouselData} />
          {/* <Image src={logo} alt="logo" /> */}
        </div>
        <Sidebar array={arr} />
      </div>
      <Footer />

    </>
  );
};

export default App;
