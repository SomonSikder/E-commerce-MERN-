const routes = require("express").Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
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
  userDetails,
  updatePassword,
  deleteUser,
} = require("../controller/userController");

routes.post("/registration", createUser);
routes.post("/login", loginUser);
routes.get("/logout", logoutUser);
routes.post("/password/forgot", forgotPassword);
routes.put("/password/reset/:token", resetPassword);
routes.get("/me", isAuthenticatedUser, userDetails);
routes.put("/me/update-password", isAuthenticatedUser, updatePassword);
routes.put("/me/update-info", isAuthenticatedUser, updateProfile);
routes.get(
  "/admin/all-users",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAllUsers
);
routes.get(
  "/admin/single-user/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getSingleUser
);
routes.put(
  "/admin/update-role/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateUserRole
);

routes.delete(
  "/admin/delete-user/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteUser
);
module.exports = routes;
