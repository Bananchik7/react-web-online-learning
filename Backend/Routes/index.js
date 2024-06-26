const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const helpRouter = require("./helpRouter");
const materialsRouter = require("./materialsRouter");
const groupRouter = require("./groupRouter");
const itemRouter = require("./itemRouter");
const monthRouter = require("./monthRouter");
const gradesRouter = require("./gradesRouter");
const studentRouter = require("./studentRouter");
const topicRouter = require("./topicRouter");

router.use("/user", userRouter);
router.use("/help", helpRouter);
router.use("/materials", materialsRouter);
router.use("/group", groupRouter);
router.use("/item", itemRouter);
router.use("/month", monthRouter);
router.use("/students", studentRouter);
router.use("/grades", gradesRouter);
router.use("/topic", topicRouter);

module.exports = router;
