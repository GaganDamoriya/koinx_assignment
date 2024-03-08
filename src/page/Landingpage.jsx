import React from "react";
import { useNavigate } from "react-router-dom";

const Landingpage = () => {
  const navigate = useNavigate();
  return (
    <div
      className="navigate-link"
      style={{ height: "100vh", width: "100%", justifyContent: "center" }}
    >
      <button onClick={() => navigate("/cryptocoin/bitcoin")}>
        {" "}
        Cryptocurrency{" "}
      </button>
    </div>
  );
};

export default Landingpage;
