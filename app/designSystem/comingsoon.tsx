import React from 'react'
import logo from "../../assets/logos/iiit_kalyani_logo.png"
import Image from 'next/image';

export default function Comingsoon() {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: "42px", fontWeight: "600", height: "50vh" }}>
            <span style={{ backgroundColor: "rgb(245,222,179,0.7)", color: "black", padding: "125px 45px", borderRadius: "20px" }}>Page Coming Soon!</span>
            <Image style={{ position: 'absolute', zIndex: '-1', opacity: "0.5" }} src={logo} alt="hello"></Image>
        </div>
    )
}
