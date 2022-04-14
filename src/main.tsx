import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Blog from "./components/Blog";
import Header from "./components/Header";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Blog />
  </React.StrictMode>,
  document.getElementById("root")
);
