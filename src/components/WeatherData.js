import React from "react";
import DayData from "./DayData";

export default function WeatherData({ fourDays, weatherData }) {
  console.log(weatherData);
  if (Object.keys(weatherData).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather-data-container">
      <div className="city-name-container">
        <div>
          <div>{weatherData.city.name}</div>
          <div className="weather-icon-container">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`}
            ></img>
          </div>
        </div>
      </div>

      <div className="day-data-component">
        {fourDays.map((day) => (
          <DayData
            day={day}
            key={day}
            weatherData={weatherData}
            fourDays={fourDays}
          />
        ))}
      </div>
    </div>
  );
}
