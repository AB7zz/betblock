import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BettingProvider } from "./Context/BettingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BettingProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BettingProvider>
);
