import Modal from "react-bootstrap/Modal";
import { Button, Dropdown, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { Context } from "../../index.js";

export default function ModalAdd({ show, onHide }) {
  const { content } = useContext(Context);
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить тему
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="d-inline mx-2 ">
            <Dropdown.Toggle variant="secondary">
              Выберите месяц
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {content.Months.map((item) => (
                <Dropdown.Item key={item.MonthID}>{item.Name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle variant="secondary">
              Выберите класс
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {content.GroupStudents.map((item) => (
                <Dropdown.Item key={item.GroupID}>{item.Name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle variant="secondary">
              Выберите предмет
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {content.Items.map((item) => (
                <Dropdown.Item key={item.ItemID}>{item.Name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className="my-4"
            placeholder={"Введите название темы"}
          />
          <Form.Control className="my-4" type="file" />
          <Form.Control className="my-4" type="file" />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
