import { Link } from "react-router-dom";
import "./Register.css";
import { LOGIN_ROUTE, HOME_ROUTE } from "../Utils/consts";

export default function Register() {
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
            <textarea
              className="register__form-text"
              name="Subject"
              type="text"
            ></textarea>
            <p className="register__form-title">Введите Имя:</p>
            <textarea
              className="register__form-text"
              name="Subject"
              type="text"
            ></textarea>
            <p className="register__form-title">Введите Отчество:</p>
            <textarea
              className="register__form-text"
              name="Subject"
              type="text"
            ></textarea>
            <p className="register__form-title">Введите Почту:</p>
            <textarea
              className="register__form-text"
              name="Subject"
              type="text"
            ></textarea>
            <p className="register__form-title">Придумайте Пароль:</p>
            <textarea
              className="register__form-text"
              name="Subject"
              type="text"
            ></textarea>
            <Link to={LOGIN_ROUTE}>
              <button className="register__form-regist">Регистрация</button>
            </Link>
          </form>
        </div>
      </section>
    </>
  );
}
