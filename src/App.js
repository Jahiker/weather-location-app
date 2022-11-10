import "./App.css";

import { useFetchData } from "./hooks/useFetchData";

import { CurrentWeather } from "./CurrentWeather";

function App() {
  const { loading, location, weather } = useFetchData();

  return (
    <div className="App">
      { loading && <h1>Loading...</h1> }
      { !loading && <CurrentWeather location={location} weather={weather} /> }
    </div>
  );
}

export default App;
