'use client';
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import IIITKalyaniLogo from './../../../assets/logos/iiit_kalyani_logo.png';
import MegaMenu from "./MegaMenu";
import MobileNavMenu from "./mobileNav";
import '../../../styles/globals.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const home = [
  {
    items: [
      { label: 'Home', link: '/' },
    ],

  }
]
const acadamics = [
  {
    items: [
      { label: 'Programmes', link: 'https://iiitkalyani.ac.in/php/programmes.php' },
      { label: 'Faculty', link: 'https://iiitkalyani.ac.in/newfacultypages/faculty1.php' },
      { label: 'Admissions', link: 'https://iiitkalyani.ac.in/php/admissionall.php' },
      { label: 'Academic Calendar', link: 'https://iiitkalyani.ac.in/php/Academic_cal.php' },
      { label: 'Course Structure', link: 'https://iiitkalyani.ac.in/php/Course_stru.php' },
      { label: 'New National Education Policy-2020', link: 'https://iiitkalyani.ac.in/php/nep.php' },
      { label: 'Fee Structure', link: 'https://iiitkalyani.ac.in/php/fee_structure.php' },
      { label: 'Regulations', link: 'https://iiitkalyani.ac.in/php/ugregulations.php' },
      { label: 'NPTEL Collaboration', link: 'https://iiitkalyani.ac.in/php/nptel.php' },
    ],
  },
];

const about = [
  {
    items: [
      { label: 'About Us', link: 'https://iiitkalyani.ac.in/php/about_us.php' },
      { label: 'NIRF', link: 'https://iiitkalyani.ac.in/images/notifications/INDIAN%20INSTITUTE%20OF%20INFORMATION%20TECHNOLOGY,%20KALYANI20220228-.pdf' },
      { label: 'Why IIIT Kalyani', link: 'https://iiitkalyani.ac.in/php/why_iiit.php' },
      { label: 'Staff', link: 'https://iiitkalyani.ac.in/php/staff.php' },
      { label: 'Gallery', link: 'https://iiitkalyani.ac.in/php/gallery/gallery.php' },
      { label: 'All Facilities', link: 'https://iiitkalyani.ac.in/php/Facilities_landing_page-v6.php' },
      { label: 'Gymkhana', link: '#' },
    ],
  },
];

const administration = [
  {
    items: [
      { label: 'Administrative Body', link: 'https://iiitkalyani.ac.in/php/administration.php' },
      { label: 'Board of Governers', link: 'https://iiitkalyani.ac.in/images/notification2021/IIIT%20Kalyani_full_BoG%20(1).pdf' },
      { label: 'Finance Committee', link: 'https://iiitkalyani.ac.in/images/notification2021/IIIT%20Kalyani_Fincance%20Committee.pdf' },
      { label: 'Senate', link: 'https://iiitkalyani.ac.in/images/Reconstituion%20of%20Senate%20IIIT%20Kalyani%20(1).pdf' },
      { label: 'IIIT Act', link: 'https://iiitkalyani.ac.in/images/iiitppp/pdf1.pdf' },
      { label: 'Statues', link: 'https://iiitkalyani.ac.in/images/iiitppp/191586_IIIT%20Kalyani.pdf' },
      { label: 'Internal Complaint Committee', link: 'https://iiitkalyani.ac.in/php/icc.php' },
      { label: 'Right to Information', link: 'https://iiitkalyani.ac.in//images/Office%20Order-96_RTI%20(1).pdf' },
    ],
  },
];

const research = [
  {
    items: [
      { label: 'SRIC Cell', link: 'https://iiitkalyani.ac.in/php/sric.php' },
      { label: 'Publications', link: 'https://iiitkalyani.ac.in/php/publication.php' },
      { label: 'Sponsored Projects', link: 'https://iiitkalyani.ac.in/php/proj_spons.php' },
      { label: 'Sponsored Consultancy', link: 'https://iiitkalyani.ac.in/#' },
      { label: 'IPR', link: 'https://iiitkalyani.ac.in/#' },
      { label: 'IIC', link: 'https://iiitkalyani.ac.in/php/iic.php' },
      { label: 'NISP', link: 'https://iiitkalyani.ac.in/php/nisp.php' },

    ],
  },
];

const students = [
  {
    items: [
      { label: 'Currrent Students', link: 'https://iiitkalyani.ac.in/images/StudentList_2021.pdf' },
      { label: 'Regulatory Rules', link: 'https://iiitkalyani.ac.in/php/regul_rules.php' },
      { label: 'Anti Ragging', link: 'https://iiitkalyani.ac.in/php/Anti_ragging.php' },
      { label: 'Students\' Achievements', link: 'https://iiitkalyani.ac.in/php/studentachievement.php' },
      { label: 'Students\' Corner', link: 'https://cache9.in/gallery/' },
      { label: 'GDSC', link: 'https://gdsc.community.dev/indian-institute-of-information-technology-kalyani/' },
      { label: 'PHD', link: '/students/phd' }
    ],
  },
];

const placements = [
  {
    items: [
      { label: 'Placement Portal', link: 'https://iiitkalyani.ac.in/placement' },
    ],
  },
];

const career = [
  {
    items: [
      { label: 'Career', link: 'https://iiitkalyani.ac.in/php/career.php' },
    ],

  }
]
const mobileMenu = [
  {
    items: [
      { label: 'Home', index: 1, submenu: home },
      { label: 'Academics', index: 2, submenu: acadamics },
      { label: 'About', index: 3, submenu: about },
      { label: 'Adminstration', index: 4, submenu: administration },
      { label: 'Research', index: 5, submenu: research },
      { label: 'Students', index: 6, submenu: students },
      { label: 'Career', index: 7, submenu: career },
      { label: 'Placements', index: 8, submenu: placements },
    ],
  },
];
const NavBar = () => {

  return (
    <div className={`grid content-center z-50 w-full top-0`} style={{
         backgroundColor: "rgb(0,0,0,0.85)",
      }}>
      <div className={`flex mx-auto iiitk-name m-6 items-center `}>
        <div className="flex flex-col hindi-name mobile-head text-2xl ml-[45] text-white mx-6 py-3 border-t-2 border-b-2 tracking-wide
                 animate-left-college-name-swipe-animation " style={{ alignItems: 'center', textAlign: 'center', marginLeft: "4.5vw" }}>
          भारतीय सूचना प्रौद्योगिकी संस्थान, कल्याणी<br /><div className="text-2xl mobile-head hindi-name" style={{ letterSpacing: '0px' }}>राष्ट्रीय महत्व का संस्थान</div>
        </div>
        <Image height={100} className="h-[100px] display-sub2 mobile-logo" src={IIITKalyaniLogo} alt="IIIT Kalynai Logo" />
        <div className="flex flex-col mobile-head text-2xl display-sub3 text-white py-3 mx-6 border-t-2 border-b-2 tracking-tighter
                 animate-right-college-name-swipe-animation" style={{ alignItems: "center", textAlign: 'center' }}>
          Indian Institute of Information Technology, Kalyani<br /><div className="text-2xl mobile-head">An Institute of National Importance</div>
        </div>
      </div>
      {/* Option for custom color subhadeep*/}
      <div className={`flex text-white font-semibold navBar  w-full`} style={{ zIndex: '100', boxShadow: '0 0 5px black', backgroundColor: "rgb(0,0,0,0.5)",justifyContent:"center" }}>
        {/* <Image width={53} className={`px-2 py-3 h-[70px] opacity-100 transition-opacity ease-in-out duration-500`} src={IIITKalyaniLogo} alt="IIIT Kalynai Logo" /> */}
        { <MobileNav menu={<MobileNavMenu menus={mobileMenu} />} />}
        <ul className={`flex navItems animate-randimation right-0 opacity-100 `} style={{ listStyle: 'none',zIndex: '1000', }}>
           <NavItem
            title="Home"
            menu={
              <MegaMenu menus={home} />
            }
          />
        <NavItem
            title="About"
            menu={
              <MegaMenu menus={about} />
            }
          />

          <NavItem
            title="Administration"
            menu={
              <MegaMenu menus={administration} />
            }
          />

          <NavItem
            title="Academics"
            menu={
              <MegaMenu menus={acadamics} />
            }
          />

          <NavItem
            title="Research"
            menu={
              <MegaMenu menus={research} />
            }
          />

          <NavItem
            title="Students"
            menu={
              <MegaMenu menus={students} />
            }
          />
          <NavItem
            title="Career"
            menu={
              <MegaMenu menus={career} />
            }
          />

          <NavItem
            title="Placements"
            menu={
              <MegaMenu menus={placements} />
            }
          />

        </ul>
      </div>
    </div>
  );
}

type NavItemProps = {
  title: string;
  menu?: React.ReactNode;
};

const NavItem: React.FC<NavItemProps> = ({ title, menu }) => {
  const [showMenu, setShowMenu] = React.useState(false);

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  return (
    <li
      className="nav-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href="#" className="nav-link" style={{ display: 'inline-block', padding: '0 10px' }}>
        {title}
      </a>
      {menu && showMenu && (
        <div className="absolute mx-auto w-96 n-items" onMouseEnter={handleMouseEnter} style={{ transform: 'translate(-35px,0)' }}>
          {menu}
        </div>
      )}
    </li>
  );
};

type MobileNavItemProps = {
  menu?: React.ReactNode;
};
const MobileNav: React.FC<MobileNavItemProps> = ({ menu }) => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);


  return (
    <div className="Menu-trigger-nd" >
      <span onClick={() => setShowMobileMenu(true)}>{!showMobileMenu && <MenuIcon fontSize="large" />}</span>
      <span onClick={() => setShowMobileMenu(false)}>{showMobileMenu && <CloseIcon fontSize="large" />}</span>
      {menu && showMobileMenu && (
        <div className="">
          {menu}
        </div>
      )}
    </div>
  )
}



export default NavBar;