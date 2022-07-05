import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <>
    <App />
    <div class="attribution">
      <h1>
        {" "}
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/alencardotpy">alencarDotPy</a>.
      </h1>
    </div>
  </>
);

reportWebVitals(sendToVercelAnalytics);
