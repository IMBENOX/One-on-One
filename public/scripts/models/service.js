"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const serviceSchema = new mongoose_1.default.Schema({
    name: {
        type: String
    },
    category: {
        type: String
    },
    description: {
        type: String
    },
    providers: {
        type: [String]
    },
    imageLocation: {
        type: String
    },
});
exports.Service = mongoose_1.default.model('Service', serviceSchema);
