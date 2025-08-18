import CurrentWeather from "../components/currentWeather/currentWeather";
import HourlyForecast from "../components/hourlyForecast/hourlyForecast";
import DailyForecast from "../components/dailyForecast/dailyForecast";

const CityDetails = () => {
  return (
    <div className="city-details">
      <CurrentWeather />
      <HourlyForecast />
      <DailyForecast />
    </div>
  );
};

export default CityDetails;
