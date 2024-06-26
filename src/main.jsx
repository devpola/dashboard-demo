import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <CssBaseline />
    <App />
  </React.Fragment>
);
