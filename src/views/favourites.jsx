import CityWeather from "../components/cityWeather/cityWeather";

const Favorites = () => {
  const cities = ["New York", "Copenhagen", "Ho Chi Minh City"];

  return (
    <div className="favorites">
      <h2>Favorite Cities</h2>
      {cities.map((city) => (
        <CityWeather key={city} city={city} />
      ))}
    </div>
  );
};

export default Favorites;
