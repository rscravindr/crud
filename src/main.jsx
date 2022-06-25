import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import axios from "axios";

const token =
  "40b5de1df7bbbfb85fb142062ab780754259b0da7f7dc04c20104a7f1ed53ed6";
axios.defaults.baseURL = "https://gorest.co.in/public/v2";
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
