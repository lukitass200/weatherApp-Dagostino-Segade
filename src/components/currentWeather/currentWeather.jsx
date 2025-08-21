import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../context/weatherContext";
import { getCurrentWeather, getWeatherByCoords, getHourlyForecast } from "../../services/weatherApi";
import "./CurrentWeather.css";
import { getWeatherIcon } from "../../utils/getWeatherIcon.js";
import { useNavigate } from "react-router-dom";

const CurrentWeather = () => {
  const { unit, lastCity, setLastCity } = useContext(WeatherContext);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          try {
            const { latitude, longitude } = pos.coords;
            const data = await getWeatherByCoords(latitude, longitude, unit);
            setWeather(data);
            setLastCity(data.name);
          } catch (err) {
            fallbackToLastCity();
          }
        },
        () => fallbackToLastCity()
      );
    } else {
      fallbackToLastCity();
    }

    const fallbackToLastCity = async () => {
      try {
        const data = await getCurrentWeather(lastCity, unit);
        setWeather(data);
      } catch (err) {
        setError("No se pudo obtener el clima 😢");
      }
    };
  }, [unit]);

  if (error) return <p>{error}</p>;
  if (!weather) return <p>Loading...</p>;

  const icon = getWeatherIcon(weather.weather[0].main);

  const handleClick = async () => {
    try {
      // 🚀 Pedimos también el forecast por horas de la ciudad actual
      const forecast = await getHourlyForecast(weather.name, unit);
      navigate("/infoWeather", { state: { city: weather.name, weatherData: forecast } });
    } catch (err) {
      console.error("Error obteniendo forecast por horas:", err);
      navigate("/infoWeather", { state: { city: weather.name, weatherData: { list: [] } } });
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
