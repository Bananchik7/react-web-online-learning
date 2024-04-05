const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const helpRouter = require("./helpRouter");
const materialsRouter = require("./materialsRouter");
const groupRouter = require("./groupRouter");
const itemRouter = require("./itemRouter");
const monthRouter = require("./monthRouter");

router.use("/user", userRouter);
router.use("/help", helpRouter);
router.use("/materials", materialsRouter);
router.use("/group", groupRouter);
router.use("/item", itemRouter);
router.use("/month", monthRouter);

module.exports = router;
