import { useFetchData } from "./hooks/useFetchData";

import { CurrentWeather } from "./components/CurrentWeather";
import { Forecast } from "./components/Forecast";
import { Tabs } from "./components/Tabs";
import { Spinner } from "./components/Spinner";
import { Map } from "./components/Map";

function App() {
  const { loading, location, weather, weekForecast } = useFetchData();

  return (
    <div className="App">
      { 
        loading 
          ? <Spinner /> 
          : (
              <>
                <CurrentWeather location={location} weather={weather} />
                <Forecast weekForecast={weekForecast} />
                <Tabs weekForecast={weekForecast} />
                <Map location={location} />
              </>
            ) 
      }
    </div>
  );
}

export default App;
