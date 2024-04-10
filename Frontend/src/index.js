import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserAuth from "./Components/UserAuth.js";
import MaterialsContent from "./Components/MaterialsInfo.js";
import HelpClass from "./Components/HelpClass.js";
import MagazineContent from "./Components/MagazineInfo.js";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        user: new UserAuth(),
        material: new MaterialsContent(),
        help: new HelpClass(),
        magazine: new MagazineContent(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
