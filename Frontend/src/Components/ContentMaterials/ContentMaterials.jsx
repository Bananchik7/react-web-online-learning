import "./ContentMaterials.css";
import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index.js";
import ModalAdd from "../Modals/ModalsMaterials.jsx";
import { fetchMaterials, deleteMaterial } from "../../http/materialsAPI.js";
import { fetchGroup, fetchItem, fetchMonth } from "../../http/allAPI.js";

const ContentMaterials = observer(() => {
  const { material } = useContext(Context);

  const [AddVisible, setAddVisibale] = useState(false);
  const [valueGroup, setValueGroup] = useState(1);
  const [valueItem, setValueItem] = useState(1);
  const [valueMonth, setValueMonth] = useState(1);

  useEffect(() => {
    fetchGroup().then((data) => material.setGroupStudents(data));
    fetchItem().then((data) => material.setItems(data));
    fetchMonth().then((data) => material.setMonths(data));
    fetchMaterials().then((data) => {
      material.setMaterials(data);
    });
    //eslint-disable-next-line
  }, []);

  function downloadVideo(Video) {
    var link = document.createElement("a");
    link.setAttribute("href", "http://localhost:3001/" + Video);
    link.setAttribute("download", "filename");
    link.click();
  }

  function downloadFile(File) {
    var link = document.createElement("a");
    link.setAttribute("href", "http://localhost:3001/" + File);
    link.setAttribute("download", "filename");
    link.click();
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

  const handleChangeMonth = (valueMonth) => {
    setValueMonth(valueMonth.target.value);
    selectMaterials();
  };
  const handleChangeItem = (valueItem) => {
    setValueItem(valueItem.target.value);
    selectMaterials();
  };

  const handleChangeGroup = (valueGroup) => {
    setValueGroup(valueGroup.target.value);
    selectMaterials();
  };

  //const handleChange = (e) => {
  //  selectMaterials();
  //};

  return (
    <>
      <main className="loading">
        <section className="loading__header">
          <div className="content__header">
            <div className="content__header-option">
              <p className="content__option-title">Предмет:</p>
              <select
                id="SelectItemID"
                onChange={handleChangeItem}
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
                onChange={handleChangeGroup}
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
                onChange={handleChangeMonth}
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
                <div className="loading__video">
                  <img
                    className="loading__video-img"
                    src="./video.png"
                    alt="video"
                  ></img>
                </div>
                <div
                  onClick={() => downloadVideo(item.Video)}
                  className="loading__files-video"
                >
                  {item.Video}
                </div>
                <div className="loading__file">
                  <img
                    className="loading__file-img"
                    src="./doc.png"
                    alt="doc"
                  ></img>
                </div>

                <div
                  onClick={() => downloadFile(item.File)}
                  className="loading__files-pdf"
                >
                  {item.File}
                </div>
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
      <ModalAdd
        valueItem={valueItem}
        valueGroup={valueGroup}
        valueMonth={valueMonth}
        show={AddVisible}
        onHide={() => setAddVisibale(false)}
      />
    </>
  );
});

export default ContentMaterials;
