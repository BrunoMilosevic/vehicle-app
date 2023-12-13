import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCH05lJuZsxLvuk3jPPksU872VZdmpVi1A",
  authDomain: "mono-app-e0295.firebaseapp.com",
  projectId: "mono-app-e0295",
  storageBucket: "mono-app-e0295.appspot.com",
  messagingSenderId: "176993674293",
  appId: "1:176993674293:web:2123472657e533f038bd7c",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
