// eslint-disable-next-line no-unused-vars
import React from "react";
import './style.css'
import bacteri from "../../assets/icon/bacteria.png";
import kasur from "../../assets/icon/patient.png";
import hati from "../../assets/icon/healthy.png";

export default function HomeBottom() {
  return (
    <div className="home-bottom">
      <div className="home-bottom-list">
        <div className="home-bottom-content">
          <div className="home-bottom-icon">
            <img src={hati} alt="" />
          </div>
          <div className="home-bottom-text">
            <h4>Lorem Ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
              tempore.
            </p>
          </div>
        </div>
        <div className="home-bottom-content">
          <div className="home-bottom-icon">
            <img src={kasur} alt="" />
          </div>
          <div className="home-bottom-text">
            <h4>Lorem Ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
              tempore.
            </p>
          </div>
        </div>
        <div className="home-bottom-content">
          <div className="home-bottom-icon">
            <img src={bacteri} alt="" />
          </div>
          <div className="home-bottom-text">
            <h4>Lorem Ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
              tempore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
