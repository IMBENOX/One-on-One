"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const categorySchema = new mongoose_1.default.Schema({
    name: {
        type: String
    },
    id: {
        type: String
    },
    objectsId: {
        type: String
    },
    isSelected: {
        type: Boolean
    },
    icon: {
        type: String
    },
    backgroundColor: {
        type: String
    },
    htmlLocation: {
        type: String
    },
});
exports.Category = mongoose_1.default.model('Category', categorySchema);