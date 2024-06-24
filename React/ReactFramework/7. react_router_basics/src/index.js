import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Wrap the entire app with BrowserRouter thus all routes will be managed by the same router.
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
