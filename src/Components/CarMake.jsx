import React, { useEffect, useState } from "react";
import fetchVehicleMake from "../Utils/FetchVehicleMake";

const CarMake = () => {
  const [vehicleMakeData, setVehicleMakeData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchVehicleMake();
      setVehicleMakeData(data);
    }

    fetchData();
  }, []);

  return (
    <div className="car-make-grid">
      {vehicleMakeData.map((data) => (
        <div className="car-make">
          <h2 key={data.Id}>{data.Name}</h2>
        </div>
      ))}
    </div>
  );
};

export default CarMake;
