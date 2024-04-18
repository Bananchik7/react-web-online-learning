import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index.js";
import "./TableMagazine.css";

const TableMagazine = observer(({ value }) => {
  const { magazine } = useContext(Context);

  // получение количества днейв месяце в зависимости от года и введннного месяца
  function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  // создание массива дат определенного месяца
  let arrDate = [];
  for (let i = 1; i <= getDaysInMonth(value, 2024); i++) {
    arrDate.push(i);
  }

  //arrrrrrrr[][0]=fio
  //arrrrrrrr[][1]=0...5
  //arrrrrrrr[][2]=0...5

  return (
    <>
      <div className="content__table">
        <table className="content__main-table">
          <thead>
            <tr>
              <th></th>
              <th>Список учащихся</th>
              <th></th>
              {arrDate.map((date) => (
                <th key={date}>{date}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {magazine.Students.map((item) => (
              <tr key={item.StudentID}>
                <td>{item.LastName}</td>
                <td>{item.FirstName}</td>
                <td>{item.SurName}</td>
                {magazine.Grades.map((itemG) => (
                  <td key={itemG.GradeID}>{itemG.Grade}</td>
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
