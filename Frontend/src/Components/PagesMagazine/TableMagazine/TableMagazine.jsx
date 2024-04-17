import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index.js";
import "./TableMagazine.css";

const TableMagazine = observer(() => {
  const { magazine } = useContext(Context);

  //Date.prototype.daysInMonth = function () {
  //  return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
  //};

  //alert(new Date().daysInMonth());
  let day = 31;

  let arr = [];
  for (let i = 1; i <= day; i++) {
    arr.push(i);
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
              {arr.map((item) => (
                <th key={item}>{item}</th>
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
