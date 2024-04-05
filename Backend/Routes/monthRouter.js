const Router = require("express");
const router = new Router();
const monthsController = require("../Controllers/monthController");

router.get("/", monthsController.getAll);

module.exports = router;
