const { Months } = require("../Models/models");

class MonthsController {
  async getAll(req, res) {
    const months = await Months.findAll();
    return res.json(months);
  }
}

module.exports = new MonthsController();
