import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./routes/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./assets/css/form.css"
const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <AllRoutes />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
