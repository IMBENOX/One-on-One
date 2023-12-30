"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinSchema = exports.signupSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.signupSchema = joi_1.default.object({
    user: joi_1.default.object({
        firstName: joi_1.default.string().pattern(new RegExp(/^[a-zA-ZΑ-Ωα-ωίϊΐόάέύϋΰήώΊΌΆΈΎΏ]{3,}$/)).required(),
        lastName: joi_1.default.string().pattern(new RegExp(/^[a-zA-ZΑ-Ωα-ωίϊΐόάέύϋΰήώΊΌΆΈΎΏ]{3,}$/)).required(),
        email: joi_1.default.string().pattern(new RegExp(/^[a-zA-Z0-9.]{1,}@[a-z]{1,}\.[a-z]{1,}$/)).required(),
        password: joi_1.default.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{4,}$/)).required(),
        gender: joi_1.default.string().allow(''),
        service: joi_1.default.string().allow(''),
        fitnessCategory: joi_1.default.string().allow(''),
        suggestions: joi_1.default.string().allow(''),
        sendInfo: joi_1.default.string().allow(''),
    }).required()
});
exports.signinSchema = joi_1.default.object({
    username: joi_1.default.string().pattern(new RegExp(/^[a-zA-Z]{3,}$/)).required(),
    password: joi_1.default.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{4,}$/)).required(),
});
