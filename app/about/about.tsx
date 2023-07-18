import Image from 'next/image';
const src = 'https://images.pexels.com/photos/9152584/pexels-photo-9152584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
// look around how to add image from url @chadni
const About = () => {
    return (

        <div className="text-white">
            About Us
            <p>
                IIIT Kalyani, located in the heart of West Bengal, is a hub of discovery, creativity, and innovation where bright minds unite to push boundaries and create new possibilities for the future.
                The institute acknowledges its roots and pays tribute to the rich Indian history and culture of the Bengal region on which it stands.
            </p>
            <Image loader={() => src} src={src} width={500} height={500} alt={''}/>
        </div>
    );
}

export default About;
