import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <main>
      <form>
        <input className="search-bar" type="text" placeholder="Search..." />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </form>
    </main>
  );
}
