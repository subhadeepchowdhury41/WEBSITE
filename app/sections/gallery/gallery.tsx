'use client'
import React from "react";
import "../../../styles/Home.module.css";  
import Image from "next/image";
import i2 from '../../../assets/bg/2.jpg';
import i3 from './../../../assets/bg/3.jpg';
import i4 from './../../../assets/bg/4.jpg';
import i5 from './../../../assets/bg/5.jpg';
import i6 from './../../../assets/bg/6.jpg';
import i7 from './../../../assets/bg/7.jpg';
import i1 from './../../../assets/bg/1.jpg';

//TODO : Chandni Jha
export default function Gallery() {
  return (
    <div className="bodyOfGallery">
      <div className="card-container">
        <input type="radio" name="slider" id="s1" checked />
        <input type="radio" name="slider" id="s2" />
        <input type="radio" name="slider" id="s3" />
        <input type="radio" name="slider" id="s4" />
        <input type="radio" name="slider" id="s5" />
        <input type="radio" name="slider" id="s6" />
        <input type="radio" name="slider" id="s7" />
        <div className="cards">
          <label htmlFor="s1" id="slide1">
            <div className="card">
              <div className="image">
                <Image
                  src={i2}
                  width={400}
                  height={220}
                  style={{ borderRadius: '5px', display: 'sticky' }}

                  alt="Gallery Image"
                />
              </div>
            </div>
          </label>

          <label htmlFor="s2" id="slide2">
            <div className="card">
              <div className="image">
                <Image
                  src={i3}
                  width={400}
                  height={220}
                  style={{ borderRadius: '5px', display: 'sticky' }}

                  alt="Gallery Image"
                />
              </div>
            </div>
          </label>

          <label htmlFor="s3" id="slide3">
            <div className="card">
              <div className="image">
                <Image
                  src={i4}
                  width={400}
                  height={220}
                  style={{ borderRadius: '5px', display: 'sticky' }}

                  alt="Gallery Image"
                />
              </div>
            </div>
          </label>

          <label htmlFor="s4" id="slide4">
            <div className="card">
              <div className="image">
                <Image
                  src={i5}
                  width={400}
                  height={220}
                  style={{ borderRadius: '5px', display: 'sticky' }}

                  alt="Gallery Image"
                />
              </div>
            </div>
          </label>

          <label htmlFor="s5" id="slide5">
            <div className="card">
              <div className="image">
                <Image
                  src={i6}
                  width={400}
                  height={220}
                  style={{ borderRadius: '5px', display: 'sticky' }}

                  alt="Gallery Image"
                />
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}


