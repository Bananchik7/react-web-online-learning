import "./Content.css";

export default function Content() {
  return (
    <div className="content">
      <div className="content__header">
        <div className="content__header-option">
          <p className="content__option-title">Предмет:</p>
          <select className="contetnt__option-select">
            <option>Алгебра</option>
            <option>Геометрия</option>
            <option>Русский язык</option>
            <option>Английский язык</option>
          </select>
        </div>
        <div className="content__header-option">
          <p className="content__option-title">Класс:</p>
          <select className="contetnt__option-select">
            <option>1 А</option>
            <option>2 А</option>
            <option>3 А</option>
            <option>4 А</option>
          </select>
        </div>
        <div className="content__header-option">
          <p className="content__option-title">Месяц:</p>
          <select className="contetnt__option-select">
            <option>Январь</option>
            <option>Февраль</option>
            <option>Март</option>
            <option>Апрель</option>
          </select>
        </div>
      </div>
    </div>
  );
}
