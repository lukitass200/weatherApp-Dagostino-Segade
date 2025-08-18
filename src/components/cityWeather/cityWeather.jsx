import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../context/weatherContext";
import { getCurrentWeather } from "../../services/weatherApi";
import "./cityWeather.css";
import { getWeatherIcon } from "../../utils/getWeatherIcon";

const CityWeather = ({ city }) => {
  const { unit } = useContext(WeatherContext);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getCurrentWeather(city, unit).then(setWeather);
  }, [city, unit]);

  if (!weather) return null;

  const icon = getWeatherIcon(weather.weather[0].main);

  return (
    <div className="city-weather">
      <h4>{weather.name}</h4>
      <img src={icon} alt={weather.weather[0].main} className="weather-icon" />
      <p>{Math.round(weather.main.temp)}°{unit === "metric" ? "C" : "F"}</p>
    </div>
  );
};

export default CityWeather;
