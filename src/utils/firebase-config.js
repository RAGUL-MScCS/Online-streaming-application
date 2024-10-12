import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBKN4UoL8ezfoRLCBPSkk7Voq3_BxYvCp4",
  authDomain: "react-netflix-clone-1b8ac.firebaseapp.com",
  projectId: "react-netflix-clone-1b8ac",
  storageBucket: "react-netflix-clone-1b8ac.appspot.com",
  messagingSenderId: "1012141040441",
  appId: "1:1012141040441:web:e9388022155c7ff4e4bee8",
  measurementId: "G-BNNXL4TWV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const firebaseAuth=getAuth(app)