import { makeAutoObservable } from "mobx";

export default class AllInfo {
  constructor() {
    this._Materials = [
      {
        MaterialID: 1,
        Name: "Учебник математики. Роль математики в жизни людей и общества.",
        Video: "ffdc5c81-42ad-49a7-962c-a48f225b2d26.mp4",
        File: "3720c4e3-8f16-4fb7-b82a-c312e17bcb46.docx",
      },
    ];
    makeAutoObservable(this);
  }
  setMaterials(types) {
    this._Materials = Materials;
  }

  get Materials() {
    return this._Materials;
  }
}
