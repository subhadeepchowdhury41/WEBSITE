import P1 from './images/1.jpg'
import P2 from './images/2.jpg'
import Cert from './images/cert.jpg'

const data = [
    {
        heading: 'NPTEL',
        paragraphs: [{
            text: 'The National Programme on Technology Enhanced Learning (NPTEL) was initiated by seven Indian Institutes of Technology (Bombay, Delhi, Kanpur, Kharagpur, Madras, Guwahati and Roorkee) along with the Indian Institute of Science, Bangalore in 2003. NPTEL offers open online courses along with certificates from the IITs/IISc for those who complete the courses successfully.',
        }, {
            text: 'Many students are taking advantage of these exams to prepare for GATE exams and for higher studies too. UGC and AICTE are actively encouraging colleges and Universities to adopt online courses for credit transfer. NPTEL partners with around 1900+ colleges as on date in the form of NPTEL Local chapters and each college has a coordinator with who NPTEL works closely with.',
        }, {
            text: 'IIIT Kalyani is one of the partners with NPTEL as a Local chapter, coordinated by Dr. Imon Mukherji, who is actively encouraging all the students to enroll for at least one certification per course. And with the collective hard work of faculties and students we achieved an outstanding result in different courses of NPTEL (Jan-Apr, 2018).Where out of 39 students, 8 have been enlisted as Topper, 4 have received Gold and 24 have got Elite.  '
        }],
        images: [
            {
                index: 0,
                url: P1.src
            },
            {
                index: 1,
                url: P2.src
            },
            {
                index: 2,
                url: Cert.src
            },
        ]
    }
]

export default data