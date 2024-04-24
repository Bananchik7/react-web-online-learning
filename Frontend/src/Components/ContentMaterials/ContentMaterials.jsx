import "./ContentMaterials.css";
import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index.js";
import ModalAdd from "../Modals/ModalsMaterials.jsx";
import {
  fetchMaterials,
  fetchGroup,
  fetchItem,
  fetchMonth,
  deleteMaterial,
  dowloadVideo,
} from "../../http/materialsAPI.js";

const ContentMaterials = observer(() => {
  const { material } = useContext(Context);

  const [AddVisible, setAddVisibale] = useState(false);

  useEffect(() => {
    fetchGroup().then((data) => material.setGroupStudents(data));
    fetchItem().then((data) => material.setItems(data));
    fetchMonth().then((data) => material.setMonths(data));
    fetchMaterials().then((data) => {
      material.setMaterials(data);
    });
  }, []);

  function downloadVideo(Video) {
    dowloadVideo(Video).then((data) => {
      const video = new Blob([data], { responseType: "blob" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(video);
      link.download = `${Video}.mp4`;
      link.click();
      link.remove();
    });
  }

  const onClickDeleteMaterial = (MaterialID) => {
    deleteMaterial(MaterialID).then((data) =>
      data.filter((item) => item.MaterialID !== MaterialID)
    );
  };

  // фильтр
  function selectMaterials() {
    const SelectGroupID = document.getElementById("SelectGroupID");
    const GroupID = SelectGroupID.options[SelectGroupID.selectedIndex].value;
    const SelectItemID = document.getElementById("SelectItemID");
    const ItemID = SelectItemID.options[SelectItemID.selectedIndex].value;
    const SelectMonthID = document.getElementById("SelectMonthID");
    const MonthID = SelectMonthID.options[SelectMonthID.selectedIndex].value;
    fetchMaterials(GroupID, ItemID, MonthID).then((data) => {
      material.setMaterials(data);
    });
  }

  const handleChange = () => {
    selectMaterials();
  };

  return (
    <>
      <main className="loading">
        <section className="loading__header">
          <div className="content__header">
            <div className="content__header-option">
              <p className="content__option-title">Предмет:</p>
              <select
                id="SelectItemID"
                defaultValue={"1"}
                onChange={handleChange}
                className="content__option-select"
              >
                {material.Items.map((item) => (
                  <option key={item.ItemID} value={item.ItemID}>
                    {item.Name}
                  </option>
                ))}
              </select>
            </div>
            <div className="content__header-option">
              <p className="content__option-title">Класс:</p>
              <select
                id="SelectGroupID"
                defaultValue={"1"}
                onChange={handleChange}
                className="content__option-select"
              >
                {material.GroupStudents.map((item) => (
                  <option key={item.GroupID} value={item.GroupID}>
                    {item.Name}
                  </option>
                ))}
              </select>
            </div>
            <div className="content__header-option">
              <p className="content__option-title">Месяц:</p>
              <select
                id="SelectMonthID"
                defaultValue={"1"}
                onChange={handleChange}
                className="content__option-select"
              >
                {material.Months.map((item) => (
                  <option key={item.MonthID} value={item.MonthID}>
                    {item.Name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>
        <section className="loading__background">
          {material.Materials.map((item) => (
            <div className="loading__form" key={item.MaterialID}>
              <div className="loading__form-name">{item.Name}</div>
              <div className="loading__form-files">
                <div
                  onClick={() => downloadVideo(item.Video)}
                  className="loading__files-video"
                >
                  {item.Video}
                </div>
                <div className="loading__files-pdf">{item.File}</div>
                <button
                  onClick={() => onClickDeleteMaterial(item.MaterialID)}
                  className="loading__files-delete"
                >
                  Удалить
                </button>
              </div>
            </div>
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
