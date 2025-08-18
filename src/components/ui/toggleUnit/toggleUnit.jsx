import { useContext } from "react";
import { WeatherContext } from "../../../context/weatherContext";
import "./toggleUnit.css"

const ToggleUnit = () => {
  const { unit, toggleUnit } = useContext(WeatherContext);

  return (
    <button onClick={toggleUnit} className="toggle-unit">
      {unit === "metric" ? "Switch to °F" : "Switch to °C"}
    </button>
  );
};

export default ToggleUnit;
