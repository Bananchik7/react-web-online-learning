import "./Header.css";
import ButtonExit from "../ButtonExit/ButtonExit";
import React, { useContext } from "react";
import { Context } from "../../index.js";

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
        <div className="header__account-info">
          <img
            className="header__info-img"
            src="./avatar.png"
            alt="avatar"
          ></img>
          <p className="header__info-name">
            Шамова Анастасия <br></br>Владимировна
          </p>
        </div>
        <div className="header__account-exit">
          <ButtonExit />
        </div>
      </div>
    </header>
  );
}
