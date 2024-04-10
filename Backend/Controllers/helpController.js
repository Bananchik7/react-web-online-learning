const { Help } = require("../Models/models");

class HelpController {
  async create(req, res) {
    const { Subject } = req.body;
    const { TextHelp } = req.body;
    const help = await Help.create({ Subject, TextHelp });
    return res.json(help);
  }
}

module.exports = new HelpController();
