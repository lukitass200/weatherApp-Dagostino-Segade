import CurrentWeather from "../components/currentWeather/currentWeather.jsx";
import HourlyForecast from "../components/hourlyForecast/hourlyForecast.jsx";
import DailyForecast from "../components/dailyForecast/dailyForecast";
import SearchBar from "../components/ui/searchBar/searchBar.jsx";
import ToggleUnit from "../components/ui/toggleUnit/toggleUnit";

const Home = () => {
  return (
    <div className="home">
      <header>
        <h1>Weather App</h1>
        <ToggleUnit />
      </header>

      <SearchBar />
      <CurrentWeather />
      <HourlyForecast />
      <DailyForecast />
    </div>
  );
};

export default Home;