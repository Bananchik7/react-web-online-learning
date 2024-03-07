const Router = require("express");
const router = new Router();
const materialsController = require("../Controllers/materialsController");

router.post("/", materialsController.create);
router.get("/", materialsController.getAll);
router.patch("/:id", materialsController.patch);
router.delete("/:id", materialsController.delete);

module.exports = router;
