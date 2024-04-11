import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index.js";
import "./TableMagazine.css";

const TableMagazine = observer(() => {
  const { magazine } = useContext(Context);

  return (
    <>
      <div className="content__table">
        <table className="content__main-table">
          <thead>
            <tr>
              <th></th>
              <th>Список учащихся</th>
              <th></th>
              <th></th>
              {magazine.Grades.map((item) => (
                <th key={item.GradeID}>{item.DataGrade}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {magazine.Students.map((item) => (
              <tr key={item.StudentID}>
                <td>{item.StudentID}</td>
                <td>{item.LastName}</td>
                <td>{item.FirstName}</td>
                <td>{item.SurName}</td>
                {magazine.Grades.map((item) => (
                  <td key={item.GradeID}>{item.Grade}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
});

export default TableMagazine;
