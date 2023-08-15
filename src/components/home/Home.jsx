// eslint-disable-next-line no-unused-vars
import React from "react";
import vidHome from "../../assets/video/home.mp4";
import "./home.css";
export default function Home() {
  return (
    <div className="home">
      <div className="home-video">
        <video width="100%" loop muted autoPlay src={vidHome}></video>
      </div>
      <div className="home-text">
        <h1>Application For Health</h1>
        <p>
          very useful application for data management and for managing reports{" "}
        </p>
        <a href="#" className="btn-start">
          Get Started
        </a>
        {/* <div className="home-scroll">
          <i className="bx bx-down-arrow-alt"></i>
        </div> */}
      </div>
    </div>
  );
}
