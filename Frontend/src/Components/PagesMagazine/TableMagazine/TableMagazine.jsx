import { useContext, useEffect } from "react";
import "./TableMagazine.css";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index.js";
import { fetchGrades, fetchStudents } from "../../../http/magazineAPI.js";

const TableMagazine = observer(() => {
  const { magazine } = useContext(Context);

  useEffect(() => {
    fetchStudents().then((data) => {
      magazine.setStudents(data);
    });
    fetchGrades().then((data) => {
      magazine.setGrades(data);
    });
  }, []);

  const student = magazine.Students.map((item) => {
    return (
      <tr key={item.StudentID}>
        <td>{item.StudentID}</td>
        <td>{item.LastName}</td>
        <td>{item.FirstName}</td>
        <td>{item.SurName}</td>
      </tr>
    );
  });
  const data = magazine.Grades.map((item) => {
    return (
      <tr key={item.GradeID}>
        <td>{item.DataGrade}</td>
      </tr>
    );
  });

  return (
    <div className="content__table">
      <table className="content__main-table">
        <thead>
          <tr>
            <td></td>
            <td>Список учащихся</td>
            <td></td>
            <td></td>
            <td>{data}</td>
          </tr>
        </thead>
        <tbody>{student}</tbody>
      </table>
    </div>
  );
});

export default TableMagazine;
