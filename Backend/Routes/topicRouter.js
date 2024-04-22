const Router = require("express");
const router = new Router();
const topicController = require("../Controllers/topicController");

router.post("/", topicController.create);
router.get("/", topicController.getAll);

module.exports = router;
