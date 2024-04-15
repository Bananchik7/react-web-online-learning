import "./HeaderMagazine.css";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index.js";
import { useContext } from "react";
import { fetchGrades, fetchStudents } from "../../../http/magazineAPI.js";
import { fetchTopic } from "../../../http/topicAPI.js";

const HeaderMagazine = observer(() => {
  const { magazine } = useContext(Context);
  const { topic } = useContext(Context);

  function selectGrades() {
    const SelectGroupID = document.getElementById("SelectGroupID");
    const GroupID = SelectGroupID.options[SelectGroupID.selectedIndex].value;
    const SelectItemID = document.getElementById("SelectItemID");
    const ItemID = SelectItemID.options[SelectItemID.selectedIndex].value;
    //const SelectMonthID = document.getElementById("SelectMonthID");
    //const MonthID = SelectMonthID.options[SelectMonthID.selectedIndex].value;
    fetchGrades(GroupID, ItemID).then((data) => {
      magazine.setGrades(data);
    });
    fetchStudents(GroupID, ItemID).then((data) => {
      magazine.setStudents(data);
    });
    fetchTopic(GroupID, ItemID).then((data) => {
      topic.setTopicLessons(data);
    });
  }

  const handleChange = () => {
    selectGrades();
  };

  return (
    <section className="content__header">
      <div className="content__header-option">
        <p className="content__option-title">Предмет:</p>
        <select
          id="SelectItemID"
          defaultValue={"1"}
          onChange={handleChange}
          className="content__option-select"
        >
          {magazine.Items.map((item) => (
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
          {magazine.GroupStudents.map((item) => (
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
          {magazine.Months.map((item) => (
            <option key={item.MonthID} value={item.MonthID}>
              {item.Name}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
});

export default HeaderMagazine;
