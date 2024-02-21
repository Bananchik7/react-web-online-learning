import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <Routes>
      <Route exact path="/" components={Home} />
      <Route exact path="/login" components={Login} />
      <Route exact path="/regixter" components={Register} />
    </Routes>
  );
}

export default App;
