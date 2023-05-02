"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDataValidator = void 0;
const express_validator_1 = require("express-validator");
exports.userDataValidator = (0, express_validator_1.checkSchema)({
    email: {
        in: ["body"],
        trim: true,
        isEmail: {
            errorMessage: "Invalid email",
        },
    },
    name: {
        in: ["body"],
        trim: true,
        isString: {
            errorMessage: "Please provide name",
        },
    },
    gender: {
        in: ["body"],
        isString: {
            errorMessage: "Please provide gender",
        },
    },
    phone: {
        in: ["body"],
        trim: true,
        isString: {
            errorMessage: "Please provide phone number",
        },
    },
    "address.street": {
        in: ["body"],
        isString: {
            errorMessage: "Please provide street",
        },
    },
    "address.city": {
        in: ["body"],
        isString: {
            errorMessage: "Please provide city",
        },
    },
});
