import React from "react";

export default function DayData({
  dayName,
  dayIndex,
  weatherData,
  setCurrentDay,
}) {
  const handleClick = (e) => {
    e.preventDefault();
    setCurrentDay(dayIndex);
  };

  // if weather data is empty, show loading div
  const daysDataList = weatherData.list.slice(0, 4);

  if (Object.keys(weatherData).length === 0) {
    return <div>Loading...</div>;
  }

  const currentDayData = daysDataList[dayIndex];

  console.log(currentDayData);

  // console.log(currentDayData);
  // console.log(currentDayData.weather[0].icon);
  return (
    <div className="data-container" onClick={handleClick}>
      <div className="emo-temp-data-container">
        <div className="day-name-data-container">
          <div className="day-of-week-data">{dayName}</div>
        </div>
        <div className="emoji-data">
          {
            <img
              src={`https://openweathermap.org/img/wn/${currentDayData.weather[0].icon}@2x.png`}
            ></img>
          }
        </div>
        <div className="temperature-data">
          {`${Math.floor(currentDayData.main.temp)}\u00B0C`}
        </div>
      </div>
    </div>
  );
}
