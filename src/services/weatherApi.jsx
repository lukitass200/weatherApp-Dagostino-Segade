import axios from "axios";

const API_KEY = '837f64584880869b43ba98c4666877b0' ; // <-- coloca aquí tu API Key de OpenWeatherMap
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getCurrentWeather = async (city, unit = "metric") => {
  const res = await fetch(
    `${BASE_URL}/weather?q=${city}&units=${unit}&appid=${API_KEY}&lang=es`
  );
  if (!res.ok) throw new Error("Error fetching weather");
  return res.json();
};

export const getWeatherByCoords = async (lat, lon, unit = "metric") => {
  const res = await fetch(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}&lang=es`
  );
  if (!res.ok) throw new Error("Error fetching weather by coords");
  return res.json();
};

export const getHourlyForecast = async (city, unit = "metric") => {
  const res = await axios.get(`${BASE_URL}/forecast`, {
    params: { q: city, units: unit, appid: API_KEY },
  });
  return res.data;
};


