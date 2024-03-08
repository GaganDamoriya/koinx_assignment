import React from "react";
import Rightbar from "./Rightbar/Rightbar";
import { Outlet } from "react-router-dom";
import "./page.css";

const RouteLayout = () => {
  return (
    <div className="rootlayout">
      <div className="outlet-renderer">
        <Outlet />
      </div>
      <Rightbar />
    </div>
  );
};

export default RouteLayout;
