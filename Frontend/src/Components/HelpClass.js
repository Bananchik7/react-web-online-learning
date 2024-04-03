import { makeAutoObservable } from "mobx";

export default class HelpClass {
  constructor() {
    this._helps = [];
    makeAutoObservable(this);
  }
  setHelps(helps) {
    this._helps = helps;
  }
}
