"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("../controllers/users");
const userValidator_1 = require("../middlewares/userValidator");
const validationHandler_1 = require("../middlewares/validationHandler");
const router = express_1.default.Router();
router
    .route("/")
    .get(users_1.getUsers)
    .post(userValidator_1.userDataValidator, validationHandler_1.validationHandler, users_1.createUser);
router
    .route("/:userId")
    .get(users_1.getUser)
    .put(userValidator_1.userDataValidator, validationHandler_1.validationHandler, users_1.updateUser)
    .delete(users_1.deleteUser);
exports.default = router;
