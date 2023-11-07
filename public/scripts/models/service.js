"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = exports.Provider = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const provider_1 = require("./provider");
const serviceSchema = new mongoose_1.default.Schema({
    name: {
        type: String
    },
    category: {
        type: String
    },
    id: {
        type: String
    },
    description: {
        type: String
    },
    providers: [
        { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Provider' }
    ],
    imageLocation: {
        type: String
    },
});
exports.Provider = mongoose_1.default.model('Provider', provider_1.providerSchema);
exports.Service = mongoose_1.default.model('Service', serviceSchema);
