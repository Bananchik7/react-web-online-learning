const { Grades } = require("../Models/models");

class GradeController {
  async getAll(req, res) {
    const { GroupID = 1, ItemID = 1 } = req.query;
    let grades;
    grades = await Grades.findAll({
      where: {
        GroupID: GroupID,
        ItemID: ItemID,
      },
    });
    return res.json(grades);
  }
}

module.exports = new GradeController();
