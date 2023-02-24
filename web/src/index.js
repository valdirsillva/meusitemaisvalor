import React from "react";
// import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/css/bootstrap.min.css";
import "./assets/css/agency.min.css";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
