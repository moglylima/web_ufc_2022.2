import React from "react";
// import ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";
// import App from "./App";
// import "./index.css";

// createRoot.render(<App />, document.getElementById("root"));

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
