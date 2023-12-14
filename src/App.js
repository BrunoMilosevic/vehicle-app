"use client";
import React from "react";
import { useEffect, useState } from "react";
import fetchVehicleMake from "./Utils/FetchDataFromFirestore";

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
    <div>
      App
      <h1>Data</h1>
      <p>
        {vehicleMakeData.map(
          (data) => `Name: ${data.Name} Abrv: ${data.Abrv} `
        )}
      </p>
    </div>
  );
};

export default App;
