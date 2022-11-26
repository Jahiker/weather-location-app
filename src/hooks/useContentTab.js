import { useState, useEffect } from "react";

export const useContentTab = (list) => {
    const [labels, setLabels] = useState();
    const [wind, setWind] = useState();
    const [humidity, setHumidity] = useState();
    const [pressure, setPressure] = useState();

    useEffect(() => {
        setLabels(list.map(data => new Date(data.dt_txt).toLocaleDateString('es-ve', { day:"numeric", month:"short" })));
        setWind(list.map(data => Math.round(data.wind.speed)));
        setHumidity(list.map(data => Math.round(data.main.humidity)));
        setPressure(list.map(data => Math.round(data.main.pressure)));
    }, [])

    return { labels, wind, humidity, pressure };
};
