import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import MainRoutes from "./routes";

import "../node_modules/locomotive-scroll/dist/locomotive-scroll.css";
import "./assets/css/tailwind.css";

import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll();

ReactDOM.render(
  <React.StrictMode>
    <MainRoutes />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();