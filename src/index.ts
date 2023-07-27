import express, {Express, Request, Response} from "express";
const app = express();
const port = 3000;
import path from "path";
import mongoose from "mongoose";
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






app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/services', (req, res) => {
    res.render('services')
})
app.get('/signup', (req, res) => {
    res.render('signup')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})


