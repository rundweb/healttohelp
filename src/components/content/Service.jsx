// eslint-disable-next-line no-unused-vars
import React from "react";
import s1 from "../../assets/images/s1.svg";
import s2 from "../../assets/images/s2.svg";
import s3 from "../../assets/images/s3.svg";
import "./style.css";
export default function Service() {
  return (
    <div className="service">
      <div className="service-text">
        <p>Services</p>
        <h1>Discover What Services We Provide Special For You</h1>
      </div>
      <div className="service-list">
        <div className="service-content">
          <div className="service-icon">
            <img src={s1} alt="" />
          </div>
          <div className="service-content-text">
            <h5>List Services</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quo ut expedita cupiditate?
            </p>
            <a href="" className="btn-read">
              Read More <i className="bx bxs-right-arrow-alt"></i>
            </a>
          </div>
        </div>
        <div className="service-content active">
          <div className="service-icon">
            <img src={s3} alt="" />
          </div>
          <div className="service-content-text">
            <h5>List Services</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quo ut expedita cupiditate?
            </p>
            <a href="" className="btn-read">
              Read More <i className="bx bxs-right-arrow-alt"></i>
            </a>
          </div>
        </div>
        <div className="service-content">
          <div className="service-icon">
            <img src={s2} alt="" />
          </div>
          <div className="service-content-text">
            <h5>List Services</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quo ut expedita cupiditate?
            </p>
            <a href="" className="btn-read">
              Read More <i className="bx bxs-right-arrow-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
