import { makeAutoObservable } from "mobx";

export default class TopicContent {
  constructor() {
    this._TopicLessons = [];
    this._GroupStudents = [];
    this._Items = [];
    this._Months = [];
    this._selectedGroupStudents = {};
    this._selectedItems = {};
    this._selectedMonth = {};
    makeAutoObservable(this);
  }

  setTopicLessons(TopicLessons) {
    this._TopicLessons = TopicLessons;
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

  get TopicLessons() {
    return this._TopicLessons;
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
