import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import WeatherData from "./components/WeatherData";

function App() {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
  ];

  const curDay = new Date();
  const curDayIndex = curDay.getDay() - 1;
  let fourDays = daysOfWeek.slice(curDayIndex, curDayIndex + 4);

  console.log(fourDays);

  return (
    <div className="App">
      <div className="search-container">
        <Search />
      </div>
      <div className="weather-data-component">
        <WeatherData fourDays={fourDays} />
      </div>
    </div>
  );
}

export default App;
