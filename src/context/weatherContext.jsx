import { createContext, useState, useEffect } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [unit, setUnit] = useState("metric"); // metric = °C, imperial = °F
  const [lastCity, setLastCity] = useState("Helsinki");
  const [theme, setTheme] = useState("dark"); // opcional

  const toggleUnit = () => {
    setUnit((prev) => (prev === "metric" ? "imperial" : "metric"));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <WeatherContext.Provider
      value={{ unit, toggleUnit, lastCity, setLastCity, theme, toggleTheme }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
