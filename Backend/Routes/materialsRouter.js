const Router = require("express");
const router = new Router();
const materialsController = require("../Controllers/materialsController");

router.post("/", materialsController.create);
router.get("/", materialsController.getAll);
router.delete("/:id", materialsController.delete);

module.exports = router;
