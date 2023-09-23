import express, {ErrorRequestHandler} from "express";
import path from "path";
import mongoose from "mongoose";
import { ExpressError } from "./utils/ExpressError";

const app = express();
const port = 8080;
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
import {Customer} from './models/customer';

import homeRoutes from './routes/home';
import serviceRoutes from './routes/services';
import customerRoutes from './routes/customer';

mongoose.connect('mongodb://127.0.0.1:27017/OneOnOneDb')
    .then(() => {
        console.log("Mongo Connection Open!")
    })
    .catch(err => {
        console.log("Oh No Monge Conection ERROR!!!!")
        console.log(err)
    })

app.engine('ejs',ejsMate);
app.set('views', path.join(__dirname,'../', '/views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'../','../','public')))

const sessionConfig = {
    secret: 'thisshouldbeabettersecret!',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true, 
        expires: Date.now() + 1000 * 60 * 60 * 27 * 7,
        maxAge: 1000 * 60 * 60 * 27 * 7
    }
}
app.use(session(sessionConfig))
app.use(flash());

app.use(passport.initialize()); //Initializes Passport.js, setting up its internal state and creating an instance of the Passport object.
app.use(passport.session()); //Passport.js allows you to store user authentication information in sessions to maintain a user's logged-in state across multiple HTTP requests. The passport.session() middleware is necessary to enable this feature.
passport.use(new LocalStrategy(Customer.authenticate()))//You are creating a new instance of the "LocalStrategy" and passing the Customer.authenticate() function as its parameter. LocalStrategy is a strategy provided by Passport.js for authenticating users with a username and password.Customer.authenticate() is a function that is typically provided by Mongoose when using passport-local-mongoose or a similar plugin. This function is used to authenticate users based on their username and password. It takes in the provided username and password, checks them against the user data stored in your MongoDB database, and returns a user object if the authentication is successful or false if it fails.

passport.serializeUser(Customer.serializeUser())//This is a Passport.js function used to specify how a user object should be serialized into the session. Serialization means converting a complex object (in this case, a user object) into a simple form that can be stored in the session.
passport.deserializeUser(Customer.deserializeUser());//This does the opposite of serializeUser.

app.use((req, res, next) => {
    res.locals.currentUser = req.user; //req.user is typically set by Passport.js when a user is authenticated. It contains information about the authenticated user.
    res.locals.success = req.flash('success'); 
    res.locals.error = req.flash('error');
    next();
})

app.use('/',customerRoutes)
app.use('/home', homeRoutes);
app.use('/services', serviceRoutes)

app.all('*', (req, res, next) => {
next(new ExpressError('Page not found', 404))
})

const errorHandler: ErrorRequestHandler = (err, req, res , next) => {
    const {statusCode= 500} = err;
    if(!err.message) err.message = 'Somethink Went Wrong!'
    res.status(statusCode).render('error',{err});

}

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});


