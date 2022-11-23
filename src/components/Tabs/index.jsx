import React from "react";

import { handleClick } from "../../helpers/tabs";

import "./style.css";

export const Tabs = () => {
  
  return (
    <div className="container tabs">
      <div className="tabs_container">
        <button onClick={handleClick} className="tab active" data-target="#wind">
          Wind
        </button>
        <button onClick={handleClick} className="tab" data-target="#rain">
          Rain
        </button>
        <button onClick={handleClick} className="tab" data-target="#humidity">
          Humiduty
        </button>
        <button onClick={handleClick} className="tab" data-target="#pressure">
          Pressure
        </button>
      </div>

      <div className="contents_container">
        <div id="wind" className="tab_content active">
          Wind
        </div>
        <div id="rain" className="tab_content">
          Rain
        </div>
        <div id="humidity" className="tab_content">
          Humiduty
        </div>
        <div id="pressure" className="tab_content">
          Pressure
        </div>
      </div>
    </div>
  );
};
