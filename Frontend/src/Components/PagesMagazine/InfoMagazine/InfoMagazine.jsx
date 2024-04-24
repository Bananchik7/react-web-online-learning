import "./InfoMagazine.css";
import { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index.js";
import ModalAdd from "../../Modals/ModalsTopic.jsx";

const InfoMagazine = observer(() => {
  const { topic } = useContext(Context);
  const [selectedId, setSelectedId] = useState(1);
  const [AddVisible, setAddVisibale] = useState(false);

  const handleSelectChange = (e) => {
    setSelectedId(e.target.value);
  };

  return (
    <div className="content__info">
      <div className="content__info-subject">
        <div className="content__subject-info">
          <p className="content__info-title">Тема</p>
          <p className="content__info-date">Дата урока:</p>
          <select
            defaultValue={"1"}
            onChange={handleSelectChange}
            className="content__info-select"
          >
            {topic.TopicLessons.map((item) => (
              <option key={item.TopicID} value={item.TopicID}>
                {item.Data}
              </option>
            ))}
          </select>
        </div>
        {topic.TopicLessons.filter((value) => {
          return Number(value.TopicID) === Number(selectedId);
        }).map((item, i) => (
          <div key={i} className="content__info-text">
            {item.TextTopic}
          </div>
        ))}
      </div>
      <div className="content__info-home">
        <div className="content__home-info">
          <p className="content__info-title">Домашнее задание</p>
        </div>
        {topic.TopicLessons.filter((value) => {
          return Number(value.TopicID) === Number(selectedId);
        }).map((item, i) => (
          <div key={i} className="content__info-text">
            {item.HomeTopic}
          </div>
        ))}
      </div>
      <div className="content__button">
        <button
          onClick={() => setAddVisibale(true)}
          className="content__button-add"
          style={{ marginRight: "35%" }}
        >
          Добавить тему
        </button>
      </div>
      <ModalAdd
        show={AddVisible}
        onHide={() => setAddVisibale(false)}
        //valueMonth={valueMonth}
        //valueGroup={valueGroup}
        //valueItem={valueItem}
      />
    </div>
  );
});

export default InfoMagazine;
