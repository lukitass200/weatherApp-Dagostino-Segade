import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { WeatherContext } from "../../context/weatherContext";
import { getHourlyForecast } from "../../services/weatherApi";
import { getWeatherIcon } from "../../utils/getWeatherIcon";
import viento from "../../assets/wind.png";
import "./infoWeather.css";

const InfoWeather = () => {
  const location = useLocation();
  const { unit } = useContext(WeatherContext);
  const cityFromState = location.state?.city || null;

  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!cityFromState) return;

    const fetchData = async () => {
      try {
        const data = await getHourlyForecast(cityFromState, unit);
        setWeatherData(data);
      } catch (err) {
        setError("No se pudo obtener la información del clima");
      }
    };

    fetchData();
  }, [cityFromState, unit]);

  if (error) return <p>{error}</p>;
  if (!weatherData) return <p>Cargando clima...</p>;

  const mainWeather = weatherData.list ? weatherData.list[0] : weatherData;
  const hours = weatherData.list ? weatherData.list.slice(0, 6) : [];

  return (
    <div className="info-weather">
      <div className="main-card">
        <div className="top-row">
          <h2 className="city">{cityFromState}</h2>
          <p>
            {new Date(mainWeather.dt * 1000).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>

        <div className="weather-info">
          <div className="weather-type">
            <h1 className="temp">
              {Math.round(mainWeather.main.temp)}°{unit === "metric" ? "C" : "F"}
            </h1>
            <div className="icon-wrapper">
              <img
                src={getWeatherIcon(mainWeather.weather[0].main)}
                alt={mainWeather.weather[0].main}
              />
            </div>
            <p>{mainWeather.weather[0].main}</p>
            <p className="feel-like">
              Feel like: {Math.round(mainWeather.main.feels_like)}°
              {unit === "metric" ? "C" : "F"}
            </p>
          </div>

          <div className="wind-info">
            <img src={viento} alt="Wind icon" className="wind-icon" />
            <p>
              {mainWeather.wind.speed} {unit === "metric" ? "m/s" : "mph"}
            </p>
          </div>
        </div>

        <p className="temp-range">
          {Math.round(mainWeather.main.temp_min)}° to {Math.round(mainWeather.main.temp_max)}°
        </p>
      </div>

      <div className="hours-container">
        {hours.map((h, idx) => (
          <div className="hour-card" key={idx}>
            <p>{new Date(h.dt * 1000).toLocaleTimeString([], { hour: "2-digit" })}</p>
            <img src={getWeatherIcon(h.weather[0].main)} alt={h.weather[0].main} />
            <p>{Math.round(h.main.temp)}°</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoWeather;
