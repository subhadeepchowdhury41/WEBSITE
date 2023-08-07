"use client";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import IIITKalyaniLogo from "./../../../assets/logos/iiit_kalyani_logo.png";
import MegaMenu from "./MegaMenu";
import MobileNavMenu from "./mobileNav";
import "../../../styles/globals.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const home = [
  {
    items: [{ label: "Home", link: "/" }],
  },
];
const acadamics = [
  {
    items: [
      { label: "Programmes", link: "/academics/programs" },
      { label: "Faculty", link: "/academics/faculty" },
      { label: 'Admissions', link: '/academics/admissions' },
      { label: 'Academic Calendar', link: '/academics/academic-calendar' },
      { label: 'Course Structure', link: '/academics/coursestr' },
      { label: 'New National Education Policy-2020', link: '/academics/newedupolicy' },
      { label: 'Fee Structure', link: '/academics/feestr' },
      { label: 'Regulations', link: '/academics/regulations' },
      { label: 'NPTEL Collaboration', link: '/academics/nptel' },
    ],
  },
];

const about = [
  {
    items: [
      { label: "About Us", link: "/about/aboutus" },
      {
        label: "NIRF",
        link: "/pdf/NIRF/INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, KALYANI20220228-.pdf",
      },
      { label: "Why IIIT Kalyani", link: "/about/whyiiitkalyani" },
      { label: "Staff", link: "/about/staff" },
      { label: "Gallery", link: "/about/gallery/parikshapecharcha2022" },
      { label: "All Facilities", link: "/about/facilities" },
      { label: "Gymkhana", link: "/about/gymkhana" },
    ],
  },
];
const administration = [
  {
    items: [
      {
        label: "Administrative Body",
        link: "/administration/administrative-body",
      },
      {
        label: "Board of Governers",
        link: "/pdf/BOG/IIIT Kalyani_full_BoG.pdf",
      },
      {
        label: "Finance Committee",
        link: "/pdf/financecommittee/IIIT Kalyani_Fincance Committee.pdf",
      },
      {
        label: "Senate",
        link: "/pdf/senate/Reconstituion of Senate IIIT Kalyani.pdf",
      },
      {
        label: "IIIT Act",
        link: "/pdf/iiitact/IIIT Act.pdf",
      },
      {
        label: "Statues",
        link: "/pdf/statues/Statues.pdf",
      },
      {
        label: "Internal Complaint Committee",
        link: "/administration/icc",
      },
      {
        label: "Right to Information",
        link: "/pdf/RTI/Office Order-96_RTI.pdf",
      },
    ],
  },
];

const research = [
  {
    items: [
      { label: "SRIC Cell", link: "/research/SRIC" },
      { label: "Publications", link: "/research/publications" },
      { label: "Sponsored Projects", link: "/research/sponsored_projects" },
      { label: "Institution's Innovation Council", link: "/research/IIC" },
      { label: "National Innovation and Startup Policy", link: "/research/NISP" }
    ],
  },
];

const students = [
  {
    items: [
      {
        label: "Currrent Students",
        link: "/pdf/current-students/StudentList_2021.pdf",
      },
      {
        label: "Regulatory Rules",
        link: "/students/regulatory-rules",
      },
      {
        label: "Anti Ragging",
        link: "/students/anti-ragging",
      },
      {
        label: "Students' Achievements",
        link: "/students/students-achievements",
      },
      {
        label: "GDSC",
        link: "https://gdsc.community.dev/indian-institute-of-information-technology-kalyani/",
      },
      { label: "PHD", link: "/students/phd" },
    ],
  },
];

const placements = [
  {
    items: [
      {
        label: "Placement Portal",
        link: "/placement-portal",
      },
    ],
  },
];

const career = [
  {
    items: [
      { label: "Career", link: "/career" }
    ],
  },
];

const notifications = [
  {
    items: [
      { label: "E-Notice Board", link: "/e-notice-board" },
      { label: "Archive", link: "/archive/archive.html" },
    ],
  }
]

const mobileMenu = [
  {
    items: [
      { label: "Home", index: 1, submenu: home },
      { label: "Academics", index: 2, submenu: acadamics },
      { label: "About", index: 3, submenu: about },
      { label: "Adminstration", index: 4, submenu: administration },
      { label: "Research", index: 5, submenu: research },
      { label: "Students", index: 6, submenu: students },
      { label: "Career", index: 7, submenu: career },
      { label: "Placements", index: 8, submenu: placements },
      { label: "Notifications", index: 8, submenu: notifications },
    ],
  },
];

const NavBar = () => {
  // const [stick, setStick] = useState<Boolean>(false);
  // const handleScroll = () => {
  //   if (globalThis.window?.scrollY > 1118) {
  //     setStick(true);
  //   } else {
  //     setStick(false);
  //   }
  // };
  const [stick, setStick] = useState(false);

  const handleScroll = () => {

    if (window.scrollY > 120) {
      setStick(true);
    } else {
      setStick(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`grid content-center z-50 w-full top-0`}
      style={{
        backgroundColor: "rgb(0,0,0 ,0.85)",
      }}
    >
      <div className={`flex mx-auto iiitk-name m-6 items-center `}>
        <div
          className="flex flex-col hindi-name mobile-head text-2xl ml-[45] text-white mx-6 py-3 border-t-2 border-b-2 tracking-wide animate-left-college-name-swipe-animation "
          style={{
            alignItems: "center",
            textAlign: "center",
            marginLeft: "4.5vw",
          }}
        >
          भारतीय सूचना प्रौद्योगिकी संस्थान, कल्याणी
          <br />
          <div
            className="text-2xl mobile-head hindi-name"
            style={{ letterSpacing: "0px" }}
          >
            राष्ट्रीय महत्व का संस्थान
          </div>
        </div>
        <Image
          height={100}
          className="h-[100px] display-sub2 mobile-logo"
          src={IIITKalyaniLogo}
          alt="IIIT Kalynai Logo"
        />
        <div
          className="flex flex-col mobile-head text-2xl display-sub3 text-white py-3 mx-6 border-t-2 border-b-2 tracking-tighter
                 animate-right-college-name-swipe-animation"
          style={{ alignItems: "center", textAlign: "center" }}
        >
          Indian Institute of Information Technology, Kalyani
          <br />
          <div className="text-2xl mobile-head">
            An Institute of National Importance
          </div>
        </div>
      </div>
      {/* Option for custom color subhadeep*/}
      <div
        className={`flex text-white animate-left-college-name-swipe-animation transition duration-500 font-semibold ${stick ? " navBar" : ""}
               ${stick ? "fixed top-0 justify-between" : "justify-center"
          } w-full`}
        style={
          !stick
            ? { zIndex: "100" }
            : {
              zIndex: "100",
              boxShadow: "0 0 5px black",
              backgroundColor: "rgb(0,0,0,0.8 )",
            }
        }
      >
        <Image
          width={53}
          className={`px-2 py-3 h-[70px] animate-left-college-name-swipe-animation
                 ${stick
              ? "opacity-100 transition-opacity ease-in-out duration-500"
              : "hidden"
            }`}
          src={IIITKalyaniLogo}
          alt="IIIT Kalynai Logo"
        />
        {/* { <MobileNav menu={<MobileNavMenu menus={mobileMenu} />} />} */}
        {stick ? (
          <MobileNav menu={<MobileNavMenu menus={mobileMenu} />} />
        ) : (
          <></>
        )}

        <ul
          className={`flex second-nav navItems animate-left-college-name-swipe-animation transition-[1] right-0 opacity-100 `}
          style={{ listStyle: "none", zIndex: "1000" }}
        >
          <li>
            <a
              style={{
                fontSize: "22px",
                paddingRight: "10px",
                paddingLeft: "10px",
              }}
              href="/"
            >
              Home
            </a>
          </li>
          <NavItem title="About" menu={<MegaMenu menus={about} />} />

          <NavItem
            title="Administration"
            menu={<MegaMenu menus={administration} />}
          />

          <NavItem title="Academics" menu={<MegaMenu menus={acadamics} />} />

          <NavItem title="Research" menu={<MegaMenu menus={research} />} />

          <NavItem title="Students" menu={<MegaMenu menus={students} />} />
          <NavItem title="Career" menu={<MegaMenu menus={career} />} />

          <NavItem title="Placements" menu={<MegaMenu menus={placements} />} />
          <NavItem title="Notifications" menu={<MegaMenu menus={notifications} />} />
        </ul>
      </div>
    </div>
  );
};

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
      <a
        href="#"
        className="nav-link"
        style={{ fontSize: "22px", padding: "0 10px" }}
      >
        {title}
      </a>
      {menu && showMenu && (
        <div
          className="absolute mx-auto w-96 n-items"
          onMouseEnter={handleMouseEnter}
          style={{ transform: "translate(-35px,0)" }}
        >
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
    <div className="Menu-trigger-nd">
      <span onClick={() => setShowMobileMenu(true)}>
        {!showMobileMenu && <MenuIcon fontSize="large" />}
      </span>
      <span onClick={() => setShowMobileMenu(false)}>
        {showMobileMenu && <CloseIcon fontSize="large" />}
      </span>
      {menu && showMobileMenu && <div className="">{menu}</div>}
    </div>
  );
};

export default NavBar;
