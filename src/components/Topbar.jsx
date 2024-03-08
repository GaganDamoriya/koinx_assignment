import React from "react";
import "./style.css";
import logo from "../assets/koinx-logo.png";
import { IoMdMenu } from "react-icons/io";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-innerdiv">
        <div className="logo-div">
          <img src={logo} alt="" />
        </div>
        <div className="navigate-link">
          <ul>
            <li>Crypto Taxes</li>
            <li>Free tools</li>
            <li>Resources Center</li>
          </ul>
          <button>Get Started</button>
        </div>
        <span className="mobile-menu">
          <IoMdMenu fontSize={"1.8rem"} />
        </span>
      </div>
    </div>
  );
};

export default Topbar;
