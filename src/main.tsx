import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBt93YZMu-obz_vgwlSPqzlOlCV8F0BCno",
  authDomain: "dzadok.dev",
  projectId: "dzadok-dev",
  storageBucket: "dzadok-dev.appspot.com",
  messagingSenderId: "161116533438",
  appId: "1:161116533438:web:e080636504cd8b2cf3a4ef",
  measurementId: "G-PDK1GZ5R4C",
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById("root")
);
