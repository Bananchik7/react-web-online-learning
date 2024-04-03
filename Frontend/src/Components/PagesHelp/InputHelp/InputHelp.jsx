import { useState } from "react";
import { createHelp } from "../../../http/helpAPI";

export default function InputHelp() {
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const addHelp = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Subject", subject);
    formData.append("TextHelp", text);
    createHelp(formData).then((data) => {
      setSubject("");
      setText("");
    });
  };

  return (
    <form className="help__input">
      <p className="help__input-title">Тема обращения</p>
      <textarea
        className="help__input-subject"
        name="Subject"
        type="text"
        placeholder="Введите тему..."
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      ></textarea>
      <p className="help__input-title">Текст обращения</p>
      <textarea
        className="help__input-text"
        name="TextHelp"
        placeholder="Введите сообщение..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button type="submit" className="help__input-button" onClick={addHelp}>
        Отправить
      </button>
    </form>
  );
}
