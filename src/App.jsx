import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/ui/header/header";
import Home from "../src/views/home";
import CityDetails from "../src/views/cityDetails";
import Favorites from "../src/components/favourites/favourites"
import InfoWeather from "./components/infoWeather/infoWeather";

function App() {
  return (
    <Router>
      <div className="headline">
      <Header/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:name" element={<CityDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path = "/infoWeather" element ={<InfoWeather/>}/>
      </Routes>
    </Router>
  );
}

export default App;

