import React from "react";

export default function DayData({ day, weatherData, fourDays }) {
  if (Object.keys(weatherData).length === 0) {
    return <div>Loading...</div>;
  }

  console.log(day);

  return (
    <div className="data-container">
      <div className="day-name-data-container">
        <div className="day-of-week-data">{day}</div>
      </div>
      <div className="emo-temp-data-container">
        <div className="emoji-data">&#x1F31E; </div>
        <div className="temperature-data">22</div>
      </div>
    </div>
  );
}
