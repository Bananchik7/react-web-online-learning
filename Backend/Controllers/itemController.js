const { Items } = require("../Models/models");

class ItemsController {
  async getAll(req, res) {
    const items = await Items.findAll();
    return res.json(items);
  }
}

module.exports = new ItemsController();
