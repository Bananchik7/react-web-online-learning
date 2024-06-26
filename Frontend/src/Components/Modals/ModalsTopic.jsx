import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../index.js";
import { createTopics } from "../../http/topicAPI.js";
import { observer } from "mobx-react-lite";
import { fetchGroup, fetchItem, fetchMonth } from "../../http/allAPI.js";

export const ModalAdd = observer(
  ({ show, onHide, valueMonth, valueGroup, valueItem }) => {
    const { topic } = useContext(Context);
    const [name, setName] = useState("");
    const [homeName, setHomeName] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
      fetchGroup().then((data) => topic.setGroupStudents(data));
      fetchItem().then((data) => topic.setItems(data));
      fetchMonth().then((data) => topic.setMonths(data));
      //eslint-disable-next-line
    }, []);

    const addTopic = () => {
      const formData = new FormData();
      formData.append("TextTopic", name);
      formData.append("HomeTopic", homeName);
      formData.append("Data", date);
      formData.append("GroupID", valueGroup);
      formData.append("ItemID", valueItem);
      formData.append("MonthID", valueMonth);
      createTopics(formData).then((data) => onHide());
    };

    return (
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Добавить тему
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              className="my-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={"Введите название темы"}
            />
            <Form.Control
              className="my-3"
              value={homeName}
              onChange={(e) => setHomeName(e.target.value)}
              placeholder={"Введите домашнее задание"}
            />
            <Form.Control
              className="my-3"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              aria-label="Date"
              type="date"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={addTopic}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
);

export default ModalAdd;
