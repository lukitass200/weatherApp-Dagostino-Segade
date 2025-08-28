// weatherContext.js

import { createContext, useState, useEffect } from "react";
import { getWeatherByCoords } from "../services/weatherApi";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [unit, setUnit] = useState("metric");
  const [lastCity, setLastCity] = useState("Buenos Aires");
  const [coords, setCoords] = useState(null);

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "metric" ? "imperial" : "metric"));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setCoords({ latitude, longitude });
      },
      (err) => {
        console.error("No se pudo obtener ubicación:", err);
      }
    );
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        unit,
        setUnit,
        toggleUnit, // ✅ ahora está disponible para ToggleUnit
        lastCity,
        setLastCity,
        coords,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
