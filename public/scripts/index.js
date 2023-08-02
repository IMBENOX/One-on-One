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
const app = (0, express_1.default)();
const port = 8080;
const methodOverride = require('method-override');
app.set('views', path_1.default.join(__dirname, '../', '/views'));
app.set('view engine', 'ejs');
app.use(express_1.default.static(path_1.default.join(__dirname, '../', '../', 'public')));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
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
const provider_1 = require("./models/provider");
app.get('/home', (req, res) => {
    res.render('home');
});
app.get('/services', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield category_1.Category.find({});
    res.render('services', { categories });
}));
app.get('/services/:category', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category } = req.params;
    const foundServices = yield service_1.Service.find({ category: category });
    res.render('about', { foundServices, category });
}));
app.get('/services/:category/:service', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { service, category } = req.params;
    const foundProviders = yield provider_1.Provider.find({ service: service });
    res.render('providers', { foundProviders, service, category });
}));
app.get('/signup', (req, res) => {
    res.render('signup');
});
app.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const newCustomer = new customer_1.Customer(req.body);
    yield newCustomer.save()
        .then(() => {
        res.redirect('/home');
    })
        .catch((e) => {
        res.render(e);
    });
}));
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
