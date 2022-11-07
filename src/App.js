import { useEffect } from "react";
import "./App.css";
import { useFetchData } from "./hooks/useFetchData";

function App() {
  const { loading, location, weather } = useFetchData();

  useEffect(() => {
    console.log({
      loading,
      location,
      weather,
    });
  }, []);

  return <div className="App"></div>;
}

export default App;
