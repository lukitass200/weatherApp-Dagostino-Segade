import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../context/weatherContext";
import { getHourlyForecast } from "../../services/weatherApi";
import "./dailyForecast.css";
import { getWeatherIcon } from "../../utils/getWeatherIcon.js";

const DailyForecast = () => {
  const { unit, lastCity } = useContext(WeatherContext);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    getHourlyForecast(lastCity, unit).then((data) => {
      const grouped = {};
      data.list.forEach((f) => {
        const day = new Date(f.dt * 1000).toLocaleDateString("en-GB", {
          weekday: "short",
        });
        if (!grouped[day]) grouped[day] = [];
        grouped[day].push(f);
      });

      const result = Object.keys(grouped).slice(0, 5).map((day) => {
        const temps = grouped[day].map((f) => f.main.temp);
        const min = Math.min(...temps);
        const max = Math.max(...temps);
        const weather = grouped[day][0].weather[0].main;
        return { day, min, max, weather };
      });

      setForecast(result);
    });
  }, [lastCity, unit]);

  return (
    <div className="forFlex">
      <div className="daily-forecast">
        <h3>5-day forecast</h3>
        {forecast.map((f, i) => {
          const icon = getWeatherIcon(f.weather);
          return (
            <div key={i} className="daily-item">
              <p>{f.day}</p>
              <img src={icon} alt={f.weather} className="weather-icon" />
              <p>{Math.round(f.min)}° / {Math.round(f.max)}°</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyForecast;
