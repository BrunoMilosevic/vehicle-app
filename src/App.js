"use client";
import React from "react";
import { useEffect, useState } from "react";
import fetchVehicleMake from "./Utils/FetchVehicleMake";
import Grid from "./Pages/Grid";

import "./App.css";

const App = () => {
  const [vehicleMakeData, setVehicleMakeData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchVehicleMake();
      setVehicleMakeData(data);
    }
    fetchData();
  });
  return (
    <div className="app">
      
      <Grid />
    </div>
  );
};

export default App;
