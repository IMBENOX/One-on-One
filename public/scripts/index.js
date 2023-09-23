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
const passport = require('passport');
const LocalStrategy = require('passport-local');
const customer_1 = require("./models/customer");
const home_1 = __importDefault(require("./routes/home"));
const services_1 = __importDefault(require("./routes/services"));
const customer_2 = __importDefault(require("./routes/customer"));
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
app.use(passport.initialize()); //Initializes Passport.js, setting up its internal state and creating an instance of the Passport object.
app.use(passport.session()); //Passport.js allows you to store user authentication information in sessions to maintain a user's logged-in state across multiple HTTP requests. The passport.session() middleware is necessary to enable this feature.
passport.use(new LocalStrategy(customer_1.Customer.authenticate())); //You are creating a new instance of the "LocalStrategy" and passing the Customer.authenticate() function as its parameter. LocalStrategy is a strategy provided by Passport.js for authenticating users with a username and password.Customer.authenticate() is a function that is typically provided by Mongoose when using passport-local-mongoose or a similar plugin. This function is used to authenticate users based on their username and password. It takes in the provided username and password, checks them against the user data stored in your MongoDB database, and returns a user object if the authentication is successful or false if it fails.
passport.serializeUser(customer_1.Customer.serializeUser()); //This is a Passport.js function used to specify how a user object should be serialized into the session. Serialization means converting a complex object (in this case, a user object) into a simple form that can be stored in the session.
passport.deserializeUser(customer_1.Customer.deserializeUser()); //This does the opposite of serializeUser.
app.use((req, res, next) => {
    res.locals.currentUser = req.user; //req.user is typically set by Passport.js when a user is authenticated. It contains information about the authenticated user.
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});
app.use('/', customer_2.default);
app.use('/home', home_1.default);
app.use('/services', services_1.default);
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
