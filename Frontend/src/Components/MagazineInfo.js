import { makeAutoObservable } from "mobx";

export default class MagazineContent {
  constructor() {
    this._Grades = [];
    this._Students = [];
    this._GroupStudents = [];
    this._Items = [];
    this._Months = [];
    this._selectedGroupStudents = {};
    this._selectedItems = {};
    this._selectedMonths = {};
    this._selectedStudents = {};
    makeAutoObservable(this);
  }
  setGrades(Grades) {
    this._Grades = Grades;
  }
  setStudents(Students) {
    this._Students = Students;
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
    this._selectedMonths = Months;
  }
  setSelectedStudents(Students) {
    this._selectedStudents = Students;
  }
  setSelectedItems(Items) {
    this._selectedItems = Items;
  }
  setSelectedGroupStudents(GroupStudents) {
    this._selectedGroupStudents = GroupStudents;
  }
  get Grades() {
    return this._Grades;
  }
  get Students() {
    return this._Students;
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
    return this._selectedMonths;
  }
  get selectedItems() {
    return this._selectedItems;
  }
  get selectedStudents() {
    return this._selectedStudents;
  }
  get selectedGroupStudents() {
    return this._selectedGroupStudents;
  }
}
