import "./ContentMaterials.css";
import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index.js";
import ModalAdd from "../Modals/ModalsMaterials.jsx";
import { fetchMaterials, fetchGroup } from "../../http/materialsAPI.js";

export const ContentMaterials = observer(() => {
  const { material } = useContext(Context);
  const [AddVisible, setAddVisibale] = useState(false);

  useEffect(() => {
    fetchMaterials().then((data) => material.setMaterials(data));
    fetchGroup().then((data) => material.setGroupStudents(data));
  }, []);

  return (
    <>
      <main className="loading">
        <section className="loading__header">
          <div className="content__header">
            <div className="content__header-option">
              <p className="content__option-title">Предмет:</p>
              <select className="content__option-select">
                {material.Items.map((item) => (
                  <option key={item.ItemID}>{item.Name}</option>
                ))}
              </select>
            </div>
            <div className="content__header-option">
              <p className="content__option-title">Класс:</p>
              <select className="content__option-select">
                {material.GroupStudents.map((item) => (
                  <option key={item.GroupID}>{item.Name}</option>
                ))}
              </select>
            </div>
            <div className="content__header-option">
              <p className="content__option-title">Месяц:</p>
              <select className="content__option-select">
                {material.Months.map((item) => (
                  <option key={item.MonthID}>{item.Name}</option>
                ))}
              </select>
            </div>
          </div>
        </section>
        <section className="loading__background">
          {material.Materials.map((item) => (
            <form className="loading__form" key={item.MaterialID}>
              <div className="loading__form-name">{item.Name}</div>
              <div className="loading__form-files">
                <div className="loading__files-video">{item.Video}</div>
                <div className="loading__files-pdf">{item.File}</div>
              </div>
            </form>
          ))}
        </section>
        <div className="loading__button">
          <button
            onClick={() => setAddVisibale(true)}
            className="loading__button-add"
          >
            Добавить тему
          </button>
        </div>
      </main>
      <ModalAdd show={AddVisible} onHide={() => setAddVisibale(false)} />
    </>
  );
});

export default ContentMaterials;
