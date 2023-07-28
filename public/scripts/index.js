"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const port = 3000;
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
app.get('/home', (req, res) => {
    res.render('home');
});
app.get('/services', (req, res) => {
    res.render('services');
});
app.get('/signup', (req, res) => {
    res.render('signup');
});
app.post('/signup', async (req, res) => {
    console.log(req.body);
    const newCustomer = new customer_1.Customer(req.body);
    await newCustomer.save()
        .then(() => {
        res.redirect('/home');
    })
        .catch((e) => {
        res.render(e);
    });
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
