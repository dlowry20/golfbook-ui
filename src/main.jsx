import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import StartRound from "./StartRound"
import CurrentRound from "./CurrentRound";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      {/*<Prompt/>*/}
        <App />
  <StartRound />
  <CurrentRound/>
  </React.StrictMode>
);
