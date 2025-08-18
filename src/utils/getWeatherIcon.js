import sunIcon from "../assets/sun.png";
import rainIcon from "../assets/rain.png";
import overcastIcon from "../assets/overcast.png";

export const getWeatherIcon = (weatherMain) => {
  switch (weatherMain) {
    case "Rain":
      return rainIcon;
    case "Clouds":
      return overcastIcon;
    case "Clear":
      return sunIcon;
    default:
      return overcastIcon; // fallback
  }
};
