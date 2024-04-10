const Router = require("express");
const router = new Router();
const StudentsController = require("../Controllers/studentsController");

router.get("/", StudentsController.getAll);

module.exports = router;
