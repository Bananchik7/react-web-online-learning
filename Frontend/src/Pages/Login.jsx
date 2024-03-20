import { Link } from "react-router-dom";
import { REGISTRATION_ROUTE } from "../Utils/consts";
import "./Login.css";

export default function Login() {
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
            <p className="login__form-login">Введите логин:</p>
            <textarea
              className="login__login-text"
              name="Subject"
              type="text"
            ></textarea>
            <p className="login__form-password">Введите пароль:</p>
            <textarea
              className="login__password-text"
              name="Subject"
              type="text"
            ></textarea>
            <p className="login__form-help">Забыли пароль?</p>
            <Link to={REGISTRATION_ROUTE}>
              <button className="login__form-regist">Регистрация</button>
            </Link>
            <button className="login__form-auth">Войти</button>
          </form>
        </div>
      </section>
    </>
  );
}
