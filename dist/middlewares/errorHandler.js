"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const interfaces_1 = require("../utils/interfaces");
const errorHandler = (err, req, res, next) => {
    if (err.name === interfaces_1.ErrorTypes.NOTFOUND) {
        return res.status(404).json({ msg: err.message || "Not Found" });
    }
};
exports.errorHandler = errorHandler;
