const Router = require("express");
const userController = require("../controllers/user-controller");

const router = new Router();

const { registration, login, logout, refresh, getUsers, activate } =
  userController;

router.post("/registration", registration);
router.post("/login", login);
router.post("/logout", logout);
router.get("/activate/:link", activate);
router.get("/refresh", refresh);
router.get("/users", getUsers);

module.exports = router;
