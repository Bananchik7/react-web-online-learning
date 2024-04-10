const { GroupStudents } = require("../Models/models");

class GroupController {
  async getAll(req, res) {
    const groups = await GroupStudents.findAll();
    return res.json(groups);
  }
}

module.exports = new GroupController();
