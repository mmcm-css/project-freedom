import React from "react";
import "./App.css";
import mmcm from "./assets/mmcm.png";

import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-4">
      <img src={mmcm} alt="Liberated Mapuan" className="h-64 invert" />
      <div className="mt-8 space-x-4 ">
        <button className="btn text-white bg-primary">Login</button>
        <Link to="/register" className="btn text-white bg-secondary">
          Register
        </Link>
      </div>
    </div>
  );
}

export default App;
