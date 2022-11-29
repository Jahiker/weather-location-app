import React from "react";
import { ChartComponent } from "../ChartComponent";
import { handleClick } from "../../helpers/tabs";

import { useContentTab } from "../../hooks/useContentTab";

import "./style.css";

export const Tabs = ({ weekForecast }) => {
  const { labels, clouds, wind, humidity, pressure } = useContentTab(
    weekForecast.list
  );

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
        <button onClick={handleClick} className="tab" data-target="#clouds">
          Clouds
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
          <ChartComponent
            content={"Wind"}
            weekForecast={wind}
            labels={labels}
            unit={"Wind m/s"}
          />
        </div>
        <div id="clouds" className="tab_content">
          <ChartComponent
            content={"Clouds"}
            weekForecast={clouds}
            labels={labels}
            unit={"Clouds %"}
          />
        </div>
        <div id="humidity" className="tab_content">
          <ChartComponent
            content={"Humiduty"}
            weekForecast={humidity}
            labels={labels}
            unit={"Humidity %"}
          />
        </div>
        <div id="pressure" className="tab_content">
          <ChartComponent
            content={"Pressure"}
            weekForecast={pressure}
            labels={labels}
            unit={"Pressure hPa"}
          />
        </div>
      </div>
    </div>
  );
};
