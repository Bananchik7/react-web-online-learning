const { Students } = require("../Models/models");

class StudentsController {
  async getAll(req, res) {
    const { GroupID = 1 } = req.query;
    let students;
    students = await Students.findAll({
      where: {
        GroupID: GroupID,
      },
    });
    return res.json(students);
  }
}

module.exports = new StudentsController();
