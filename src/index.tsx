import React from "react";
import { render } from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import Reset from "./styles/reset";
import App from "./components/app/app";

render(
  <React.StrictMode>
    <Router>
      <Reset />
      <App />
    </Router>
  </React.StrictMode>,
  document.querySelector("#root")
);
