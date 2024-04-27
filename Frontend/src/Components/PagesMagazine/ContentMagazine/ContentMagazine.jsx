import "./ContentMagazine.css";
import TableMagazine from "../TableMagazine/TableMagazine";
import InfoMagazine from "../InfoMagazine/InfoMagazine";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index.js";
import { useContext, useEffect, useState } from "react";
import {
  fetchGrades,
  fetchGroup,
  fetchStudents,
  fetchItem,
  fetchMonth,
} from "../../../http/magazineAPI.js";
import { fetchTopic } from "../../../http/topicAPI.js";

const ContentMagazine = observer(() => {
  const { magazine } = useContext(Context);
  const { topic } = useContext(Context);

  // для получения данных с соседнего компонента по смене месяца в таблице
  const [valueGroup, setValueGroup] = useState(1);
  const [valueItem, setValueItem] = useState(1);
  const [valueMonth, setValueMonth] = useState(1);

  useEffect(() => {
    fetchStudents().then((data) => {
      magazine.setStudents(data);
    });
    fetchGroup().then((data) => {
      magazine.setGroupStudents(data);
    });
    fetchItem().then((data) => magazine.setItems(data));
    fetchMonth().then((data) => magazine.setMonths(data));
    fetchGrades().then((data) => {
      magazine.setGrades(data);
    });
    fetchTopic().then((data) => {
      topic.setTopicLessons(data);
    });
  }, []);

  const handleChangeMonth = (valueMonth) => {
    setValueMonth(valueMonth.target.value);
    selectGrades();
  };
  const handleChangeItem = (valueItem) => {
    setValueItem(valueItem.target.value);
    selectGrades();
  };

  const handleChangeGroup = (valueGroup) => {
    setValueGroup(valueGroup.target.value);
    selectGrades();
  };

  function selectGrades() {
    const SelectGroupID = document.getElementById("SelectGroupID");
    const GroupID = SelectGroupID.options[SelectGroupID.selectedIndex].value;
    const SelectItemID = document.getElementById("SelectItemID");
    const ItemID = SelectItemID.options[SelectItemID.selectedIndex].value;
    const SelectMonthID = document.getElementById("SelectMonthID");
    const MonthID = SelectMonthID.options[SelectMonthID.selectedIndex].value;
    fetchGrades(GroupID, ItemID, MonthID).then((data) => {
      magazine.setGrades(data);
    });
    fetchStudents(GroupID).then((data) => {
      magazine.setStudents(data);
    });
    fetchTopic(GroupID, ItemID, MonthID).then((data) => {
      topic.setTopicLessons(data);
    });
  }

  return (
    <section className="content__main">
      <section className="content__header">
        <div className="content__header-option">
          <p className="content__option-title">Предмет:</p>
          <select
            id="SelectItemID"
            defaultValue={"1"}
            onChange={handleChangeItem}
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
            onChange={handleChangeGroup}
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
            onChange={handleChangeMonth}
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
      <TableMagazine
        valueItem={valueItem}
        valueGroup={valueGroup}
        valueMonth={valueMonth}
      />
      <InfoMagazine
        valueItem={valueItem}
        valueGroup={valueGroup}
        valueMonth={valueMonth}
      />
    </section>
  );
});

export default ContentMagazine;
