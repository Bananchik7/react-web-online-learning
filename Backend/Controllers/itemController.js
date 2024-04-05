const { Items } = require("../Models/models");
const ApiError = require("../Error/ApiError");

class ItemsController {
  //async create(req, res) {
  //  const { name } = req.body;
  //  const group = await GroupStudents.create({ name });
  //  return res.json(group);
  //}

  async getAll(req, res) {
    const items = await Items.findAll();
    return res.json(items);
  }
}

module.exports = new ItemsController();
