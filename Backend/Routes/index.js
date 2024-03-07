const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const helpRouter = require("./helpRouter");
const materialsRouter = require("./materialsRouter");

router.use("/user", userRouter);
router.use("/help", helpRouter);
router.use("/materials", materialsRouter);

module.exports = router;
