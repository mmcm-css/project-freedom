import React from "react";
import "./App.css";
import mmcm from "./assets/mmcm.png";

import { Link } from "react-router-dom";

function App() {
  return (
    // Temporary bg color
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-neutral-focus"> 
      <img src={mmcm} alt="Project Freedom" className="h-64" />
      <div className="mt-8 space-x-4 ">
        <Link to="/login">
          <button className="text-white btn bg-primary">Login</button>
        </Link>
        <Link to="/register">
          <button className="text-white btn bg-secondary">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
