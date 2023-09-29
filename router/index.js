const Router = require("express");
const userController = require("../controllers/user-controller");
const router = new Router();
const { body } = require("express-validator");

const { registration, login, logout, refresh, getUsers, activate } =
  userController;

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 8, max: 32 }),
  registration
);
router.post("/login", login);
router.post("/logout", logout);
router.get("/activate/:link", activate);
router.get("/refresh", refresh);
router.get("/users", getUsers);

module.exports = router;
