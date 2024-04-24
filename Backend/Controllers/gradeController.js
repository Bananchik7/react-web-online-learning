const { Grades } = require("../Models/models");

class GradeController {
  async getAll(req, res) {
    const { GroupID = 1, ItemID = 1, MonthID = 1 } = req.query;
    let grades;
    grades = await Grades.findAll({
      where: {
        GroupID: GroupID,
        ItemID: ItemID,
        MonthID: MonthID,
      },
    });
    return res.json(grades);
  }

  async create(req, res) {
    const { Grade, DataGrade, StudentID, GroupID, ItemID, MonthID } = req.body;

    const grades = await Grades.create({
      Grade,
      DataGrade,
      StudentID,
      GroupID,
      ItemID,
      MonthID,
    });

    return res.json(grades);
  }
}

module.exports = new GradeController();
