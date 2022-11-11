import "./App.css";

import { useFetchData } from "./hooks/useFetchData";

import { CurrentWeather } from "./components/CurrentWeather";
import { Forecast } from "./components/Forecast";

function App() {
  const { loading, location, weather } = useFetchData();

  return (
    <div className="App">
      { 
        loading 
          ? <h1>Loading...</h1> 
          : (
              <>
                <CurrentWeather location={location} weather={weather} />
                <Forecast />
              </>
            ) 
      }
    </div>
  );
}

export default App;
