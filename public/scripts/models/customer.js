"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const passport_local_mongoose_1 = __importDefault(require("passport-local-mongoose"));
const customerSchema = new mongoose_1.default.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, 'Email cannot be blank'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password cannot be blank']
    },
    gender: {
        type: String,
    },
    servise: {
        type: String,
    },
    fitnessCategory: {
        type: Number,
    },
    suggestions: {
        type: String,
    },
    sendInfo: {
        type: String,
        default: 'false',
    }
});
customerSchema.plugin(passport_local_mongoose_1.default);
exports.Customer = mongoose_1.default.model('Customer', customerSchema);
