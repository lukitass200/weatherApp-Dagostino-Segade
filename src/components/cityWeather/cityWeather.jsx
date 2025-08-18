import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../context/weatherContext";
import { getCurrentWeather } from "../../services/weatherApi";
import "./cityWeather.css"

const CityWeather = ({ city }) => {
  const { unit } = useContext(WeatherContext);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getCurrentWeather(city, unit).then(setWeather);
  }, [city, unit]);

  if (!weather) return null;

  return (
    <div className="city-weather">
      <h4>{weather.name}</h4>
      <p>{Math.round(weather.main.temp)}°</p>
      <p>{weather.weather[0].main}</p>
    </div>
  );
};

export default CityWeather;
