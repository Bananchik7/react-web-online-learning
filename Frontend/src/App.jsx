import "./App.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes.js";
import { LOGIN_ROUTE } from "./Utils/consts.js";
import { useContext } from "react";
import { Context } from "./index.js";

function App() {
  const { user } = useContext(Context);
  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        {user.isAuth === true &&
          authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} exact />
          ))}
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
        <Route
          path="*"
          element={<Navigate to={LOGIN_ROUTE} replace={true} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
