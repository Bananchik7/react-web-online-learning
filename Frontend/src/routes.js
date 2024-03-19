import { LOGIN_ROUTE, REGISTRATION_ROUTE, HOME_ROUTE } from "./Utils/consts";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

export const authRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Register,
  },
];
