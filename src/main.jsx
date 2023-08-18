import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUsers,
  faMoneyBill1Wave,
  faPaperPlane,
  faLayerGroup,
  faCalendarDays,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faUsers,
  faMoneyBill1Wave,
  faPaperPlane,
  faLayerGroup,
  faCalendarDays,
  faMagnifyingGlass,
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
