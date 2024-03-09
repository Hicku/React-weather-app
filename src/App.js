import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";
import WeatherData from "./components/WeatherData";

function App() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [weatherData, setWeatherData] = useState({});

  const apiKey = "c02a4b3f35a12461ae6bd39c333189a1";

  // Function to fetch weather data from api
  const getWeatherData = async (latitude, longitude) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
      );

      if (!res.ok) {
        throw new Error("Weather request failed");
      }

      const data = await res.json();
      setWeatherData(data);
    } catch (err) {
      console.error("Error fetching weather data:", err.message);
    }
  };

  useEffect(() => {
    // Get location using web geolocation
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }

    //callback fuction to set latitude and longitude states
    function showPosition(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      if (!latitude || !longitude) {
        return;
      } else {
        setLatitude(latitude);
        setLongitude(longitude);

        getWeatherData(latitude, longitude);
      }
    }

    function showError(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.log("User denied the request for Geolocation.");
          break;
        case error.POSITION_UNAVAILABLE:
          console.log("Location information is unavailable.");
          break;
        case error.TIMEOUT:
          console.log("The request to get user location timed out.");
          break;
        case error.UNKNOWN_ERROR:
          console.log("An unknown error occurred.");
          break;
      }
    }
    getLocation();
  }, []);

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
  const fourDays = daysOfWeek.slice(curDayIndex, curDayIndex + 4);

  return (
    <div className="App">
      <div className="search-container">
        <Search />
      </div>
      <div className="weather-data-component">
        <WeatherData fourDays={fourDays} weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
