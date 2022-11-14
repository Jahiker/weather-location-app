import "./App.css";

import { useFetchData } from "./hooks/useFetchData";

import { CurrentWeather } from "./components/CurrentWeather";
import { Forecast } from "./components/Forecast";

function App() {
  const { loading, location, weather, weekForecast } = useFetchData();

  return (
    <div className="App">
      { 
        loading 
          ? <h1>Loading...</h1> 
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
