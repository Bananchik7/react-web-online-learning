import { makeAutoObservable } from "mobx";

export default class MaterialsContent {
  constructor() {
    this._Materials = [];
    this._GroupStudents = [];
    this._Items = [];
    this._Months = [];
    this._selectedGroupStudents = {};
    this._selectedItems = {};
    this._selectedMonth = {};
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

  setSelectedMonths(Months) {
    this._selectedMonth = Months;
  }
  setSelectedItems(Items) {
    this._selectedItems = Items;
  }
  setSelectedGroupStudents(GroupStudents) {
    this._selectedGroupStudents = GroupStudents;
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

  get selectedMonths() {
    return this._selectedMonth;
  }
  get selectedItems() {
    return this._selectedItems;
  }
  get selectedGroupStudents() {
    return this._selectedGroupStudents;
  }
}
