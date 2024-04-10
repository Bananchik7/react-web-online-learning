const Router = require("express");
const router = new Router();
const GradeController = require("../Controllers/gradeController");

router.get("/", GradeController.getAll);

module.exports = router;
