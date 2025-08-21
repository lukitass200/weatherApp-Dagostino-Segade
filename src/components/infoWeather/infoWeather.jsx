import { useLocation } from "react-router-dom";
import { getWeatherIcon } from "../../utils/getWeatherIcon";
import "./infoWeather.css";

const InfoWeather = () => {
  const location = useLocation();
  const { city, weatherData } = location.state || {};

  if (!weatherData) return <p>No se encontró información del clima</p>;

  // Extraer clima principal
  const mainWeather = weatherData.list ? weatherData.list[0] : weatherData;
  const hours = weatherData.list ? weatherData.list.slice(0, 6) : []; // 6 horas próximas

  return (
    <div className="info-weather">
      {/* Card principal */}
      <div className="main-card">
        <h2>{city || weatherData.name}</h2>
        <p>{new Date(mainWeather.dt * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
        <img src={getWeatherIcon(mainWeather.weather[0].main)} alt={mainWeather.weather[0].main} />
        <h1>{Math.round(mainWeather.main.temp)}°</h1>
        <p>{mainWeather.weather[0].description}</p>
        <p>Feel like: {Math.round(mainWeather.main.feels_like)}°</p>
        <p>Wind: {mainWeather.wind.speed} m/s</p>
        <p>Min: {Math.round(mainWeather.main.temp_min)}° → Max: {Math.round(mainWeather.main.temp_max)}°</p>
      </div>

      {/* Cards de horas */}
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