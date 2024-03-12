import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search({
  searchCity,
  setSearchCity,
  onGetWeatherData,
  setCurrentDay,
}) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await getCityCoordinates(searchCity);
      if (!getCityCoordinates.ok) {
      }
      setCurrentDay(0);
    } catch (error) {
      console.error("Error", error.message);
    }
  };

  const getCityCoordinates = async (cityName) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${cityName}`
      );
      if (!res.ok) {
        throw new Error("Couldn't fetch coordinates");
      }
      const data = await res.json();

      if (data.length > 0) {
        const city = data[0];
        const coord = { latitude: city.lat, longitude: city.lon };

        onGetWeatherData(coord.latitude, coord.longitude);
        setSearchCity("");
      } else {
        throw new Error("City not found");
      }
    } catch (error) {
      console.error("Error", error.maessage);
      return null;
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div
          className="search-bar"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <input
            type="text"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className={isHover ? "search-icon2" : "search-icon"}
          />
        </div>
      </form>
    </main>
  );
}
