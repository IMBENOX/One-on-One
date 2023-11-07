"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.providerSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.providerSchema = new mongoose_1.default.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    info: {
        type: String,
    },
    gender: {
        type: String,
    },
    service: {
        type: String,
    },
    imageLocation: {
        type: String,
    },
});
