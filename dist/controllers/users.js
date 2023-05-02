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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const users_1 = __importDefault(require("../services/users"));
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield users_1.default.getUsers();
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.getUsers = getUsers;
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = +req.params.userId;
        const result = yield users_1.default.getUser(userId);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.getUser = getUser;
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield users_1.default.createUser(req.body);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.createUser = createUser;
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = +req.params.userId;
        const result = yield users_1.default.updateUser(req.body, userId);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = +req.params.userId;
        yield users_1.default.deleteUser(userId);
        res.status(204).json();
    }
    catch (error) {
        next(error);
    }
});
exports.deleteUser = deleteUser;
