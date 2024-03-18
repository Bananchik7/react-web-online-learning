const uuid = require("uuid");
const path = require("path");
const { Materials } = require("../Models/models");
const ApiError = require("../Error/ApiError");
const fileUpload = require("express-fileupload");

class MaterialsController {
  async create(req, res, next) {
    try {
      const { Name, GroupID, ItemID, MonthID } = req.body;
      const { Video } = req.files;
      const { File } = req.files;
      let fileNameVideo = uuid.v4() + ".mp4";
      let fileNameFile = uuid.v4() + ".docx";
      Video.mv(path.resolve(__dirname, "..", "Static", fileNameVideo));
      File.mv(path.resolve(__dirname, "..", "Static", fileNameFile));

      const material = await Materials.create({
        Name,
        GroupID,
        ItemID,
        MonthID,
        Video: fileNameVideo,
        File: fileNameFile,
      });

      return res.json(material);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    const { GroupID, ItemID, MonthID } = req.query;
    let material;
    if (!GroupID && !ItemID && !MonthID) {
      material = await Materials.findAll({
        where: {
          GroupID: 1,
          ItemID: 1,
          MonthID: 1,
        },
      });
    }
    return res.json(material);
  }
  async patch(req, res) {}
  async delete(req, res) {}
}

module.exports = new MaterialsController();
