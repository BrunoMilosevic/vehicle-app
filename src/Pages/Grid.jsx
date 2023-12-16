"use client";
import React from "react";

import Search from "../Utils/Search";
import CarMake from "../Components/CarMake";

const Grid = () => {
  return (
    <div className="container">
      <h1>Our Vehicles</h1>
      <Search />
      <div className="car-make-grid">
        <CarMake />
      </div>
    </div>
  );
};

export default Grid;
