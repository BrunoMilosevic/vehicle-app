import React from "react";
import { database } from "../Services/firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
export default async function fetchVehicleMake() {
  const querySnapshot = await getDocs(collection(database, "VehicleMake"));

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return data;
}
