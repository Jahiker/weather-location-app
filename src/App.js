import { useFetchData } from "./hooks/useFetchData";

import { CurrentWeather } from "./components/CurrentWeather";
import { Forecast } from "./components/Forecast";
import { Spinner } from "./components/Spinner";

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
              </>
            ) 
      }
    </div>
  );
}

export default App;
