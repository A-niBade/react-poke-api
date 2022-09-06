import React from "react";
import ReactDOM from "react-dom/client";
import { PokeApp } from "./PokeApp";

import "../public/styles/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PokeApp />
  </React.StrictMode>
);
