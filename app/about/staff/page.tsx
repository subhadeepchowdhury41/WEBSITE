'use client'
import '../../../styles/staff/staff.css'
import React from 'react';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import NavBar from '../../sections/appbar/secondNav';
import Footer from '../../sections/footer/footer';
import StaffCard from '../../designSystem/staffCard'
import SmallStaffCard from '../../designSystem/smallStaffCard';
import EmployeeCard from '../../designSystem/employeeCard';
import Sidebar from '../../designSystem/sidebar';

const array = [
    {
        headings: [
            { label: 'Technical Team', id: 1 },
            { label: 'Employees', id: 2 },
        ],
    },
    {
        subheadings: [
            { label: 'Md. Samim Rahaman', scroll: 0 },
            { label: 'Amit Kumar Sadhukhan', scroll: 0 },
            { label: 'Sreejoyee Das', scroll: 550 },
        ],
    },
    {
        subheadings: [
            { label: 'Moupriya Das', scroll: 1000 },
            { label: 'Rathin Pailan', scroll: 70 },
            { label: 'Sanju Biswas', scroll: 70 },
            { label: 'Twinkle Jena', scroll: 70 },
            { label: 'Sourav Gope', scroll: 1400 },
            { label: 'Debottam Biswas', scroll: 1400 },
        ],
    }
];
const Staff = () => {
    useEffect(() => {
        document.title = 'Staffs | Indian Institute of Information Technology, Kalyani';
    }, []);

    // const isDesktop = useMediaQuery({ minWidth: 501 });
    let isDesktop = ({ minWidth: 501 })

    const MapDP = new Map();

    MapDP.set("Samim", "/staff/samim.webp");
    MapDP.set("Amit", "/staff/amit.webp");
    MapDP.set("Sreejoyee", "/staff/srejoyee.webp");
    MapDP.set("Moupriya", "/staff/md.webp");
    MapDP.set("Rathin", "/staff/rp.webp");
    MapDP.set("Sanju", "/staff/sb.webp");
    MapDP.set("Twinkle", "/staff/Twinkle.webp");
    MapDP.set("Sourav", "/staff/sourav.webp");
    MapDP.set("Debottam", "/staff/db.webp");



    const [scrollToSectionId, setScrollToSectionId] = useState<string | null>(null);
    useEffect(() => {
        if (scrollToSectionId) {
            scrollToSection(scrollToSectionId);
        }
    }, [scrollToSectionId]);

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        setScrollToSectionId(null);
    };

    return (

        <>
            <div className="navbar">
                <NavBar />
            </div>
            <div className="staff-outer-container">
                <Sidebar page='Staff' array={array} location={''} />
                <div className='staff-container'>

                    <span className='staff-sub-header'>
                        <h1>IIIT Kalyani Technical Team</h1>
                    </span>
                    <hr />
                    {/* <div className={isDesktop ? "staff-cards" : "small-staff-cards"}>
                        {isDesktop ? <StaffCard name='Md. Samim Rahaman' position='Senior Technical Assistant' qualification='MCA in Computer Science' email='samim AT iiitkalyani.ac.in' subjects={['Computer Hardware and Networking', 'Python', 'DBMS', 'Data Structure', 'Algorithm-II', 'Operating System', 'Design and analysis of Algorithm-I', 'Compiler Design']} site='' dp={MapDP.get('Samim')} /> : <SmallStaffCard name='Md. Samim Rahaman' position='Senior Technical Assistant' qualification='MCA in Computer Science' email='samim AT iiitkalyani.ac.in' subjects={['Computer Hardware and Networking', 'Python', 'DBMS', 'Data Structure', 'Operating System', 'Design and analysis of Algorithm-I', 'Algorithm-II', 'Compiler Design']} site='' dp={MapDP.get('Samim')} />}
                        {isDesktop ? <StaffCard name='Amit Kumar Sadhukhan' position='Technical Assistant' qualification='B.Tech in Electronics and Communication Engineering' email='aks1991 AT yahoo.com' subjects={['Electronics', 'Microprocessor and microcontroller', 'Compiler Design', 'Programming with C/C++', 'Data Structure', 'Java', 'Scilab']} site='' dp={MapDP.get("Amit")} /> : <SmallStaffCard name='Amit Kumar Sadhukhan' position='Technical Assistant' qualification='B.Tech in Electronics and Communication Engineering' email='aks1991 AT yahoo.com' subjects={['Electronics', 'Microprocessor and microcontroller', 'Compiler Design', 'Java', 'Scilab', 'Programming with C/C++', 'Data Structure']} site='' dp={MapDP.get("Amit")} />}
                        {isDesktop ? <StaffCard name='Sreejoyee Das' position='Technical Assistant' qualification='B.Tech in Computer Science and Engineering' email='sreejoyee AT iiitkalyani.ac.in' subjects={['Data Structure', 'Java', 'Scilab', 'Programming with C/C++', 'Operating systems', 'Design and analysis of Algorithm-I', 'Algorithm-II']} site='https://sites.google.com/view/sreejoyee/home' dp={MapDP.get('Sreejoyee')} /> : <SmallStaffCard name='Sreejoyee Das' position='Technical Assistant' qualification='B.Tech in Computer Science and Engineering' email='sreejoyee AT iiitkalyani.ac.in' subjects={['Data Structure', 'Java', 'Scilab', 'Programming with C/C++', 'Operating systems', 'Design and analysis of Algorithm-I', 'Algorithm-II']} site='https://sites.google.com/view/sreejoyee/home' dp={MapDP.get('Sreejoyee')} />}
                    </div> */}
                    <div className="employee-cards">
                        <EmployeeCard name='Md. Samim Rahaman' position='Senior Technical Assistant' email='amim AT iiitkalyani.ac.in' dp={MapDP.get("Samim")} />
                        <EmployeeCard name='Amit Kumar Sadhukhan' position='Technical Assistant' email='aks1991 AT yahoo.com' dp={MapDP.get("Amit")} />
                        <EmployeeCard name='Sreejoyee Das' position='Technical Attendant' email='sreejoyee AT iiitkalyani.ac.in' dp={MapDP.get("Sreejoyee")} />
                    </div>
                    <span className='staff-sub-header'>
                        <h1>IIIT Kalyani Employees</h1>
                    </span>
                    <hr />
                    <div className="employee-cards">
                        <EmployeeCard name='Moupriya Das' position='Office Assistant' email='moupriya@iiitkalyani.ac.in' dp={MapDP.get("Moupriya")} />
                        <EmployeeCard name='Rathin Pailan' position='Junior Assistant' email='rathin AT iiitkalyani.ac.in' dp={MapDP.get("Rathin")} />
                        <EmployeeCard name='Sanju Biswas' position='Office Attendant' email='sanju@iiitkalyani.ac.in' dp={MapDP.get("Sanju")} />
                        <EmployeeCard name='Twinkle Jena' position='Junior Assistant (Administration)' email='ja_admin@iiitkalyani.ac.in' dp={MapDP.get("Twinkle")} />
                        <EmployeeCard name='Sourav Gope' position='Junior Assistant (Director Office)' email='ja_do@iiitkalyani.ac.in, sourav@iiitkalyani.ac.in' dp={MapDP.get("Sourav")} />
                        <EmployeeCard name='Debottam Biswas' position='Junior Assistant (Finance & Accounts)' email='ja_fa@iiitkalyani.ac.in, debottam@iiitkalyani.ac.in' dp={MapDP.get("Debottam")} />
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Staff;