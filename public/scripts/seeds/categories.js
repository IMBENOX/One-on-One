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
exports.insertCategories = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const category_1 = require("../models/category");
mongoose_1.default.connect('mongodb://127.0.0.1:27017/OneOnOneDb')
    .then(() => {
    console.log("Database Connected");
})
    .catch(err => {
    console.log("Conection error");
    console.log(err);
});
const seedCategories = [
    {
        name: 'Fitness',
        backgroundColor: '#e76f51',
    },
    {
        name: 'Cosmetology',
        backgroundColor: '#a2d2ff',
    },
    {
        name: 'Home Repairs',
        backgroundColor: '#2a9d8f',
    },
    {
        name: 'Teaching',
        backgroundColor: '#e9c46a',
    },
    {
        name: 'Health',
        backgroundColor: '#ffc8dd',
    },
];
const insertCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    yield category_1.Category.deleteMany({});
    yield category_1.Category.insertMany(seedCategories)
        .then(res => {
        // console.log("Categories Inserted:");
        // console.log(res);
    });
});
exports.insertCategories = insertCategories;
// insertCategories();
