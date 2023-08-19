"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.signupSchema = joi_1.default.object({
    user: joi_1.default.object({
        firstName: joi_1.default.string().required(),
        lastName: joi_1.default.string().required(),
        email: joi_1.default.string().required(),
        gender: joi_1.default.string().allow(''),
        service: joi_1.default.string().allow(''),
        fitnessCategory: joi_1.default.string().allow(''),
        suggestions: joi_1.default.string().allow(''),
        sendInfo: joi_1.default.string().allow(''),
    }).required()
});
