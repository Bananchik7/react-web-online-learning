const { Grades } = require("../Models/models");

class GradeController {
  async getAll(req, res) {
    let grades;
    grades = await Grades.findAll();
    return res.json(grades);
  }
}

module.exports = new GradeController();
