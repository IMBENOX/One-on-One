import express, {Express, Request, Response} from "express";
import path from "path";
import mongoose from "mongoose";
const app = express();
const port = 8080;
const methodOverride = require('method-override');

app.set('views', path.join(__dirname,'../', '/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'../','../','public')))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));


mongoose.connect('mongodb://127.0.0.1:27017/OneOnOneDb')
    .then(() => {
        console.log("Mongo Connection Open!")
    })
    .catch(err => {
        console.log("Oh No Monge Conection ERROR!!!!")
        console.log(err)
    })

import {Customer} from "./models/customer";
import { Category } from "./models/category";



app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/services', async (req, res) => {
    const categories = await Category.find({});
    // res.send(categories);
    res.render('services',{categories});
})

app.get('/signup', (req, res) => {
    res.render('signup')
})

app.post('/signup', async (req, res) => {
    console.log(req.body);
    const newCustomer = new Customer(req.body);
    await newCustomer.save()
    .then(() => {
        res.redirect('/home');
    })
    .catch((e) => {
        res.render(e);
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})


