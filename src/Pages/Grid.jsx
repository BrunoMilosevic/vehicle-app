"use client";
import React from "react";
import { useEffect, useState } from "react";
import fetchVehicleMake from "../Utils/FetchVehicleMake";
import Search from "../Utils/Search";

const Grid = () => {
  const [vehicleMakeData, setVehicleMakeData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchVehicleMake();
      setVehicleMakeData(data);
    }
    fetchData();
  });
  return (
    <div className="container">
      <h1>Our Vehicles</h1>
      <Search />
      <p>
        {vehicleMakeData.map(
          (data) => `Name: ${data.Name} Abrv: ${data.Abrv} `
        )}
      </p>
    </div>
  );
};

export default Grid;
