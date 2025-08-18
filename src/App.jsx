import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/views/home";
import CityDetails from "../src/views/cityDetails";
import Favorites from "../src/views/favourites";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:name" element={<CityDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;

