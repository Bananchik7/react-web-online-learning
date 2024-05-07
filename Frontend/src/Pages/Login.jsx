import { REGISTRATION_ROUTE, HOME_ROUTE } from "../Utils/consts";
import { login } from "../http/userAPI";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../index.js";
import { observer } from "mobx-react-lite";

const Login = observer(() => {
  const { user } = useContext(Context);
  const [LoginAccount, setLoginAccount] = useState("");
  const [PasswordAccount, setPasswordAccount] = useState("");
  const [LastName, setLastName] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [SurName, setSurName] = useState("");
  const navigate = useNavigate();

  const click = async () => {
    try {
      let data;
      data = await login(
        LoginAccount,
        PasswordAccount,
        LastName,
        FirstName,
        SurName
      );
      user.setAccounts(user);
      user.setIsAuth(true);
      navigate(HOME_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <>
      <section className="login">
        <div className="login__conteiner">
          <div className="login__conteiner-image">
            <img
              className="login__image-close"
              src="./button-close.png"
              alt="close"
            />
          </div>
          <div className="login__conteiner-title">Авторизация</div>
          <form className="login__conteiner-form">
            <p className="login__form-login">Логин:</p>
            <input
              className="login__login-text"
              placeholder="Введите ваш email..."
              value={LoginAccount}
              onChange={(e) => setLoginAccount(e.target.value)}
            ></input>
            <p className="login__form-password">Пароль:</p>
            <input
              className="login__password-text"
              placeholder="Введите ваш пароль..."
              value={PasswordAccount}
              onChange={(e) => setPasswordAccount(e.target.value)}
              type="password"
            ></input>
            <NavLink>
              <button className="login__form-auth" onClick={click}>
                Войти
              </button>
            </NavLink>
            <NavLink to={REGISTRATION_ROUTE}>
              <button className="login__form-regist">Регистрация</button>
            </NavLink>
          </form>
        </div>
      </section>
    </>
  );
});

export default Login;
