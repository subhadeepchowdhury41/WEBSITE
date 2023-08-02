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
            { label: 'Md. Samim Rahaman' },
            { label: 'Amit Kumar Sadhukhan' },
            { label: 'Sreejoyee Das' },
        ],
    },
    {
        subheadings: [
            { label: 'Moupriya Das' },
            { label: 'Rathin Pailan' },
            { label: 'Sanju Biswas' },
            { label: 'Twinkle Jena' },
            { label: 'Sourav Gope' },
            { label: 'Debottam Biswas' },
        ],
    }
];
// console.log(window.innerWidth)
// console.log(window.outerWidth)
// var deviceWidth = window.innerWidth;

const Staff = () => {
    useEffect(() => {
        document.title = 'Staffs | Indian Institute of Information Technology, Kalyani';
    }, []);

    const isDesktop = useMediaQuery({ minWidth: 501 });
    const isSidebar = useMediaQuery({ minWidth: 700 });
    // const dps = [, , , , , , , , ];
    const MapDP = new Map();

    MapDP.set("Samim", "https://iiitkalyani.ac.in/images/staff/samim.jpg");
    MapDP.set("Amit", "https://iiitkalyani.ac.in/images/staff/amit.jpg");
    MapDP.set("Sreejoyee", "https://iiitkalyani.ac.in/php/images/318715061_5597810140335137_7513907662518930724_n.jpg");
    MapDP.set("Moupriya", "https://iiitkalyani.ac.in/images/staff/md.jpg");
    MapDP.set("Rathin", "https://iiitkalyani.ac.in/images/staff/rp.jpg");
    MapDP.set("Sanju", "https://iiitkalyani.ac.in/images/staff/sb.jpg");
    MapDP.set("Twinkle", "https://iiitkalyani.ac.in/images/Twinkle_1.jpg");
    MapDP.set("Sourav", "https://iiitkalyani.ac.in/images/sourav%20gope%20iiit%20kalyani.jpg");
    MapDP.set("Debottam", "https://iiitkalyani.ac.in/images/20220211_120900.jpg");

    console.log(MapDP.get("Samim"));

    return (
        <>
            <div className="navbar">
                <NavBar />
            </div>
            <div className="staff-outer-container">
                <Sidebar page='Staff' array={array} />
                <div className='staff-container'>

                    <span className='staff-sub-header'>
                        <h1>IIIT Kalyani Technical Team</h1>
                    </span>
                    <hr />
                    <div className={isDesktop ? "staff-cards" : "small-staff-cards"}>
                        {isDesktop ? <StaffCard name='Md. Samim Rahaman' position='Senior Technical Assistant' qualification='MCA in Computer Science' email='samim AT iiitkalyani.ac.in' subjects={['Computer Hardware and Networking', 'Python', 'DBMS', 'Data Structure', 'Algorithm-II', 'Operating System', 'Design and analysis of Algorithm-I', 'Compiler Design']} site='' dp={MapDP.get('Samim')} /> : <SmallStaffCard name='Md. Samim Rahaman' position='Senior Technical Assistant' qualification='MCA in Computer Science' email='samim AT iiitkalyani.ac.in' subjects={['Computer Hardware and Networking', 'Python', 'DBMS', 'Data Structure', 'Operating System', 'Design and analysis of Algorithm-I', 'Algorithm-II', 'Compiler Design']} site='' dp={MapDP.get('Samim')} />}
                        {isDesktop ? <StaffCard name='Amit Kumar Sadhukhan' position='Technical Assistant' qualification='B.Tech in Electronics and Communication Engineering' email='aks1991 AT yahoo.com' subjects={['Electronics', 'Microprocessor and microcontroller', 'Compiler Design', 'Programming with C/C++', 'Data Structure', 'Java', 'Scilab']} site='' dp={MapDP.get("Amit")} /> : <SmallStaffCard name='Amit Kumar Sadhukhan' position='Technical Assistant' qualification='B.Tech in Electronics and Communication Engineering' email='aks1991 AT yahoo.com' subjects={['Electronics', 'Microprocessor and microcontroller', 'Compiler Design', 'Java', 'Scilab', 'Programming with C/C++', 'Data Structure']} site='' dp={MapDP.get("Amit")} />}
                        {isDesktop ? <StaffCard name='Sreejoyee Das' position='Technical Assistant' qualification='B.Tech in Computer Science and Engineering' email='sreejoyee AT iiitkalyani.ac.in' subjects={['Data Structure', 'Java', 'Scilab', 'Programming with C/C++', 'Operating systems', 'Design and analysis of Algorithm-I', 'Algorithm-II']} site='https://sites.google.com/view/sreejoyee/home' dp={MapDP.get('Sreejoyee')} /> : <SmallStaffCard name='Sreejoyee Das' position='Technical Assistant' qualification='B.Tech in Computer Science and Engineering' email='sreejoyee AT iiitkalyani.ac.in' subjects={['Data Structure', 'Java', 'Scilab', 'Programming with C/C++', 'Operating systems', 'Design and analysis of Algorithm-I', 'Algorithm-II']} site='https://sites.google.com/view/sreejoyee/home' dp={MapDP.get('Sreejoyee')} />}
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