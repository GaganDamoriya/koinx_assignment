import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import RouteLayout from "./page/RouteLayout";
import Dashboard from "./page/Dashboard/Dashboard";
import Topbar from "./components/Topbar";
import Landingpage from "./page/Landingpage";

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        {/* can add other routes like signin etc, */}
        <Route path="/" element={<Landingpage />} />
        <Route path="/cryptocoin" element={<RouteLayout />}>
          <Route path=":id" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
