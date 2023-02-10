import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarWeather from "./components/NavbarWeather";
import FavouriteCities from "./components/FavouriteCities";
import SearchCity from "./components/SearchCity";
import WeatherInfo from "./components/WeatherInfo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import background from "./assets/empty-grass-field.jpeg";

function App() {
  return (
    <BrowserRouter>
      <div
        className="App"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: 2500,
          width: 1500,
        }}
      >
        <div>
          <NavbarWeather />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h1>LEATHER WEATHER</h1>
                  <SearchCity />
                  <h1>Searching... || Here's your city...</h1>
                  <WeatherInfo />
                </>
              }
            />

            <Route path="/favourites" element={<FavouriteCities />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
