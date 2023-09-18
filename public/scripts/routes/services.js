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
const express_1 = __importDefault(require("express"));
const catchAsync_1 = require("../utils/catchAsync");
const service_1 = require("../models/service");
const category_1 = require("../models/category");
const router = express_1.default.Router();
router.get('/', (0, catchAsync_1.wrapAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield category_1.Category.find({});
    res.render('services', { categories });
})));
router.get('/:category', (0, catchAsync_1.wrapAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category } = req.params;
    const arr = category.split('-');
    arr.forEach((str, index) => {
        arr[index] = str.charAt(0).toUpperCase() + str.slice(1);
    });
    const correctCategoryName = arr.join(' ');
    const foundCategory = yield category_1.Category.find({ name: correctCategoryName });
    if (foundCategory.length === 0) {
        req.flash('error', `There is not a Category with name ${category}`);
        return res.redirect(`/services`);
    }
    const foundServices = yield service_1.Service.find({ category: correctCategoryName });
    if (foundServices.length === 0) {
        req.flash('error', `There are not services in the Category ${category}`);
        return res.redirect(`/services`);
    }
    res.render('about', { foundServices, foundCategory });
})));
router.get('/:category/:service', (0, catchAsync_1.wrapAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { service, category } = req.params;
    console.log(category);
    const foundService = yield service_1.Service.find({ name: service }).populate('providers');
    if (foundService.length === 0) {
        req.flash('error', `There are not providers for  ${service} in ${category} Category`);
        return res.redirect(`/services/${category}`);
    }
    res.render('providers', { service, category, foundService });
})));
exports.default = router;
