import { useContext, useState } from "react";
import { WeatherContext } from "../../../context/weatherContext";
import "./searchBar.css"

const SearchBar = () => {
  const { setLastCity } = useContext(WeatherContext);
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      setLastCity(city);
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
