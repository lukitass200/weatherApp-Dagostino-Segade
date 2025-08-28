import CurrentWeather from "../components/currentWeather/currentWeather.jsx";
import HourlyForecast from "../components/hourlyForecast/hourlyForecast.jsx";
import DailyForecast from "../components/dailyForecast/dailyForecast";
import Favorites from "../components/favourites/favourites.jsx";
import SearchBar from "../components/ui/searchBar/searchBar.jsx";
import ToggleUnit from "../components/ui/toggleUnit/toggleUnit";
import './home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="weather-container">
        <CurrentWeather />
        <HourlyForecast />
      </div>
      <div className="weather-container">
      <Favorites/>
      <DailyForecast />
      </div>
    </div>
  );
};

export default Home;