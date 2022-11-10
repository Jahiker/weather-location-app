import React from 'react'

export const CurrentWeather = ({ location, weather }) => {
  console.log({
    location,
    weather
  });

  return (
    <div className='current_weather'>
      <div className="current_weather_header">

        <div className="icon">
          <img src={`icons/${weather.weather[0].icon}.png` } alt={weather.weather.main} />
        </div>

        <h2>{ weather.main.temp }ºC</h2>
        <span>Sensación térmica: { Math.round(weather.main.feels_like) }ºC</span>
        <h1>{ `${location.city} - ${location.country}` }</h1>
      </div>
    
    </div>
  )
}
