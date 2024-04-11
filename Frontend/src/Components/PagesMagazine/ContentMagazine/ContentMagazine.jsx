import "./ContentMagazine.css";
import TableMagazine from "../TableMagazine/TableMagazine";
import InfoMagazine from "../InfoMagazine/InfoMagazine";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index.js";
import { useContext, useEffect } from "react";
import { fetchGrades, fetchStudents } from "../../../http/magazineAPI.js";
import { fetchTopic } from "../../../http/topicAPI.js";

const ContentMagazine = observer(() => {
  const { magazine } = useContext(Context);
  const { topic } = useContext(Context);

  useEffect(() => {
    fetchStudents().then((data) => {
      magazine.setStudents(data);
    });
    fetchGrades().then((data) => {
      magazine.setGrades(data);
    });
    fetchTopic().then((data) => {
      topic.setTopicLessons(data);
    });
  }, []);

  return (
    <section className="content__main">
      <TableMagazine />
      <InfoMagazine />
    </section>
  );
});

export default ContentMagazine;
