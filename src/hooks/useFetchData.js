import { useEffect, useState } from "react";

import {
  GEO_LOCATION_URL,
  GEO_LOCATION_OPTIONS,
  WEATHER_API_KEY,
  WEATHER_BASE_URL,
} from "../Api";

export const useFetchData = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  const getData = async () => {
    try {
      // Get IP info
      const ipInfo = await fetch("https://ipv4.jsonip.com/")
        .then((response) => response.json())
        .then((data) => data);

      // Get location by IP
      const locationIp = await fetch(
        `${GEO_LOCATION_URL}?ip=${ipInfo.ip}`,
        GEO_LOCATION_OPTIONS
      )
        .then((response) => response.json())
        .then((data) => {
          setLocation(data);
          return data;
        });

      // Get weather by current location
      await fetch(
        `${WEATHER_BASE_URL}?lat=${locationIp.latitude}&lon=${locationIp.longitude}&appid=${WEATHER_API_KEY}`
      )
        .then((resp) => resp.json())
        .then((data) => {
          setWeather(data);
          return data;
        });

      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, location, weather };
};
