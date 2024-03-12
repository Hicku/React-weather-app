import React, { useState } from "react";
import DayData from "./DayData";

export default function WeatherData({
  fourDays,
  weatherData,
  currentDay,
  setCurrentDay,
}) {
  if (Object.keys(weatherData).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather-data-container">
      <div className="city-name-container">
        <div>
          <div className="city-name">{weatherData.city.name}</div>
          <div className="weather-icon-container">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.list[currentDay].weather[0].icon}@2x.png`}
            ></img>
          </div>
          <div className="current-day-temp">
            <div>{`${Math.round(
              Math.floor(weatherData.list[currentDay].main.temp)
            )}\u00B0C`}</div>
          </div>
        </div>
      </div>

      <div className="day-data-component">
        {fourDays.map((day, index) => (
          <DayData
            dayIndex={index}
            dayName={day}
            key={day}
            weatherData={weatherData}
            fourDays={fourDays}
            currentDay={currentDay}
            setCurrentDay={setCurrentDay}
          />
        ))}
      </div>
    </div>
  );
}
