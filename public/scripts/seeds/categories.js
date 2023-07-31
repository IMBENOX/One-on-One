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
        id: 'fitnessCategory',
        objectsId: 'fitnessCatalog',
        isSelected: true,
        icon: 'url("images/fitnessIcon.jpg")',
        backgroundColor: '#e76f51',
        htmlLocation: 'about.html',
    },
    {
        name: 'Cosmetology',
        id: 'cosmetologyCategory',
        objectsId: 'cosmetologyCatalog',
        isSelected: false,
        icon: 'url("images/cosmetologyIcon.jpg")',
        backgroundColor: '#a2d2ff',
        htmlLocation: 'about.html',
    },
    {
        name: 'Home Repairs',
        id: 'homeRepairsCategory',
        objectsId: 'homeRepairsCatalog',
        isSelected: false,
        icon: 'url("images/homeRepairsIcon.jpg")',
        backgroundColor: '#2a9d8f',
        htmlLocation: 'about.html',
    },
    {
        name: 'Teaching',
        id: 'teachingCategory',
        objectsId: 'teachingCatalog',
        isSelected: false,
        icon: 'url("images/teachingIcon.jpg")',
        backgroundColor: '#e9c46a',
        htmlLocation: 'about.html',
    },
    {
        name: 'Health',
        id: 'healthCategory',
        objectsId: 'healthCatalog',
        isSelected: false,
        icon: 'url("images/healthIcon.jpg")',
        backgroundColor: '#ffc8dd',
        htmlLocation: 'about.html',
    },
];
const insertCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    yield category_1.Category.deleteMany({});
    yield category_1.Category.insertMany(seedCategories)
        .then(res => {
        console.log("Data Inserted:");
        // console.log(res);
    });
});
insertCategories();
