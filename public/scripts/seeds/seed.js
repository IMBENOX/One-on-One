"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categories_1 = require("./categories");
const providers_1 = require("./providers");
const mongoose_1 = __importDefault(require("mongoose"));
const seedDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect('mongodb://127.0.0.1:27017/OneOnOneDb');
        console.log("Database Connected");
        // Seeding Categories
        yield (0, categories_1.insertCategories)();
        // Seeding Providers
        yield (0, providers_1.insertProvidersServices)();
        // Close the database connection
        yield mongoose_1.default.disconnect();
        console.log("Database Disconnected");
    }
    catch (err) {
        console.error("Error seeding database:", err);
    }
});
seedDatabase();
