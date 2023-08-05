// import Image from "next/image";
import Link from "next/link";
import "./css/header.css";

const Header = () => {
  return (
    <div id="placement-header">
      <div id="placement-logo-holder" style={{ alignItems: "center" }}>
        <div
          id="placement-logo"
          style={{ height: "50px", display: "flex", alignItems: "center" }}
        >
          <img style={{ height: "50px" }} src="/img/logo.png" alt="Logo" />
        </div>
      </div>
      <div id="placement-nav" className="placement-nav">
        <Link href="/">
          <span>Home</span>
        </Link>
        <Link href="#about">
          <span>About Us</span>
        </Link>
        <Link href="#whyus">
          <span>Why Us</span>
        </Link>
        <Link href="#recruiters">
          <span>Past Recruiters</span>
        </Link>
        <Link href="#placement-record">
          <span>Placement Record</span>
        </Link>
        <Link href="#infrastructure">
          <span>Infrastructure</span>
        </Link>
        <Link href="#contactus">
          <span>Contact Us</span>
        </Link>
        {/* <Link href="/register">
          <span>Register</span>
        </Link> */}
        {/* <span href="javascript:void(0)" onClick={showLoginForm} className="blue-background">Login</span> */}
      </div>
    </div>
  );
};

export default Header;
