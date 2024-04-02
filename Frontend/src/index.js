import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserAuth from "./Components/UserAuth.js";
import MaterialsContent from "./Components/MaterialsInfo.js";

export const Context = createContext(null);
console.log(process.env.REACT_APP_ARI_URL);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{ user: new UserAuth(), content: new MaterialsContent() }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
