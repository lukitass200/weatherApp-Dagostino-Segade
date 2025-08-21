
import { useContext } from "react";
import { WeatherContext } from "../../../context/weatherContext";
import './themeSwitcher.css'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(WeatherContext);

  return (
    <button onClick={toggleTheme} className="theme-switcher">
      {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default ThemeSwitcher;
