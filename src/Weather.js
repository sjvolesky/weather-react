import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Denver, Colorado",
    date: "Tuesday 10:00",
    description: "Partly Cloudy",
    imgUrl: "https://openweathermap.org/img/wn/10d@2x.png",
    humidity: "80",
    precipitation: "50",
    wind: "20",
  };
  return (
    <div className="Weather">
      <div className="card border-primary mb-3" width="12rem">
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-6">
                <div className="citysearch">
                  <input
                    type="text"
                    placeholder="Search for city.."
                    class="form-control"
                  />
                </div>
              </div>
              <div className="col-3">
                <button type="submit" class="btn btn-primary">
                  Search
                </button>
              </div>
              <div className="col-3">
                <button type="button" class="btn btn-success">
                  Current
                </button>
              </div>
            </div>
          </form>
          <h1>{weatherData.city}</h1>
          <ul className="current">
            <li>Last updated: {weatherData.date}</li>
            <li>{weatherData.description}</li>
          </ul>
          <div className="row">
            <div className="col-4">
              <div className="d-flex weather-temperature">
                <img src={weatherData.imgUrl} alt={weatherData.description} />
              </div>
            </div>
            <div className="col-4">
              <span className="temperature"></span>
              <span className="units">
                <a href="/">°C</a>
              </span>
              |
              <span className="fahrenheit">
                <a href="/">°F</a>
              </span>
            </div>
            <div className="col-4">
              <ul className="type">
                <li>Percipitation: {weatherData.precipitation}%</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>wind: {weatherData.wind}mp/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p>
        <a
          href="https://github.com/sjvolesky/weather-react.git"
          target="_blank"
          rel="noreferrer"
        >
          Open source code
        </a>
        , by Samantha Volesky
      </p>
    </div>
  );
}
