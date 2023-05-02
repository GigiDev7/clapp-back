"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(message, name) {
        super(message);
        this.name = name;
    }
}
exports.CustomError = CustomError;
