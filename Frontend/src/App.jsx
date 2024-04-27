import "./App.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes.js";
import { LOGIN_ROUTE } from "./Utils/consts.js";
import { useContext } from "react";
import { Context } from "./index.js";
import { observer } from "mobx-react-lite";

const App = observer(() => {
  const { user } = useContext(Context);
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
        <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
      </Routes>
    </BrowserRouter>
  );
});

export default App;
