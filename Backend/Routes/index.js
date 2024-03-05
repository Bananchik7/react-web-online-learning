const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const helpRouter = require("./helpRouter");

router.use("/user", userRouter);
router.use("/help", helpRouter);

module.exports = router;
