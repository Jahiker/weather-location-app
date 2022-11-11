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

  useEffect(() => {
    const getData = async () => {
      try {
        // Get IP info
        const ipInfo = await fetch("https://ipv4.jsonip.com/")
          .then((response) => response.json())
          .then((data) => data);

        // Get location by IP
        const locationIp = await fetch(`${GEO_LOCATION_URL}?ip=${ipInfo.ip}`, GEO_LOCATION_OPTIONS)
          .then((response) => response.json())
          .then((data) => {
            setLocation(data);
            return data;
          });

        // Get weather by current location
        await fetch(
          `${WEATHER_BASE_URL}?lat=${locationIp.location.latitude}&lon=${locationIp.location.longitude}&appid=${WEATHER_API_KEY}&units=metric`
        )
          .then((resp) => resp.json())
          .then((data) => {
            setWeather(data);
          });

        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return { loading, location, weather };
};
