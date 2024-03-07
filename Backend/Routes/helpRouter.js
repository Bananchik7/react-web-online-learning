const Router = require("express");
const router = new Router();
const helpController = require("../Controllers/helpController");

router.post("/", helpController.create);

module.exports = router;
