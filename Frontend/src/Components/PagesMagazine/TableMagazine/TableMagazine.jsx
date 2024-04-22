import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index.js";
import "./TableMagazine.css";

const TableMagazine = observer(({ value }) => {
  const { magazine } = useContext(Context);

  // получение количества дней в месяце в зависимости от года и введннного месяца
  function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  // создание массива дат определенного месяца
  let arrDate = [];
  for (let i = 1; i <= getDaysInMonth(value, 2024); i++) {
    arrDate.push(i);
  }

  let arrTable = [];
  magazine.Students.forEach((student) => {
    let objTable = {};
    //objTable[0] = student.LastName;
    //objTable["LastName"] = student.LastName;
    objTable[0] = [
      student.LastName + " " + student.FirstName + " " + student.SurName,
    ];
    arrDate.forEach((day) => {
      objTable[day] = "";
      magazine.Grades.forEach((element) => {
        let newDate = new Date(element.DataGrade);
        let dd = newDate.getDate();
        if (
          Number(element.StudentID) === Number(student.StudentID) &&
          dd === day
        ) {
          objTable[day] = element.Grade;
        }
      });
    });
    arrTable.push(objTable);
  });

  return (
    <>
      <div className="content__table">
        <table className="content__main-table">
          <thead>
            <tr>
              <th>Список учащихся</th>
              {arrDate.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {arrTable.map((item, index) => (
              <tr key={index}>
                <td key={item[0]}>{item[0]}</td>
                {arrDate.map((day) => (
                  <td key={day + item[0]}>{item[day]}</td>
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
