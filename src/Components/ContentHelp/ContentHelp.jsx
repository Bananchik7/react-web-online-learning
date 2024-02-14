import InputHelp from "../InputHelp/InputHelp";
import "./ContentHelp.css";

export default function ContentHelp() {
  return (
    <div className="help">
      <p className="help__title">Контакты:</p>
      <p className="help__info">
        Телефон технической поддержки: +7 999 999 99 99
      </p>
      <p className="help__info">
        Почта технической поддержки: support@online-studies.ru
      </p>
      <p className="help__form">Форма обращения</p>
      <InputHelp />
    </div>
  );
}
