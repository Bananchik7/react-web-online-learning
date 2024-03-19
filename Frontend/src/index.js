import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserAuth from "./Components/UserAuth.js";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider value={{ user: new UserAuth() }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
