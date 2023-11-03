import { useState } from "react";
import "./App.css";
import notFoundImg from "./images/no-results.png";

const App = () => {
  const api = {
    key: "9cff2f128262499f550e23c3040e632b",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});
  function searchPress() {
    fetch(`${api.base}/weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }
  return (
    <div className="container">
      <div className="card">
        <div className="search">
          <input
            placeholder="Start Search"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button onClick={searchPress}>Search</button>
        </div>

        <div className="main-content">
          {typeof data.main !== "undefined" ? (
            <div>
              {Math.floor(data.main.temp) < 30 ? (
                <i className="fa-solid fa-cloud"></i>
              ) : (
                <i className="fa-solid fa-sun"></i>
              )}
              <h1 className="temp">{Math.floor(data.main.temp)}°C</h1>
              <div className="extras">
                <p>Feels Like {Math?.floor?.(data?.main.feels_like)}°C </p>
                <p>Humidity {data.main.humidity} g/kg</p>
              </div>{" "}
              <p className="place">{data.name}</p>
            </div>
          ) : (
            <img className="notFoundImg" src={notFoundImg}></img>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
