import { useContext, useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index.js";
import "./TableMagazine.css";
import { Dropdown, Form } from "react-bootstrap";
import {
  fetchGroup,
  fetchItem,
  fetchMonth,
  createGrades,
  fetchStudents,
  fetchGrades,
} from "../../../http/magazineAPI.js";

const TableMagazine = observer(({ valueGroup, valueMonth, valueItem }) => {
  const { magazine } = useContext(Context);
  const [show, setShow] = useState();
  const [grade, setGrade] = useState("");
  const [dataGrade, setDataGrade] = useState("");

  useEffect(() => {
    fetchGroup().then((data) => magazine.setGroupStudents(data));
    fetchItem().then((data) => magazine.setItems(data));
    fetchMonth().then((data) => magazine.setMonths(data));
    fetchStudents().then((data) => magazine.setStudents(data));
    fetchGrades().then((data) => magazine.setGrades(data));
  }, []);

  const addGrade = () => {
    const formData = new FormData();
    formData.append("StudentID", magazine.selectedStudents.StudentID);
    formData.append("ItemID", valueItem);
    formData.append("GroupID", valueGroup);
    formData.append("Grade", grade);
    formData.append("DataGrade", dataGrade);
    formData.append("MonthID", valueMonth);
    createGrades(formData).then((data) => setShow());
  };

  // получение количества дней в месяце в зависимости от года и введннного месяца
  function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  // создание массива дат определенного месяца
  let arrDate = [];
  for (let i = 1; i <= getDaysInMonth(valueMonth, 2024); i++) {
    arrDate.push(i);
  }

  let arrTable = [];
  magazine.Students.forEach((student) => {
    let objTable = {};
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
              <th style={{ textAlign: "center" }}>Список учащихся</th>
              {arrDate.map((day) => (
                <th style={{ textAlign: "center" }} key={day}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {arrTable.map((item, index) => (
              <tr key={index}>
                <td
                  style={{
                    paddingLeft: "2%",
                    fontSize: "15px",
                    width: "25%",
                  }}
                  key={item[0]}
                >
                  {item[0]}
                </td>
                {arrDate.map((day) => (
                  <td
                    style={{
                      fontSize: "15px",
                      width: "2%",
                      textAlign: "center",
                    }}
                    key={day + item[0]}
                  >
                    {item[day]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="content__table-form">
        <Form
          style={{
            display: "flex",
            width: "60%",
            marginLeft: "15%",
            marginTop: "2%",
          }}
        >
          <Form.Control
            style={{
              width: "90px",
              height: "40px",
              marginRight: "5%",
              textAlign: "center",
            }}
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            placeholder={"Оценка"}
          />
          <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle variant="secondary">
              {"Выберите учащегося" ||
                magazine.selectedStudents.LastName +
                  " " +
                  magazine.selectedStudents.FirstName +
                  " " +
                  magazine.selectedStudents.SurName}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {magazine.Students.map((item) => (
                <Dropdown.Item
                  onClick={() => magazine.setSelectedStudents(item)}
                  key={item.StudentID}
                >
                  {item.LastName + " " + item.FirstName + " " + item.SurName}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            style={{ width: "20%" }}
            className="mx-4 mb-4"
            value={dataGrade}
            onChange={(e) => setDataGrade(e.target.value)}
            aria-label="Date"
            type="date"
          />
        </Form>
        <button className="magazine__button-add" onClick={addGrade}>
          Добавить оценку
        </button>
      </div>
    </>
  );
});

export default TableMagazine;
