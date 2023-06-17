const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user");
const isAuth = require("../middleware/isAuth");

router.post("/register", userControllers.userRegister);
router.post("/signin", userControllers.signIn);
router.get("/userdata", isAuth, userControllers.getUserData);
router.post("/uploadimage", isAuth, userControllers.postUploadImage);
router.put("/edit-user", isAuth, userControllers.editUser);

module.exports = router;
