import { makeAutoObservable } from "mobx";

export default class MaterialsContent {
  constructor() {
    this._Materials = [
      {
        MaterialID: 1,
        Name: "Учебник математики. Роль математики в жизни людей и общества.",
        Video: "ffdc5c81-42ad-49a7-962c-a48f225b2d26.mp4",
        File: "3720c4e3-8f16-4fb7-b82a-c312e17bcb46.docx",
      },
      {
        MaterialID: 2,
        Name: "БЗЗЗЗЗЗ",
        Video: "ffdc5c81-42ad-49a7-962c-a48f225b2d26.mp4",
        File: "3720c4e3-8f16-4fb7-b82a-c312e17bcb46.docx",
      },
    ];
    this._GroupStudents = [
      {
        GroupID: 1,
        Name: "1 А",
      },
      {
        GroupID: 2,
        Name: "2 А",
      },
      {
        GroupID: 3,
        Name: "3 А",
      },
      {
        GroupID: 4,
        Name: "4 А",
      },
      {
        GroupID: 5,
        Name: "1 Б",
      },
      {
        GroupID: 6,
        Name: "2 Б",
      },
      {
        GroupID: 7,
        Name: "3 Б",
      },
      {
        GroupID: 8,
        Name: "4 Б",
      },
    ];
    this._Items = [
      {
        ItemID: 1,
        Name: "Алгебра",
      },
      {
        ItemID: 2,
        Name: "Геометрия",
      },
      {
        ItemID: 3,
        Name: "Математика",
      },
      {
        ItemID: 4,
        Name: "Русский язык",
      },
      {
        ItemID: 5,
        Name: "Английский язык",
      },
    ];
    this._Months = [
      {
        MonthID: 1,
        Name: "Январь",
      },
      {
        MonthID: 2,
        Name: "Февраль",
      },
      {
        MonthID: 3,
        Name: "Март",
      },
      {
        MonthID: 4,
        Name: "Апрель",
      },
      {
        MonthID: 5,
        Name: "Май",
      },
      {
        MonthID: 6,
        Name: "Июнь",
      },
    ];
    makeAutoObservable(this);
  }

  setMaterials(Materials) {
    this._Materials = Materials;
  }
  setGroupStudents(GroupStudents) {
    this._GroupStudents = GroupStudents;
  }
  setItems(Items) {
    this._Items = Items;
  }
  setMonths(Months) {
    this._Months = Months;
  }
  get Materials() {
    return this._Materials;
  }
  get GroupStudents() {
    return this._GroupStudents;
  }
  get Items() {
    return this._Items;
  }
  get Months() {
    return this._Months;
  }
}
