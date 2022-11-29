import { useState, useEffect } from "react";

export const useContentTab = (list) => {
    const [labels, setLabels] = useState(null);
    const [clouds, setClouds] = useState(null);
    const [wind, setWind] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [pressure, setPressure] = useState(null);

    useEffect(() => {
        setLabels(list.map(data => new Date(data.dt_txt).toLocaleDateString('es-ve', { day:"numeric", month:"short" })));
        setClouds(list.map(data => data.clouds.all));
        setWind(list.map(data => Math.round(data.wind.speed)));
        setHumidity(list.map(data => Math.round(data.main.humidity)));
        setPressure(list.map(data => Math.round(data.main.pressure)));
    }, [])

    return { labels, wind, humidity, pressure, clouds };
};
