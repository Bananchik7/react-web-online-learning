import { makeAutoObservable } from "mobx";

export default class UserAuth {
  constructor() {
    this._isAuth = false;
    this._Accounts = {};
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }
  setAccounts(Accounts) {
    this._Accounts = Accounts;
  }

  get isAuth() {
    return this._isAuth;
  }
  get Accounts() {
    return this._Accounts;
  }
}
