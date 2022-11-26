import React from "react";
import { ChartComponent } from "../ChartComponent";
import { handleClick } from "../../helpers/tabs";

import { useContentTab } from "../../hooks/useContentTab";

import "./style.css";

export const Tabs = ({ weekForecast }) => {
  
  const { labels, wind, humidity, pressure } = useContentTab(weekForecast.list);

  return (
    <div className="container tabs">
      <div className="tabs_container">
        <button
          onClick={handleClick}
          className="tab active"
          data-target="#wind"
        >
          Wind
        </button>
        {/* <button onClick={handleClick} className="tab" data-target="#rain">
          Rain
        </button> */}
        <button onClick={handleClick} className="tab" data-target="#humidity">
          Humiduty
        </button>
        <button onClick={handleClick} className="tab" data-target="#pressure">
          Pressure
        </button>
      </div>

      <div className="contents_container">
        <div id="wind" className="tab_content active">
          <ChartComponent content={"Wind"} weekForecast={wind} labels={labels} />
        </div>
        {/* <div id="rain" className="tab_content">
          <ChartComponent content={"Rain"} weekForecast={weekForecast} labels={labels} />
        </div> */}
        <div id="humidity" className="tab_content">
          <ChartComponent content={"Humiduty"} weekForecast={humidity} labels={labels} />
        </div>
        <div id="pressure" className="tab_content">
          <ChartComponent content={"Pressure"} weekForecast={pressure} labels={labels} />
        </div>
      </div>
    </div>
  );
};
