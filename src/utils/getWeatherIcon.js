import sunIcon from "../assets/sun.png";
import rainIcon from "../assets/rain.png";
import overcastIcon from "../assets/overcast.png";
import tormentaArena from "../assets/tormenta-de-Arena.png";
import tornado from "../assets/tornado.png";
import trueno from "../assets/trueno.png";
import viento from "../assets/wind.png";
import nieve from "../assets/nieve.png";

export const getWeatherIcon = (weatherMain) => {
  switch (weatherMain) {
    case "Rain":
      return rainIcon;
    case "Clouds":
      return overcastIcon;
    case "Clear":
      return sunIcon;
    case "Sand":
      return tormentaArena;
    case "Snow":
      return nieve;
    case "Tornado":
      return tornado;
    case "Thunderstorm":
      return trueno;
    case "Wind":
      return viento;
    default:
      return overcastIcon; // fallback si no se reconoce el clima
  }
};
