// eslint-disable-next-line no-unused-vars
import React from "react";
import icon from "../../assets/icon/pulse.png";
import videAbout from "../../assets/video/about.mp4";
export default function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-title">
          <img src={icon} alt="" />
          <h4>About Us</h4>
        </div>
        <div className="about-text">
          <h3>Lorem ipsum dolor sit amet consectetur</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            commodi ullam quia voluptates consectetur architecto. Quo magnam
            modi quod ipsam nostrum, esse distinctio ab ullam, recusandae
            quisoptio nihil. Ratione.
          </p>
        </div>
        <div className="about-list">
          <div className="about-content">
            <i className="bx bx-badge-check"></i>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="about-content">
            <i className="bx bx-badge-check"></i>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="about-content">
            <i className="bx bx-badge-check"></i>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="about-content">
            <i className="bx bx-badge-check"></i>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="about-btn">
          <a href="" className="btn-contact">
            Contact Us
          </a>
          <a href="" className="btn-more">
            {" "}
            More Information
          </a>
        </div>
      </div>
      <div className="about-right">
        
        <video className="vidabout" width="100%" loop muted autoPlay src={videAbout}></video>
        <div className="kotak1"></div>
        <div className="kotak2"></div>
      </div>
    </div>
  );
}
