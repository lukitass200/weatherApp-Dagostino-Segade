import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../context/weatherContext";
import { getHourlyForecast } from "../../services/weatherApi";
import { getWeatherIcon } from "../../utils/getWeatherIcon";
import './hourlyForecast.css';

const HourlyForecast = () => {
  const { unit, lastCity } = useContext(WeatherContext);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    getHourlyForecast(lastCity, unit).then((data) => {
      setForecast(data.list.slice(0, 8));
      console.log(forecast)
      
    });
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
