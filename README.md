src/
 ├─ views/
 │   ├─ Home.jsx              # Vista principal con el clima actual, hourly y daily
 │   ├─ CityDetails.jsx       # Vista con info más completa de una ciudad
 │   └─ Favorites.jsx         # (Opcional) Ciudades guardadas
 │
 ├─ components/
 │   ├─ weather/
 │   │   ├─ CurrentWeather.jsx
 │   │   ├─ HourlyForecast.jsx
 │   │   ├─ DailyForecast.jsx
 │   │   └─ CityWeather.jsx
 │   │
 │   ├─ ui/
 │   │   ├─ SearchBar.jsx
 │   │   ├─ ToggleUnit.jsx
 │   │   └─ ThemeSwitcher.jsx
 │
 ├─ context/
 │   └─ WeatherContext.jsx
 │
 ├─ services/
 │   └─ weatherApi.js
 │
 ├─ App.jsx
 ├─ index.js
 ├─ App.css