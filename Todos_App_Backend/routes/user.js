const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user");

router.get("/", (req, res) => {
  res.send("Hello");
});
router.post("/register", userControllers.userRegister);
router.post("/signin", userControllers.signIn);

module.exports = router;
