import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../context/weatherContext";
import { getCurrentWeather } from "../../services/weatherApi";
import "./CurrentWeather.css"
import { getWeatherIcon } from "../../utils/getWeatherIcon.js"; // mover helper aquí

const CurrentWeather = () => {
  const { unit, lastCity } = useContext(WeatherContext);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getCurrentWeather(lastCity, unit).then(setWeather);
  }, [lastCity, unit]);

  if (!weather) return <p>Loading...</p>;

  const icon = getWeatherIcon(weather.weather[0].main);

  return (
    <div className="current-weather">
      <div className="card">
        <h2>{weather.name}</h2>
        <img src={icon} alt={weather.weather[0].main} className="weather-icon" />
        <p>{Math.round(weather.main.temp)}°{unit === "metric" ? "C" : "F"}</p>
        <p>{weather.weather[0].description}</p>
        <p>Wind: {weather.wind.speed} {unit === "metric" ? "m/s" : "mph"}</p>
      </div>
    </div>
  );
};

export default CurrentWeather;

