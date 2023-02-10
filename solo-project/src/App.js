import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarWeather from "./components/NavbarWeather";
import FavouriteCities from "./components/FavouriteCities";
import SearchCity from "./components/SearchCity";
import WeatherInfo from "./components/WeatherInfo";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarWeather />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>LEATHER WEATHER</h1>
                <SearchCity />
                <h1>SEARCHED CITY</h1>
                <WeatherInfo />
              </>
            }
          />

          <Route path="/favourites" element={<FavouriteCities />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
