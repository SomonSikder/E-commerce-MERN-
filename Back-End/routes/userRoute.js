const routes = require("express").Router();
const {
  createUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  getSingleUser,
  getAllUsers,
  updateProfile,
  updateUserRole,
  updatePassword,
  deleteUser,
} = require("../controller/userController");

routes.post("/registration", createUser);
routes.post("/login", loginUser);
routes.get("/logout", logoutUser);
router.post("/password/forgot", forgotPassword);

module.exports = routes;
