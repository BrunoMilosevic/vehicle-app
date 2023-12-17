import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchVehicleModel from "../Utils/FetchVehicleModel";

const CarModel = () => {
  const [vehicleModelData, setVehicleModelData] = useState([]);
  const { makeId } = useParams();
  useEffect(() => {
    async function fetchData() {
      const data = await fetchVehicleModel(makeId);
      setVehicleModelData(data);
    }

    fetchData();
  }, [makeId]);
  return (
    <div className="car-make-grid">
      {vehicleModelData.map((data) => (
        <div className="car-model">
          <h2 key={data.Id}>{data.Name}</h2>
          <img src={data.img} alt={`${data.Name} image`}></img>
        </div>
      ))}
    </div>
  );
};

export default CarModel;
