import BtechCSE from './images/btechcse.jpg';
import BtechECE from './images/btechece.jpg';
import Mtech1 from './images/mtechAIDS.jpg';
import Mtech2 from './images/mtechcomsig.jpg';
import PHD from './images/phd.jpg'

const SidebarData = [
    {
        index: 1,
        label: 'B.Tech',
        children: [
            {
                id: 1,
                label: 'Computer Science and Engineering',
                img: BtechCSE.src,
                text: 'Computer Science and Engineering [CSE] is a dynamic and interdisciplinary field that combines the principles of computer science with the engineering aspects of designing and developing hardware and software systems. It encompasses a wide range of topics,including algorithm design, data structures, artificial intelligence, computer architecture, software development, networking, and more. CSE professionals play a crucial role in shaping the modern world by creating innovative technologies and solutions that have transformed industries, businesses, and our daily lives . With its ever-evolving nature and profound impact on society, Computer Science and Engineering continues to be at the forefront of technological advancements and remains a sought-after career path for those passionate about technology and innovation.',
                resources: [
                    {
                        heading: 'New Curriculum from July 2021 onwards',
                        url: 'https://iiitkalyani.ac.in/images/notification2021/Annexure%20E.pdf'
                    },
                    {
                        heading: 'Old Curriculum',
                        url: 'https://iiitkalyani.ac.in/images/notification2021/B.Tech._CSE_Course%20Structure[IIIT%20Kalyani]2021.03.15.pdf'
                    },
                    {
                        heading: 'UG Admissions',
                        url: 'http://iiitkalyani.ac.in/php/admission.php'
                    }
                ]
            },
            {
                id: 2,
                label: 'Electronics and Communication Engineering',
                img: BtechECE.src,
                text: 'Electronics and Communication Engineering [ECE] is a field of engineering that revolves around the study, design, and application of electronic devices, systems, and communication technologies. It encompasses a wide range of areas, including analog and digital electronics, microelectronics, telecommunications, signal processing, and wireless communication. In this rapidly evolving digital era, ECE has a significant impact on almost every aspect of our lives, enabling seamless communication through mobile phones, high-speed internet, and satellite systems, as well as powering various electronic devices we rely on daily. With a strong emphasis on innovation and problem-solving, ECE offers exciting opportunities for individuals passionate about technology and eager to contribute to the ongoing advancements in the field. Whether it is working on developing new electronic devices, improving communication networks, or exploring emerging technologies like the Internet of Things (IoT) and 5G, Electronics and Communication Engineering continues to be a vital and sought-after discipline in the current interconnected world.',
            }
        ],
    },
    {
        index: 2,
        label: 'M.Tech',
        children: [
            {
                id: 1,
                label: 'Artificial Intelligence and Data Science',
                img: Mtech1.src,
                text: 'Artificial Intelligence (AI) and Data Science are two rapidly evolving fields at the forefront of modern technology. Both AI and Data Science are highly interrelated. Data serves as the foundation for training AI models, and AI algorithms are used to enhance the efficiency and effectiveness of data analysis. The synergy between these fields has led to remarkable advancements in various domains, including healthcare, finance, marketing, and more. AI and Data Science have revolutionized industries, enabling companies to make data-driven decisions, automate processes, and provide personalized services to customers. As technology continues to advance, these fields will play an increasingly critical role in shaping the future, paving the way for smarter and more efficient systems that will have a profound impact on society.',
                resources: [{
                    url: "https://iiitkalyani.ac.in/images/MTech-Course-Structure-AI-and-Data%20Science.pdf",
                    heading: 'M.Tech Course Structure AI and Data Science'
                }]
            },
            {
                id: 2,
                label: 'Advanced Communication Systems and Signal Processing',
                img: Mtech2.src,
                text: 'Advanced Communication Systems and Signal Processing are two interconnected fields that play a crucial role in modern telecommunications and information exchange. The synergy between Advanced Communication Systems and Signal Processing has led to significant technological advancements. These fields are instrumental in developing cutting-edge technologies like 5G wireless networks, digital audio and video compression, image recognition algorithms, and speech processing systems. As the world becomes increasingly interconnected and reliant on efficient communication, the demand for professionals in Advanced Communication Systems and Signal Processing continues to grow. Experts in these fields work on developing innovative solutions to improve communication systems, leading to more efficient data exchange, better multimedia experiences, and enhanced connectivity across the globe.',
                resources: [{
                    heading: 'Course Structure-Advanced Communication Systems and Signal Processing',
                    url: "https://iiitkalyani.ac.in/images/M.Tech_updated_Course_structure_for_Adv_Comm_Sys_and_Sig_Proc_IIIT%20Kalyani.pdf"
                }]
            }
        ]
    },
    {
        index: 3,
        label: 'Ph.D',
        children: [
            {
                id: 1,
                label: 'Ph.D Programme',
                img: PHD.src,
                text: 'IIIT Kalyani offers a Ph.D. program for highly motivated and research-oriented individuals who wish to pursue advanced studies in various domains of information technology. The Ph.D. program is designed to foster innovation, critical thinking, and in-depth research in the chosen area of specialization. Admission to the Ph.D. program at IIIT Kalyani is highly competitive and follows a rigorous selection process. Prospective candidates are required to apply online and submit their academic credentials, research proposal, and other relevant documents. Shortlisted candidates are usually called for a written test and/or an interview to assess their research aptitude and domain knowledge. IIIT Kalyani boasts a team of distinguished faculty members who are experts in their respective research areas. The institute provides state-of-the-art research facilities, access to modern labs, and resources necessary for conducting cutting-edge research.',
                resources: [
                    {
                        heading: 'Ph.D Regulations',
                        url: 'https://iiitkalyani.ac.in/images/notification2021/B.Tech._CSE_Course%20Structure[IIIT%20Kalyani]2021.03.15.pdf'
                    },
                    {
                        heading: 'Ph.D Regulations (November 2017)',
                        url: 'https://iiitkalyani.ac.in/images/iiitppp/Ph.dreg.pdf'
                    },
                    {
                        heading: 'See PhD admissions (Old data)',
                        url: '/students/phd'
                    }
                ]
            },
        ]
    }
]

export default SidebarData