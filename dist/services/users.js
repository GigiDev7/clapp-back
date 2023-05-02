"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
const customError_1 = require("../utils/customError");
const interfaces_1 = require("../utils/interfaces");
//helper function to get read users from json file
function getUsersFromFile() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield promises_1.default.readFile("./data.json", { encoding: "utf8" });
        const users = JSON.parse(data);
        return users;
    });
}
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield getUsersFromFile();
    return users;
});
const getUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield getUsersFromFile();
    const user = users.find((el) => el.id === userId);
    if (!user) {
        throw new customError_1.CustomError("User not found", interfaces_1.ErrorTypes.NOTFOUND);
    }
    return user;
});
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield getUsersFromFile();
    const newUser = Object.assign(Object.assign({}, userData), { id: users.at(-1).id + 1 });
    users.push(newUser);
    yield promises_1.default.writeFile("./data.json", JSON.stringify(users));
    return newUser;
});
const updateUser = (userData, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield getUsersFromFile();
    const userIndex = users.findIndex((el) => el.id === userId);
    if (userIndex === -1) {
        throw new customError_1.CustomError("User not found", interfaces_1.ErrorTypes.NOTFOUND);
    }
    const updatedUser = Object.assign({ id: users[userIndex].id }, userData);
    users[userIndex] = updatedUser;
    yield promises_1.default.writeFile("./data.json", JSON.stringify(users));
    return updatedUser;
});
const deleteUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield getUsersFromFile();
    const user = users.find((el) => el.id === userId);
    if (!user) {
        throw new customError_1.CustomError("User not found", interfaces_1.ErrorTypes.NOTFOUND);
    }
    const filteredUsers = users.filter((user) => user.id !== userId);
    yield promises_1.default.writeFile("./data.json", JSON.stringify(filteredUsers));
});
exports.default = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};
