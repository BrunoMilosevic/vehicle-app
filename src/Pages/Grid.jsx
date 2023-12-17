"use client";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Search from "../Utils/Search";
import CarMake from "../Components/CarMake";
import CarModel from "../Components/CarModel";

const Grid = () => {
  return (
    <div className="container">
      <h1>Our Vehicles</h1>
      <Search />
      <Router>
        <Routes>
          <Route exact path="/models/makeId" component={CarModel} />
          <Route exact path="/" />
        </Routes>
      </Router>
      <div className="car-make-grid">
        <CarMake />
      </div>
    </div>
  );
};

export default Grid;
