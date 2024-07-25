import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../index.js";
import { createMaterials } from "../../http/materialsAPI.js";
import { observer } from "mobx-react-lite";
import { fetchGroup, fetchItem, fetchMonth } from "../../http/allAPI.js";

export const ModalAdd = observer(
  ({ show, onHide, valueGroup, valueMonth, valueItem }) => {
    const { material } = useContext(Context);
    const [name, setName] = useState("");
    const [file, setFile] = useState(null);
    const [video, setVideo] = useState(null);

    useEffect(() => {
      fetchGroup().then((data) => material.setGroupStudents(data));
      fetchItem().then((data) => material.setItems(data));
      fetchMonth().then((data) => material.setMonths(data));
      //eslint-disable-next-line
    }, []);

    const selectFile = (e) => {
      setFile(e.target.files[0]);
    };
    const selectVideo = (e) => {
      setVideo(e.target.files[0]);
    };

    const addMaterial = () => {
      const formData = new FormData();
      if (name !== 0 && file !== null && video !== null) {
        formData.append("Name", name);
        formData.append("File", file);
        formData.append("Video", video);
        formData.append("GroupID", valueGroup);
        formData.append("ItemID", valueItem);
        formData.append("MonthID", valueMonth);
        createMaterials(formData).then((data) => onHide());
      } else {
        alert("Введены не корректные данные");
      }
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
            <Form.Label className="mx-3">
              Выберите видео (формат .mp4)
            </Form.Label>
            <Form.Control
              className="my-2"
              type="file"
              onChange={selectVideo}
              accept=".mp4"
            />
            <Form.Label className="mx-3 mt-3">
              Выберите файл (формат .doc)
            </Form.Label>
            <Form.Control
              className="my-2"
              type="file"
              onChange={selectFile}
              accept=".doc, .docx"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={addMaterial}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
);

export default ModalAdd;
