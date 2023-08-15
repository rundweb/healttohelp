// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./components/home/Home";
// import Service from "./components/content/Service";
import HomeBottom from "./components/content/HomeBottom";
import About from "./components/content/About";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <HomeBottom />
      <About />
      {/* <Service /> */}
    </div>
  );
}
