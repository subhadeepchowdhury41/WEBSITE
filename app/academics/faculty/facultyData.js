const facultyData = [
    {
        imgUrl:'https://iiitkalyani.ac.in/images/IMG-20200221-WA0011.jpg',
        name:'Prof. Santanu Chattopadhyay',
        designation:'Professor and Director',
        eduaction:'',
        topicExpertie:[
            'VLSI and Embedded Systems',
            'Network-on-Chip Design and Test',
            'Low Power Digital Design and Testing',
            'Thermal Aware Testing',
            'Logic Encryption'
        ],
        email:['director@iiitkalyani.ac.in'],
        more:'https://www.iitkgp.ac.in/department/EC/faculty/ec-santanu',
        linkedIn:'https://in.linkedin.com/school/indian-institute-of-information-technology-kalyani/'
    },
    {
        imgUrl:'https://iiitkalyani.ac.in/newfacultypages/bchanda.jpg',
        name:'Prof. Bhabatosh Chanda',
        designation:'Professor (Visiting)',
        eduaction:'',
        topicExpertie:[
            'Digital Image Processing',
            'Pattern Recognition',
            'Computer Vision and Image Analysis',
            'Mathematical Morphology',
            'AI techniques in Computer Vision'
        ],
        email:['chanda@iiitkalyani.ac.in , bchanda57@gmail.com'],
        more:'https://sites.google.com/view/bchanda/home?authuser=0',
        linkedIn:'https://in.linkedin.com/school/indian-institute-of-information-technology-kalyani/'
    },
    {
        imgUrl:'https://iiitkalyani.ac.in/newfacultypages/rcimg/Amit%20Ranjan%20Azad%20-%20Photograph.jpg',
        name:'Dr. Amit Ranjan Azad',
        designation:'Assistant Professor',
        eduaction:'Ph.D. [IIT Kharagpur]',
        topicExpertie:[
            'Microwave Circuits',
            'Microwave Filters',
            'Antennas'
        ],
        email:['amitranjanazad@iiitkalyani.ac.in'],
        more:'https://iiitkalyani.ac.in/php/facultymainpage/amitranjanazad.html',
        linkedIn:'https://in.linkedin.com/school/indian-institute-of-information-technology-kalyani/'
    },
    {
        imgUrl:'https://iiitkalyani.ac.in/images/staff/al.jpg',
        name:'Dr. Anirban Lakshman',
        designation:'Assistant Professor',
        eduaction:'Ph.D. [IIT(ISM) Dhanbad]',
        topicExpertie:[
            'Mathematical Modeling',
            'Elastodynamics'
        ],
        email:['anirban@iiitkalyani.ac.in'],
        more:'https://iiitkalyani.ac.in/php/facultymainpage/al.html',
        linkedIn:'https://in.linkedin.com/school/indian-institute-of-information-technology-kalyani/'
    },
    {
        imgUrl:'https://iiitkalyani.ac.in/images/staff/bb.jpg',
        name:'Dr. Bhaskar Biswas',
        designation:'Assistant Professor',
        eduaction:'Ph.D. [Ecole Polytechnique, France]',
        topicExpertie:[
            'Coding Theory',
            'Cryptology'
        ],
        email:['bhaskar@iiitkalyani.ac.in'],
        more:'https://iiitkalyani.ac.in/php/facultymainpage/bhaskar.php',
        linkedIn:'https://in.linkedin.com/school/indian-institute-of-information-technology-kalyani/'
    },
    {
        imgUrl:'https://iiitkalyani.ac.in/images/20191220_180453_Original.jpg',
        name:'Dr. Bapi Kar',
        designation:'Assistant Professor (On Contract)',
        eduaction:'Ph.D. [IIT Kharagpur]',
        topicExpertie:[
            'SVLSI EDA (Physical Design Automation)',
            'ML approaches in VLSI Physical Design Automation',
            'Low Power IC Design for ML HW Accelerators'
        ],
        email:['bapik@iiitkalyani.ac.in'],
        more:'https://iiitkalyani.ac.in/php/facultymainpage/bk.html',
        linkedIn:'https://in.linkedin.com/school/indian-institute-of-information-technology-kalyani/'
    },
    {
        imgUrl:'https://iiitkalyani.ac.in/images/staff/Photo_Dalia_New.jpg',
        name:'Dr. Dalia Nandi (Das)',
        designation:'Assistant Professor',
        eduaction:'Ph.D. [University of Calcutta]',
        topicExpertie:[
            'Radio Wave Propagation',
            '5G Communication'
        ],
        email:['dalia@iiitkalyani.ac.in'],
        more:'https://iiitkalyani.ac.in/php/facultymainpage/dnd.html',
        linkedIn:'https://in.linkedin.com/school/indian-institute-of-information-technology-kalyani/'
    },
    {
        imgUrl:'https://iiitkalyani.ac.in/images/staff/db.jpg',
        name:'Dr. Debasish Bera',
        designation:'Assistant Professor',
        eduaction:'Ph.D. [IIT Kharagpur]',
        topicExpertie:[
            'Coding Theory',
            'Post-Quantum Cryptography',
            'Information Theory',
            'Statistical Analysis of Signal/Data',
            'Wireless Communication and Networks',        
        ],
        email:['debasish@iiitkalyani.ac.in'],
        more:'https://iiitkalyani.ac.in/php/facultymainpage/db.html',
        linkedIn:'https://in.linkedin.com/school/indian-institute-of-information-technology-kalyani/'
    },
    {
        imgUrl:'https://iiitkalyani.ac.in/images/staff/immain.jpg',
        name:'Dr. Imon Mukherjee',
        designation:'Assistant Professor',
        eduaction:'Ph.D. [Jadavpur University]',
        topicExpertie:[
            'Information Security',
            'Computer Vision',
            'Data Analytics'
        ],
        email:['imon@iiitkalyani.ac.in'],
        more:'https://iiitkalyani.ac.in/php/facultymainpage/im.html',
        linkedIn:'https://in.linkedin.com/school/indian-institute-of-information-technology-kalyani/'
    },
    {
        imgUrl:'https://iiitkalyani.ac.in/images/staff/obmain.jpg',
        name:'Dr. Oishila Bandyopadhyay',
        designation:'Assistant Professor',
        eduaction:'Ph.D. [IIEST, Shibpur]',
        topicExpertie:[
            'Medical Image Processing',
            'Computer Vision',
            'Digital Geometry'
        ],
        email:['oishila@iiitkalyani.ac.in'],
        more:'https://iiitkalyani.ac.in/php/facultymainpage/ob.html',
        linkedIn:'https://in.linkedin.com/school/indian-institute-of-information-technology-kalyani/'
    },
    {
        imgUrl:'https://iiitkalyani.ac.in/newfacultypages/rcimg/photo_Pratik.JPG',
        name:'Dr. Pratik Chakraborty',
        designation:'Assistant Professor',
        eduaction:'Ph.D. [ IIT Delhi ]',
        topicExpertie:[
            'Communications and Signal Processing'
        ],
        email:['pratik@iiitkalyani.ac.in'],
        more:'https://iiitkalyani.ac.in/php/facultymainpage/pc.html',
        linkedIn:'https://in.linkedin.com/school/indian-institute-of-information-technology-kalyani/'
    },
    {
        imgUrl:'https://iiitkalyani.ac.in/images/staff/rs.jpg',
        name:'Dr. Rinky Sha',
        designation:'Assistant Professor',
        eduaction:'Ph.D. [ Indian Institute of Technology, Hyderabad ]',
        topicExpertie:[
            'Semiconductor device physics',
            'Nano-electronics and Nanotechnology',
            'Flexible electronics',
            'Bio/chemical sensors',
            'Supercapacitors',
            '2D Nanomaterials'
        ],
        email:['rinky@iiitkalyani.ac.in'],
        more:'https://iiitkalyani.ac.in/php/facultymainpage/rs.html',
        linkedIn:'https://in.linkedin.com/school/indian-institute-of-information-technology-kalyani/'
    },
    {
        imgUrl:'https://iiitkalyani.ac.in/images/staff/sc.jpg',
        name:'Dr. Sanjay Chatterji',
        designation:'Assistant Professor',
        eduaction:'Ph.D. [ IIT Kharagpur ]',
        topicExpertie:[
            'Natural Language Processing',
            'Information Retrieval'
        ],
        email:['sanjayc@iiitkalyani.ac.in'],
        more:'https://iiitkalyani.ac.in/php/facultymainpage/sc.html',
        linkedIn:'https://in.linkedin.com/school/indian-institute-of-information-technology-kalyani/'
    },
    {
        imgUrl:'https://iiitkalyani.ac.in/images/staff/sp.png',
        name:'Dr. Sanjoy Pratihar',
        designation:'Assistant Professor',
        eduaction:'Ph.D. [IIT Kharagpur]',
        topicExpertie:[
            'Computer Vision',
            'Image Understanding',
            'Document Image Processing'
        ],
        email:['sanjoy@iiitkalyani.ac.in'],
        more:'https://iiitkalyani.ac.in/php/facultymainpage/sp.html',
        linkedIn:'https://in.linkedin.com/school/indian-institute-of-information-technology-kalyani/'
    },
    {
        imgUrl:'https://iiitkalyani.ac.in/images/staff/skh.jpg',
        name:'Dr. SK Hafizul Islam',
        designation:'Assistant Professor',
        eduaction:'Ph.D. [IIT(ISM) Dhanbad]',
        topicExpertie:[
            'Cryptography',
            'Information Security',
            'Network Security'
        ],
        email:['hafi786@iiitkalyani.ac.in'],
        more:'https://iiitkalyani.ac.in/php/facultymainpage/skh.html',
        linkedIn:'https://in.linkedin.com/school/indian-institute-of-information-technology-kalyani/'
    },
    {
        imgUrl:'https://iiitkalyani.ac.in/images/Photo_Sudeshna_IIITK.jpeg',
        name:'Dr. Sudeshna Mondal',
        designation:'Assistant Professor (On Contract)',
        eduaction:'Ph.D. [IIEST Shibpur]',
        topicExpertie:[
            'Mathematical Biology Ecological Modelling',
            'Nonlinear Dynamical Systems',
            'Population Dynamics'
        ],
        email:['sudeshna@iiitkalyani.ac.in'],
        more:'https://iiitkalyani.ac.in/php/facultymainpage/sm.html',
        linkedIn:'https://in.linkedin.com/school/indian-institute-of-information-technology-kalyani/'
    },
    {
        imgUrl:'https://iiitkalyani.ac.in/images/staff/udmain.jpg',
        name:'Dr. Uma Das',
        designation:'Assistant Professor',
        eduaction:'Ph.D. [Physical Research Laboratory,Ahmedabad]',
        topicExpertie:[
            'Upper Atmosphere',
            'Seismogenic Ionosphere',
            'Big Data'
        ],
        email:['uma@iiitkalyani.ac.in'],
        more:'https://iiitkalyani.ac.in/php/facultymainpage/ud.html',
        linkedIn:'https://in.linkedin.com/school/indian-institute-of-information-technology-kalyani/'
    }
]

export default facultyData;