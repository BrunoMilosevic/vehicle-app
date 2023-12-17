import React, { useEffect, useState } from "react";
import fetchVehicleMake from "../Utils/FetchVehicleMake";
import { Link } from "react-router-dom";
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
        <Link to={`/models/${data.Id}`} key={data.Id} className="car-make">
          <h2>{data.Name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default CarMake;
