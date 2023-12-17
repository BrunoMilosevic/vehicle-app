import React from "react";
import { database } from "../Services/firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
export default async function fetchVehicleModel() {
  const querySnapshot = await getDocs(collection(database, "VehicleModel"));

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return data;
}
