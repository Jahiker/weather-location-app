import React from "react";

import "./style.css"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Forecast = ({ weekForecast }) => {
  // console.log({ weekForecast: weekForecast.list });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 330,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <div className="container forecast_week">
      <Slider {...settings}>
        {weekForecast.list.map((dayWeather) => {

          const itemContentStyles = {
            backgroundImage: `url(backgrounds/${dayWeather.weather[0].icon}.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }

          return (
            <div className="forecast-item" key={`forecast-${dayWeather.dt}`}>
              <div className={`item-content`} style={itemContentStyles}>
                <p className="date">{dayWeather.dt_txt}</p>
                <div className="figure">
                  <img
                    src={`icons/${dayWeather.weather[0].icon}.png`}
                    alt={dayWeather.weather[0].description}
                  />
                </div>
                <p className="temp">{Math.round(dayWeather.main.temp)}ºC</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
