import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../context/weatherContext";
import { getWeatherByCoords, getHourlyForecast } from "../../services/weatherApi";
import { getWeatherIcon } from "../../utils/getWeatherIcon";
import { useNavigate } from "react-router-dom";
import "./CurrentWeather.css";

const CurrentWeather = () => {
  const { unit, coords, setLastCity } = useContext(WeatherContext);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        if (coords) {
          const data = await getWeatherByCoords(coords.latitude, coords.longitude, unit);
          setWeather(data);
          setLastCity(data.name);
        }
      } catch (err) {
        setError("No se pudo obtener el clima 😢");
      }
    };
    fetchWeather();
  }, [coords, unit]);

  if (error) return <p>{error}</p>;
  if (!weather) return <p>Loading...</p>;

  const icon = getWeatherIcon(weather.weather[0].main);

  const handleClick = async () => {
    try {
      const forecast = await getHourlyForecast(weather.name, unit);
      navigate("/infoWeather", {
        state: { city: weather.name, weatherData: forecast }
      });
    } catch (err) {
      console.error("Error obteniendo forecast por horas:", err);
    }
  };

  return (
    <div className="current-weather">
      <div className="card" onClick={handleClick} style={{ cursor: "pointer" }}>
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
