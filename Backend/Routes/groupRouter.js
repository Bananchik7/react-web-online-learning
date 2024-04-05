const Router = require("express");
const router = new Router();
const groupController = require("../Controllers/groupController");

router.get("/", groupController.getAll);

module.exports = router;
