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

import home from './routes/home';
import services from './routes/services';
import signin from './routes/signin';
import signup from './routes/signup'

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

app.use((req, res, next) => {
    res.locals.success = req.flash('success'); 
    res.locals.error = req.flash('error');
    next();
})

app.use('/home', home);
app.use('/services', services)
app.use('/signin', signin);
app.use('/signup', signup);


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


