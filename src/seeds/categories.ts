import mongoose from "mongoose";
import {Category} from "../models/category";


mongoose.connect('mongodb://127.0.0.1:27017/OneOnOneDb')
    .then(() => {
        console.log("Database Connected")
    })
    .catch(err => {
        console.log("Conection error")
        console.log(err)
    })

    const seedCategories = [
        {
            name: 'Fitness',
            id          : 'fitnessCategory',
            objectsId   : 'fitnessCatalog',
            isSelected  : true,
            icon             : 'url("images/fitnessIcon.jpg")',
            backgroundColor : '#e76f51',
            htmlLocation :'about.html',
        },
        {
            name: 'Cosmetology',
            id          : 'cosmetologyCategory',
            objectsId   : 'cosmetologyCatalog',
            isSelected  : false,
            icon             : 'url("images/cosmetologyIcon.jpg")',
            backgroundColor : '#a2d2ff',
            htmlLocation :'about.html',
        },
        {
            name: 'Home Repairs',
            id          : 'homeRepairsCategory',
            objectsId   : 'homeRepairsCatalog',
            isSelected   : false,
            icon              : 'url("images/homeRepairsIcon.jpg")',
            backgroundColor : '#2a9d8f',
            htmlLocation :'about.html',
        },
        {
            name: 'Teaching',
            id          : 'teachingCategory',
            objectsId   : 'teachingCatalog',
            isSelected  : false,
            icon             : 'url("images/teachingIcon.jpg")',
            backgroundColor : '#e9c46a',
            htmlLocation :'about.html',
        },
        {
            name: 'Health',
            id          : 'healthCategory',
            objectsId   : 'healthCatalog',
            isSelected     : false,
            icon                : 'url("images/healthIcon.jpg")',
            backgroundColor : '#ffc8dd',
            htmlLocation :'about.html',
        },
    ]

    const insertCategories = async () => {
        await Category.deleteMany({});
        await Category.insertMany(seedCategories)
        .then(res => {
            console.log("Data Inserted:");
            // console.log(res);
        })
    };

insertCategories();

