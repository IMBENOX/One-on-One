"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
const ExpressError_1 = require("./utils/ExpressError");
const app = (0, express_1.default)();
const port = 8080;
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const home_1 = __importDefault(require("./routes/home"));
const services_1 = __importDefault(require("./routes/services"));
const signin_1 = __importDefault(require("./routes/signin"));
const signup_1 = __importDefault(require("./routes/signup"));
mongoose_1.default.connect('mongodb://127.0.0.1:27017/OneOnOneDb')
    .then(() => {
    console.log("Mongo Connection Open!");
})
    .catch(err => {
    console.log("Oh No Monge Conection ERROR!!!!");
    console.log(err);
});
app.engine('ejs', ejsMate);
app.set('views', path_1.default.join(__dirname, '../', '/views'));
app.set('view engine', 'ejs');
app.use(express_1.default.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express_1.default.static(path_1.default.join(__dirname, '../', '../', 'public')));
const sessionConfig = {
    secret: 'thisshouldbeabettersecret!',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 27 * 7,
        maxAge: 1000 * 60 * 60 * 27 * 7
    }
};
app.use(session(sessionConfig));
app.use(flash());
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});
app.use('/home', home_1.default);
app.use('/services', services_1.default);
app.use('/signin', signin_1.default);
app.use('/signup', signup_1.default);
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
