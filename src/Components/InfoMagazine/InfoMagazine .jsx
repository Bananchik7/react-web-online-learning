import "./InfoMagazine .css";

export default function InfoMagazine() {
  return (
    <div className="content__info">
      <div className="content__info-subject">
        <div className="content__subject-info">
          <p className="content__info-title">Тема</p>
          <p className="content__info-date">Дата урока:</p>
          <select className="content__info-select">
            <option>1 января</option>
            <option>2 января</option>
          </select>
        </div>
        <input className="content__info-input"></input>
      </div>
      <div className="content__info-home">
        <div className="content__home-info">
          <p className="content__info-title">Домашнее задание</p>
        </div>
        <input className="content__info-input"></input>
      </div>
    </div>
  );
}
