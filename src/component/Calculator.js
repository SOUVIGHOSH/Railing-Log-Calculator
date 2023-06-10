import React, { useState } from "react";
import RailingCalculator from "./RailingCalculator";
import LogCalculator from "./LogCalculator";
const Calculator = () => {
  const [activeTab, setActiveTab] = useState("railing");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <h1 className="mt-3">Railing and Log Calculator</h1>
      <ul className="nav nav-tabs mt-3">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "railing" ? "active" : ""}`}
            onClick={() => handleTabChange("railing")}
          >
            Railing Calculator
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "log" ? "active" : ""}`}
            onClick={() => handleTabChange("log")}
          >
            Log Calculator
          </button>
        </li>
      </ul>
      <div className="tab-content mt-3">
        <div
          className={`tab-pane fade ${
            activeTab === "railing" ? "show active" : ""
          }`}
        >
          <RailingCalculator />
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "log" ? "show active" : ""
          }`}
        >
          <LogCalculator />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
