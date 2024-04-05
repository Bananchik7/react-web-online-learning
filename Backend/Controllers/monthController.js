const { Months } = require("../Models/models");
const ApiError = require("../Error/ApiError");

class MonthsController {
  //async create(req, res) {
  //  const { name } = req.body;
  //  const group = await GroupStudents.create({ name });
  //  return res.json(group);
  //}

  async getAll(req, res) {
    const months = await Months.findAll();
    return res.json(months);
  }
}

module.exports = new MonthsController();
