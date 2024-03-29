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

    interface ISeedCategory {
        name: string;
        id  : string;
        backgroundColor : string;
    }

     const seedCategories: ISeedCategory[] = [
        {
            name: 'Fitness',
            id  : 'fitness',
            backgroundColor : '#e76f51',
        },
        {
            name: 'Cosmetology',
            id  : 'cosmetology',
            backgroundColor : '#a2d2ff',

        },
        {
            name: 'Home Repairs',
            id  : 'home-repairs',
            backgroundColor : '#2a9d8f',
        },
        {
            name: 'Teaching',
            id  : 'teaching',
            backgroundColor : '#e9c46a',
        },
        {
            name: 'Health',
            id  : 'health',
            backgroundColor : '#ffc8dd',
        },
    ]

    export const insertCategories = async () => {
        await Category.deleteMany({});
        await Category.insertMany(seedCategories)
        .then(res => {
            // console.log("Categories Inserted:");
            // console.log(res);
        })
    };

// insertCategories();

