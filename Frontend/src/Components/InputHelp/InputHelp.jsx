export default function InputHelp() {
  return (
    <form className="help__input" method="POST">
      <p className="help__input-title">Тема обращения</p>
      <textarea
        className="help__input-subject"
        name="Subject"
        type="text"
        placeholder="Введите тему..."
      ></textarea>
      <p className="help__input-title">Текст обращения</p>
      <textarea
        className="help__input-text"
        name="TextHelp"
        placeholder="Введите сообщение..."
      ></textarea>
      <button type="submit" className="help__input-button">
        Отправить
      </button>
    </form>
  );
}
