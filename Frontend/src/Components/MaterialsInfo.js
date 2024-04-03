import { makeAutoObservable } from "mobx";

export default class MaterialsContent {
  constructor() {
    this._Materials = [];
    this._GroupStudents = [];
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
    this._selectedGroupStudents = {};
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

  //
  setSelectedGroupStudents(GroupStudents) {
    this._selectedGroupStudents = GroupStudents;
  }
  //
  get Materials() {
    return this._Materials;
  }
  get GroupStudents() {
    return this._GroupStudents;
  }
  //
  get selectedGroupStudents() {
    return this._selectedGroupStudents;
  }
  //

  get Items() {
    return this._Items;
  }
  get Months() {
    return this._Months;
  }
}
