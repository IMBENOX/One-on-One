import express, {Express, Request, Response, NextFunction, ErrorRequestHandler} from "express";
import path from "path";
import mongoose from "mongoose";
import { ExpressError } from "./utils/ExpressError";
import {wrapAsync} from './utils/catchAsync';
import { signupSchema, signinSchema} from "./schemas";
import {Customer, ICustomer} from "./models/customer";
import { Category } from "./models/category";
import { Service } from "./models/service";
const app = express();
const port = 8080;
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');

app.engine('ejs',ejsMate);
app.set('views', path.join(__dirname,'../', '/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'../','../','public')))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));

const validateUserDetails = async (req: Request, res: Response, next: NextFunction) => {
    const {error} = signupSchema.validate(req.body);
    const foundCustomer = await Customer.find({email: req.body.user.email})
    if(error){
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError(msg, 400);
    } else if (foundCustomer.length){
        const message = `${foundCustomer[0].email} is in use please use an other email`
        res.render('signup', {message});
    } else {
        next();
    }

}


const signInValidaton = async (req: Request, res: Response, next: NextFunction) => {
    const {error} = signinSchema.validate(req.body);
    const foundCustomer = await Customer.find({email: req.body.user.email, password: req.body.user.password})
    if(error){
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError(msg, 400);
    } else if (!foundCustomer.length){
        const message = `This is not a correct account please try again`
        res.render('signin', {message});
    } else {
        res.locals.foundCustomer = foundCustomer[0];
        next();
    }

}

mongoose.connect('mongodb://127.0.0.1:27017/OneOnOneDb')
    .then(() => {
        console.log("Mongo Connection Open!")
    })
    .catch(err => {
        console.log("Oh No Monge Conection ERROR!!!!")
        console.log(err)
    })

app.get('/home', (req, res) => {
    res.render('home')
});

app.get('/services', wrapAsync( async (req, res) => {
    const categories = await Category.find({});
    res.render('services',{categories});
}));

app.get('/services/:category', wrapAsync( async (req, res) => {
    const {category} = req.params;
    const arr = category.split('-');
    arr.forEach((str,index) => {
        arr[index] = str.charAt(0).toUpperCase() + str.slice(1)
    })
    const correctCategoryName = arr.join(' ');
    const foundCategory = await Category.find({name: correctCategoryName})
    if(foundCategory.length === 0) throw new ExpressError(`There is not a Category with name ${category}`, 404)
    const foundServices = await Service.find({category: correctCategoryName})
    if(foundServices.length === 0) throw new ExpressError(`There are not services in the Category ${category}`, 404)
    res.render('about',{foundServices,foundCategory})
}));

app.get('/services/:category/:service', wrapAsync( async (req, res) => {
    const {service, category} = req.params;
    const foundService = await Service.find({name: service}).populate('providers');
    if(foundService.length === 0) throw new ExpressError(`There are not provider for  ${service} in ${category} Category`, 404)
    res.render('providers',{service, category, foundService});
}));


app.get('/signin', (req, res) => {
    const message = ''
    res.render('signin', {message});
})

app.post('/signin',signInValidaton,(req, res) => {
    res.render('home', {name: res.locals.foundCustomer.firstName })
})

app.get('/signup', (req, res) => {
    const message = ''
    res.render('signup', {message})
});

app.post('/signup',validateUserDetails, wrapAsync( async (req, res) => {
    const newCustomer = new Customer(req.body.user);
    await newCustomer.save()
    .then(() => {
        res.redirect('/home');
    })
    .catch((e) => {
        res.render(e);
    })
}));

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


