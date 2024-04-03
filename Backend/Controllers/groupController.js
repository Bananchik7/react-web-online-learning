const { GroupStudents } = require("../Models/models");
const ApiError = require("../Error/ApiError");

class GroupController {
  async create(req, res) {
    const { name } = req.body;
    const group = await GroupStudents.create({ name });
    return res.json(group);
  }

  async getAll(req, res) {
    const groups = await GroupStudents.findAll();
    return res.json(groups);
  }
}

module.exports = new GroupController();
