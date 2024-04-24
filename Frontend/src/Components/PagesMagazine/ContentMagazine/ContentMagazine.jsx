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
import HeaderMagazine from "../HeaderMagazine/HeaderMagazine.jsx";

const ContentMagazine = observer(() => {
  const { magazine } = useContext(Context);
  const { topic } = useContext(Context);

  // для получения данных с соседнего компонента по смене месяца в таблице
  const [valueGroup, setValueGroup] = useState(1);
  const [valueItem, setValueItem] = useState(1);
  const [valueMonth, setValueMonth] = useState(1);

  const handleChangeMonth = (valueMonth) => {
    setValueMonth(valueMonth);
  };

  const handleChangeGroup = (valueGroup) => {
    setValueGroup(valueGroup);
  };

  const handleChangeItem = (valueItem) => {
    setValueItem(valueItem);
  };

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

  return (
    <section className="content__main">
      <HeaderMagazine
        onChange={(handleChangeItem, handleChangeGroup, handleChangeMonth)}
      />
      <TableMagazine
        valueItem={valueItem}
        valueGroup={valueGroup}
        valueMonth={valueMonth}
      />
      <InfoMagazine />
    </section>
  );
});

export default ContentMagazine;
