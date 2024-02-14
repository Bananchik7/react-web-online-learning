export default function InputHelp() {
  return (
    <div className="help__input">
      <p className="help__input-title">Тема обращения</p>
      <textarea
        className="help__input-subject"
        type="text"
        placeholder="Введите тему..."
      ></textarea>
      <p className="help__input-title">Текст обращения</p>
      <textarea
        className="help__input-text"
        placeholder="Введите сообщение..."
      ></textarea>
      <button className="help__input-button">Отправить</button>
    </div>
  );
}
