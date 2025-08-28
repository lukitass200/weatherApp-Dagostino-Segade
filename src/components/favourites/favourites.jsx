import CityWeather from "../cityWeather/cityWeather";
import '../favourites/favourites.css'

const Favorites = () => {
  const cities = ["New York", "Copenhagen", "Ho Chi Minh City"];

  return (
    <div className="favorites">
      <h2 className="titleF">Favorites</h2>
      {cities.map((city) => (
        <CityWeather key={city} city={city} />
      ))}
    </div>
  );
};

export default Favorites;
