import "./Register.css";
import { LOGIN_ROUTE } from "../Utils/consts";
import { registration } from "../http/userAPI";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../index.js";

export default function Register() {
  const { user } = useContext(Context);
  const [LoginAccount, setLoginAccount] = useState("");
  const [PasswordAccount, setPasswordAccount] = useState("");
  const [LastName, setLastName] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [SurName, setSurName] = useState("");
  const navigate = useNavigate();

  const click = async () => {
    try {
      let data = await registration(
        LoginAccount,
        PasswordAccount,
        LastName,
        FirstName,
        SurName
      );
      user.setAccounts(user);
      navigate(LOGIN_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <>
      <section className="register">
        <div className="register__conteiner">
          <div className="register__conteiner-image">
            <img
              className="register__image-close"
              src="./button-close.png"
              alt="close"
            />
          </div>
          <div className="register__conteiner-title">Регистрация</div>
          <form className="register__conteiner-form">
            <p className="register__form-title">Введите Фамилию:</p>
            <input
              className="register__form-text"
              type="text"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
            <p className="register__form-title">Введите Имя:</p>
            <input
              className="register__form-text"
              type="text"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
            <p className="register__form-title">Введите Отчество:</p>
            <input
              className="register__form-text"
              type="text"
              value={SurName}
              onChange={(e) => setSurName(e.target.value)}
            ></input>
            <p className="register__form-title">Введите Почту:</p>
            <input
              className="register__form-text"
              type="text"
              value={LoginAccount}
              onChange={(e) => setLoginAccount(e.target.value)}
            ></input>
            <p className="register__form-title">Придумайте Пароль:</p>
            <input
              className="register__form-text"
              name="Subject"
              value={PasswordAccount}
              onChange={(e) => setPasswordAccount(e.target.value)}
              type="password"
            ></input>
            <NavLink to={LOGIN_ROUTE}>
              <button className="register__form-regist" onClick={click}>
                Регистрация
              </button>
            </NavLink>
          </form>
        </div>
      </section>
    </>
  );
}
