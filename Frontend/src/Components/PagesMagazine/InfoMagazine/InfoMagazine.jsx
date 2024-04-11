import "./InfoMagazine.css";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index.js";

const InfoMagazine = observer(() => {
  const { topic } = useContext(Context);

  return (
    <div className="content__info">
      <div className="content__info-subject">
        <div className="content__subject-info">
          <p className="content__info-title">Тема</p>
          <p className="content__info-date">Дата урока:</p>
          <select className="content__info-select">
            {topic.TopicLessons.map((item) => (
              <option key={item.TopicID} value={item.TopicID}>
                {item.Data}
              </option>
            ))}
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
});

export default InfoMagazine;
