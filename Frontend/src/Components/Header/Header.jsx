import "./Header.css";
import ButtonExit from "../ButtonExit/ButtonExit";
import { useContext } from "react";
import { Context } from "../../index.js";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../../Utils/consts.js";

export default function Header() {
  const { user } = useContext(Context);
  return (
    <header>
      <div className="header__logo">
        <img className="header__logo-img" src="./logo.png" alt="logo"></img>
        <p className="header__logo-title">
          Онлайн <br></br>Обучение
        </p>
      </div>
      <div className="header__account">
        <NavLink to={LOGIN_ROUTE}>
          <ButtonExit onClick={() => user.setIsAuth(false)} />
        </NavLink>
      </div>
    </header>
  );
}
