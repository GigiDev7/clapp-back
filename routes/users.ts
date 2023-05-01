import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/users";
import { userDataValidator } from "../middlewares/userValidator";
import { validationHandler } from "../middlewares/validationHandler";

const router = express.Router();

router
  .route("/")
  .get(getUsers)
  .post(userDataValidator, validationHandler, createUser);
router
  .route("/:userId")
  .get(getUser)
  .put(userDataValidator, validationHandler, updateUser)
  .delete(deleteUser);

export default router;
