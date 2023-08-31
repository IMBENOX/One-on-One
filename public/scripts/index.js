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
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
const ExpressError_1 = require("./utils/ExpressError");
const catchAsync_1 = require("./utils/catchAsync");
const schemas_1 = require("./schemas");
const app = (0, express_1.default)();
const port = 8080;
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
app.engine('ejs', ejsMate);
app.set('views', path_1.default.join(__dirname, '../', '/views'));
app.set('view engine', 'ejs');
app.use(express_1.default.static(path_1.default.join(__dirname, '../', '../', 'public')));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
const validateUserDetails = (req, res, next) => {
    const { error } = schemas_1.signupSchema.validate(req.body);
    console.log(error);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError_1.ExpressError(msg, 400);
    }
    else {
        next();
    }
};
mongoose_1.default.connect('mongodb://127.0.0.1:27017/OneOnOneDb')
    .then(() => {
    console.log("Mongo Connection Open!");
})
    .catch(err => {
    console.log("Oh No Monge Conection ERROR!!!!");
    console.log(err);
});
const customer_1 = require("./models/customer");
const category_1 = require("./models/category");
const service_1 = require("./models/service");
app.get('/home', (req, res) => {
    res.render('home');
});
app.get('/services', (0, catchAsync_1.wrapAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield category_1.Category.find({});
    res.render('services', { categories });
})));
app.get('/services/:category', (0, catchAsync_1.wrapAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category } = req.params;
    const arr = category.split('-');
    arr.forEach((str, index) => {
        arr[index] = str.charAt(0).toUpperCase() + str.slice(1);
    });
    const correctCategoryName = arr.join(' ');
    const foundCategory = yield category_1.Category.find({ name: correctCategoryName });
    if (foundCategory.length === 0)
        throw new ExpressError_1.ExpressError(`There is not a Category with name ${category}`, 404);
    const foundServices = yield service_1.Service.find({ category: correctCategoryName });
    if (foundServices.length === 0)
        throw new ExpressError_1.ExpressError(`There are not services in the Category ${category}`, 404);
    res.render('about', { foundServices, foundCategory });
})));
app.get('/services/:category/:service', (0, catchAsync_1.wrapAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { service, category } = req.params;
    const foundService = yield service_1.Service.find({ name: service }).populate('providers');
    if (foundService.length === 0)
        throw new ExpressError_1.ExpressError(`There are not provider for  ${service} in ${category} Category`, 404);
    res.render('providers', { service, category, foundService });
})));
app.get('/signup', (req, res) => {
    res.render('signup');
});
app.post('/signup', validateUserDetails, (0, catchAsync_1.wrapAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newCustomer = new customer_1.Customer(req.body.user);
    yield newCustomer.save()
        .then(() => {
        res.redirect('/home');
    })
        .catch((e) => {
        res.render(e);
    });
})));
app.all('*', (req, res, next) => {
    next(new ExpressError_1.ExpressError('Page not found', 404));
});
const errorHandler = (err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message)
        err.message = 'Somethink Went Wrong!';
    res.status(statusCode).render('error', { err });
};
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
