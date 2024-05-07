import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "./index.js";
import { observer } from "mobx-react-lite";
import { check } from "./http/userAPI.js";
import { Spinner } from "react-bootstrap";
import AppRouter from "./Components/AppRouter.jsx";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user.setAccounts(true);
        user.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner animation={"grow"} />;
  }

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
