import React from "react";
import DayData from "./DayData";

export default function WeatherData({ fourDays, weatherData }) {
  if (Object.keys(weatherData).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather-data-container">
      <div className="city-name-container">
        <div>{weatherData.city.name}</div>
      </div>

      <div className="day-data-component">
        {fourDays.map((day) => (
          <DayData day={day} key={day} weatherData={weatherData} />
        ))}
      </div>
    </div>
  );
}
