import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../context/weatherContext";
import { getHourlyForecast } from "../../services/weatherApi";
import './hourlyForecast.css';
import { getWeatherIcon } from "../../utils/getWeatherIcon";

const HourlyForecast = () => {
  const { unit, lastCity } = useContext(WeatherContext);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    getHourlyForecast(lastCity, unit).then((data) =>
      setForecast(data.list.slice(0, 8)) // primeras 8 → 24hs (3h intervalos)
    );
  }, [lastCity, unit]);

  return (
    <div className="hourly-forecast">
      {forecast.map((f, i) => {
        const icon = getWeatherIcon(f.weather[0].main);
        return (
          <div className="card1" key={i}>
            <p>{new Date(f.dt * 1000).getHours()}:00</p>
            <img src={icon} alt={f.weather[0].main} className="weather-icon" />
            <p>{Math.round(f.main.temp)}°</p>
          </div>
        );
      })}
    </div>
  );
};

export default HourlyForecast;
