import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// Render the main App component in the root element of the HTML document
ReactDOM.render(
  // Enable React's strict mode for improved error handling and performance
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  // Get the root element of the HTML document to render the app in
  document.getElementById("root")
);