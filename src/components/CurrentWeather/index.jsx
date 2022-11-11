import React from "react";

import "./style.css";

export const CurrentWeather = ({ location, weather }) => {
  console.log({
    location,
    weather
  })
  return (
    <div className={`current_weather container ${weather.weather[0].icon}`}>
      <div className="current_weather_header">
        <h1 className="title">Weather Forecast</h1>
        <div className="icon">
          <img
            src={`icons/${weather.weather[0].icon}.png`}
            alt={weather.weather.main}
          />
        </div>
        <h2 className="temp">{Math.round(weather.main.temp)}ºC</h2>
        <span className="feels_like">
          Sensación térmica: {Math.round(weather.main.feels_like)}ºC
        </span>
        <h3 className="location">{`${location.city.region_name} - ${location.country.country_code}`}</h3>
      </div>
    </div>
  );
};
