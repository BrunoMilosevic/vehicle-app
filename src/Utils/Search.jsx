import React from "react";
import searchIcon from "../Components/searchIcon.svg";
const Search = () => {
  return (
    <div className="search">
      <input
        placeholder="Search for vehicles"
        value="Mercedes"
        onChange={() => {}}
      />
      <img src={searchIcon} alt="Search button" onClick={() => {}} />
    </div>
  );
};

export default Search;
