import React from "react";

export default function DayData({ day, weatherData, fourDays }) {
  // if weather data is empty, show loading div
  const daysDataList = weatherData.list.slice(0, 4);

  if (Object.keys(weatherData).length === 0) {
    return <div>Loading...</div>;
  }

  const findIndex = () => {
    let curIndex = 0;
    for (let i = 0; i < fourDays.length; i++) {
      if (fourDays[i] === day) {
        curIndex = i;
      }
    }
    return curIndex;
  };

  let curIndex = findIndex();

  const currentDayData = daysDataList[curIndex];

  // console.log(currentDayData);
  // console.log(currentDayData.weather[0].icon);
  return (
    <div className="data-container">
      <div className="emo-temp-data-container">
        <div className="day-name-data-container">
          <div className="day-of-week-data">{day}</div>
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
