import React from "react";
import DayData from "./DayData";

export default function WeatherData({ fourDays }) {
  return (
    <div className="weather-data-container">
      <div className="city-name-container">
        <div>Am weather</div>
      </div>

      <div className="day-data-component">
        {fourDays.map((day) => (
          <DayData day={day} key={Date.now()} />
        ))}
      </div>
    </div>
  );
}
