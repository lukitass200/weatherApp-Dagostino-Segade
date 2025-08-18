import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../context/weatherContext";
import { getCurrentWeather } from "../../services/weatherApi";
import "./CurrentWeather.css"

const CurrentWeather = () => {
  const { unit, lastCity } = useContext(WeatherContext);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getCurrentWeather(lastCity, unit).then(setWeather);
  }, [lastCity, unit]);

  if (!weather) return <p>Loading...</p>;

  return (
    <div className="current-weather">
      <h2>{weather.name}</h2>
      <p>{Math.round(weather.main.temp)}°{unit === "metric" ? "C" : "F"}</p>
      <p>{weather.weather[0].description}</p>
      <p>Wind: {weather.wind.speed} {unit === "metric" ? "m/s" : "mph"}</p>
    </div>
  );
};

export default CurrentWeather;
