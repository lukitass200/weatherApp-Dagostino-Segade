import axios from "axios";

const API_KEY = '837f64584880869b43ba98c4666877b0' ; // <-- coloca aquí tu API Key de OpenWeatherMap
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getCurrentWeather = async (city, unit = "metric") => {
  const res = await axios.get(`${BASE_URL}/weather`, {
    params: { q: city, units: unit, appid: API_KEY },
  });
  return res.data;
};

export const getHourlyForecast = async (city, unit = "metric") => {
  const res = await axios.get(`${BASE_URL}/forecast`, {
    params: { q: city, units: unit, appid: API_KEY },
  });
  return res.data;
};
