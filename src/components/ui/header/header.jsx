import { Link } from "react-router-dom";
import SearchBar from "../searchBar/searchBar";
import ToggleUnit from "../toggleUnit/toggleUnit";
import ThemeSwitcher from "../themeSwitcher/themeSwitcher";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">WeatherApp</Link>
      </div>
      <div className="header-center">
        <SearchBar />
      </div>
      <div className="header-right">
        <ToggleUnit />
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
